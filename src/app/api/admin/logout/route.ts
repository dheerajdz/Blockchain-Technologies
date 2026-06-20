import { cookies } from "next/headers";
import { ADMIN_TOKEN_COOKIE } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_TOKEN_COOKIE);

  return Response.json({ success: true });
}
