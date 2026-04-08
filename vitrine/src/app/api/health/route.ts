import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase";

export async function GET(request: NextRequest) {
  // Allow Vercel Cron (sends CRON_SECRET header) or a manual token param
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = request.headers.get("authorization") === `Bearer ${cronSecret}`;
  const isManualToken = request.nextUrl.searchParams.get("token") === cronSecret;

  if (cronSecret && !isVercelCron && !isManualToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { error } = await supabaseAdmin.from("quiz_leads").select("id", {
    count: "exact",
    head: true,
  });

  if (error) {
    console.error("[HEALTH] Supabase ping failed:", error.message);
    return NextResponse.json(
      { status: "error", message: error.message, timestamp: new Date().toISOString() },
      { status: 503 }
    );
  }

  return NextResponse.json({
    status: "ok",
    supabase: "connected",
    timestamp: new Date().toISOString(),
  });
}
