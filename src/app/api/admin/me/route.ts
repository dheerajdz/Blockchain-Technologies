import { getCurrentAdmin } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ admin });
}
