import { type Collection, type WithId } from "mongodb";
import { getDb } from "@/lib/db";

export interface ProjectDoc {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectDocument = WithId<ProjectDoc>;

export interface ProjectResponse {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
}

export async function getProjectsCollection(): Promise<Collection<ProjectDoc>> {
  const db = await getDb();
  return db.collection<ProjectDoc>("projects");
}

export function serializeProject(project: ProjectDocument): ProjectResponse {
  return {
    _id: project._id.toHexString(),
    title: project.title,
    slug: project.slug,
    description: project.description,
    image: project.image,
    link: project.link,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  };
}

export function validateProjectInput(
  input: Record<string, unknown>
): { valid: true; data: Omit<ProjectDoc, "createdAt" | "updatedAt"> } | { valid: false; error: string } {
  const title = input.title;
  const slug = input.slug;

  if (typeof title !== "string" || title.trim().length === 0) {
    return { valid: false, error: "title is required" };
  }

  if (typeof slug !== "string" || slug.trim().length === 0) {
    return { valid: false, error: "slug is required" };
  }

  return {
    valid: true,
    data: {
      title: title.trim(),
      slug: slug.trim(),
      description:
        typeof input.description === "string" ? input.description.trim() : undefined,
      image: typeof input.image === "string" ? input.image.trim() : undefined,
      link: typeof input.link === "string" ? input.link.trim() : undefined,
    },
  };
}
