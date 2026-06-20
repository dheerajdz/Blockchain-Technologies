import { type Collection, type WithId } from "mongodb";
import { getDb } from "@/lib/db";

export interface ContactDoc {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export type ContactDocument = WithId<ContactDoc>;

export interface ContactResponse {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export async function getContactsCollection(): Promise<Collection<ContactDoc>> {
  const db = await getDb();
  return db.collection<ContactDoc>("contacts");
}

export function serializeContact(contact: ContactDocument): ContactResponse {
  return {
    _id: contact._id.toHexString(),
    name: contact.name,
    email: contact.email,
    message: contact.message,
    createdAt: contact.createdAt.toISOString(),
  };
}

export function validateContactInput(
  input: Record<string, unknown>
): { valid: true; data: Omit<ContactDoc, "createdAt"> } | { valid: false; error: string } {
  const name = input.name;
  const email = input.email;
  const message = input.message;

  if (typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "name is required" };
  }

  if (typeof email !== "string" || email.trim().length === 0) {
    return { valid: false, error: "email is required" };
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "message is required" };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    },
  };
}
