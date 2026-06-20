import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { getAdminsCollection, serializeAdmin } from "@/models/admin";
import { signAdminToken } from "@/lib/jwt";
import { ADMIN_TOKEN_COOKIE } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = body.email;
    const password = body.password;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.trim().length === 0 ||
      password.length === 0
    ) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const admins = await getAdminsCollection();
    const admin = await admins.findOne({ email: normalizedEmail });

    if (!admin) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isValid) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signAdminToken(admin._id.toHexString());

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_TOKEN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: ONE_WEEK_IN_SECONDS,
    });

    return Response.json({
      success: true,
      admin: serializeAdmin(admin),
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
