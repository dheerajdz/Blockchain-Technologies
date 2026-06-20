import { type Collection, type WithId } from "mongodb";
import { getDb } from "@/lib/db";

export interface TeamDoc {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TeamDocument = WithId<TeamDoc>;

export interface TeamResponse {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
}

export async function getTeamsCollection(): Promise<Collection<TeamDoc>> {
  const db = await getDb();
  return db.collection<TeamDoc>("team");
}

export function serializeTeam(member: TeamDocument): TeamResponse {
  return {
    _id: member._id.toHexString(),
    name: member.name,
    role: member.role,
    bio: member.bio,
    image: member.image,
    order: member.order,
    createdAt: member.createdAt.toISOString(),
    updatedAt: member.updatedAt.toISOString(),
  };
}

export function validateTeamInput(
  input: Record<string, unknown>
): { valid: true; data: Omit<TeamDoc, "createdAt" | "updatedAt"> } | { valid: false; error: string } {
  const name = input.name;
  const role = input.role;

  if (typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "name is required" };
  }

  if (typeof role !== "string" || role.trim().length === 0) {
    return { valid: false, error: "role is required" };
  }

  let order: number | undefined;
  if (input.order !== undefined && input.order !== null) {
    const parsed = Number(input.order);
    if (Number.isNaN(parsed)) {
      return { valid: false, error: "order must be a number" };
    }
    order = parsed;
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      role: role.trim(),
      bio: typeof input.bio === "string" ? input.bio.trim() : undefined,
      image: typeof input.image === "string" ? input.image.trim() : undefined,
      order,
    },
  };
}
