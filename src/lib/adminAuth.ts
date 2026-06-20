import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { verifyAdminToken } from "./jwt";
import {
  getAdminsCollection,
  serializeAdmin,
  type SafeAdmin,
} from "@/models/admin";

export const ADMIN_TOKEN_COOKIE = "admin_token";

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export async function getCurrentAdmin(): Promise<SafeAdmin | null> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get(ADMIN_TOKEN_COOKIE);

  if (!tokenCookie?.value) {
    return null;
  }

  const payload = verifyAdminToken(tokenCookie.value);

  if (!payload?.adminId || !ObjectId.isValid(payload.adminId)) {
    return null;
  }

  try {
    const admins = await getAdminsCollection();
    const admin = await admins.findOne(
      { _id: new ObjectId(payload.adminId) },
      { projection: { passwordHash: 0 } }
    );

    if (!admin) {
      return null;
    }

    return serializeAdmin(admin);
  } catch {
    return null;
  }
}

export async function requireAdmin(): Promise<SafeAdmin> {
  const admin = await getCurrentAdmin();

  if (!admin) {
    throw new UnauthorizedError();
  }

  return admin;
}

export async function isAuthenticatedAdmin(): Promise<boolean> {
  const admin = await getCurrentAdmin();
  return admin !== null;
}
