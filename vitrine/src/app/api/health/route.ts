import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase";

const RETENTION_MONTHS = 24;

export async function GET(request: NextRequest) {
  // Auth: only Vercel Cron (Bearer header) is allowed
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = request.headers.get("authorization") === `Bearer ${cronSecret}`;

  if (!cronSecret || !isVercelCron) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 1. Supabase health ping
  const { error: pingError } = await supabaseAdmin.from("quiz_leads").select("id", {
    count: "exact",
    head: true,
  });

  if (pingError) {
    console.error("[HEALTH] Supabase ping failed:", pingError.message);
    return NextResponse.json(
      { status: "error", message: pingError.message, timestamp: new Date().toISOString() },
      { status: 503 }
    );
  }

  // 2. LGPD data retention cleanup (delete leads older than 24 months)
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - RETENTION_MONTHS);

  const { count: deletedCount, error: cleanupError } = await supabaseAdmin
    .from("quiz_leads")
    .delete({ count: "exact" })
    .lt("created_at", cutoffDate.toISOString());

  if (cleanupError) {
    console.error("[HEALTH] LGPD cleanup failed:", cleanupError.message);
  } else if (deletedCount && deletedCount > 0) {
    console.log(`[HEALTH] LGPD cleanup: deleted ${deletedCount} leads older than ${RETENTION_MONTHS} months`);
  }

  return NextResponse.json({
    status: "ok",
    supabase: "connected",
    lgpd_cleanup: {
      deleted: deletedCount ?? 0,
      cutoff_date: cutoffDate.toISOString(),
    },
    timestamp: new Date().toISOString(),
  });
}
