import { ObjectId, type Collection, type WithId } from "mongodb";
import { getDb } from "@/lib/db";

export interface AdminDoc {
  name: string;
  email: string;
  passwordHash: string;
  role: "admin";
  createdAt: Date;
}

export type AdminDocument = WithId<AdminDoc>;

export interface SafeAdmin {
  _id: string;
  name: string;
  email: string;
  role: "admin";
  createdAt: string;
}

export async function getAdminsCollection(): Promise<Collection<AdminDoc>> {
  const db = await getDb();
  return db.collection<AdminDoc>("admins");
}

export function serializeAdmin(admin: AdminDocument): SafeAdmin {
  return {
    _id: admin._id.toHexString(),
    name: admin.name,
    email: admin.email,
    role: admin.role,
    createdAt: admin.createdAt.toISOString(),
  };
}

export async function findAdminByEmail(
  email: string
): Promise<AdminDocument | null> {
  const admins = await getAdminsCollection();
  return admins.findOne({ email: email.toLowerCase().trim() });
}

export async function findAdminById(
  id: string
): Promise<AdminDocument | null> {
  if (!ObjectId.isValid(id)) return null;
  const admins = await getAdminsCollection();
  return admins.findOne({ _id: new ObjectId(id) });
}
