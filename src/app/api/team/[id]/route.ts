import {
  getTeamsCollection,
  serializeTeam,
  validateTeamInput,
} from "@/models/team";
import { requireAdmin } from "@/lib/adminAuth";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid id" }, { status: 400 });
    }

    const collection = await getTeamsCollection();
    const member = await collection.findOne({ _id: new ObjectId(id) });

    if (!member) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    return Response.json({ member: serializeTeam(member) });
  } catch (error) {
    console.error("GET /api/team/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    try {
      await requireAdmin();
    } catch {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = (await request.json()) as Record<string, unknown>;
    const validation = validateTeamInput(body);

    if (!validation.valid) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const collection = await getTeamsCollection();
    const updated = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...validation.data,
          updatedAt: new Date(),
        },
      },
      { returnDocument: "after" }
    );

    if (!updated) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    return Response.json({ member: serializeTeam(updated) });
  } catch (error) {
    console.error("PUT /api/team/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    try {
      await requireAdmin();
    } catch {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid id" }, { status: 400 });
    }

    const collection = await getTeamsCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/team/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
