import {
  getContactsCollection,
  serializeContact,
  validateContactInput,
} from "@/models/contact";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const validation = validateContactInput(body);

    if (!validation.valid) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const collection = await getContactsCollection();

    const { insertedId } = await collection.insertOne({
      ...validation.data,
      createdAt: new Date(),
    });

    const contact = await collection.findOne({ _id: insertedId });

    if (!contact) {
      return Response.json(
        { error: "Failed to submit contact form" },
        { status: 500 }
      );
    }

    return Response.json(
      { contact: serializeContact(contact) },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
