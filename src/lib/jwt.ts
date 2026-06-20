import jwt from "jsonwebtoken";

export interface AdminJwtPayload {
  adminId: string;
}

function getSecret(): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("Please define the JWT_SECRET environment variable.");
  }

  return secret;
}

export function signAdminToken(adminId: string): string {
  return jwt.sign({ adminId }, getSecret(), { expiresIn: "7d" });
}

export function verifyAdminToken(token: string): AdminJwtPayload | null {
  try {
    const payload = jwt.verify(token, getSecret()) as AdminJwtPayload;
    return payload;
  } catch {
    return null;
  }
}
