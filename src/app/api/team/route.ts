import {
  getTeamsCollection,
  serializeTeam,
  validateTeamInput,
} from "@/models/team";
import { requireAdmin } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const collection = await getTeamsCollection();
    const members = await collection
      .find()
      .sort({ order: 1, createdAt: -1 })
      .toArray();

    return Response.json({ members: members.map(serializeTeam) });
  } catch (error) {
    console.error("GET /api/team error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    try {
      await requireAdmin();
    } catch {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as Record<string, unknown>;
    const validation = validateTeamInput(body);

    if (!validation.valid) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const collection = await getTeamsCollection();
    const now = new Date();

    const { insertedId } = await collection.insertOne({
      ...validation.data,
      createdAt: now,
      updatedAt: now,
    });

    const member = await collection.findOne({ _id: insertedId });

    if (!member) {
      return Response.json(
        { error: "Failed to create team member" },
        { status: 500 }
      );
    }

    return Response.json(
      { member: serializeTeam(member) },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/team error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
