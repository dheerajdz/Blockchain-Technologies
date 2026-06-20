import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is not set");
  process.exit(1);
}

const email = process.argv[2];
const password = process.argv[3];
const name = process.argv[4] || "Admin";

if (!email || !password) {
  console.error("Usage: node scripts/seed-admin.mjs <email> <password> [name]");
  process.exit(1);
}

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = process.env.MONGODB_DB
      ? client.db(process.env.MONGODB_DB)
      : client.db();

    const admins = db.collection("admins");

    const existing = await admins.findOne({ email: email.toLowerCase().trim() });

    if (existing) {
      console.error("An admin with this email already exists");
      process.exit(1);
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await admins.insertOne({
      name,
      email: email.toLowerCase().trim(),
      passwordHash,
      role: "admin",
      createdAt: new Date(),
    });

    console.log(`Admin created with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
