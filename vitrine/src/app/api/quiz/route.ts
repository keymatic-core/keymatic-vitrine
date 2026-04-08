import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, contact } = body;

    if (!answers || !contact?.name || !contact?.whatsapp) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin.from("quiz_leads").insert({
      answers,
      contact_name: contact.name,
      contact_whatsapp: contact.whatsapp,
      contact_email: contact.email || null,
      delivery_preference: contact.delivery || "whatsapp",
      source: request.headers.get("referer") || "direct",
    }).select("id").single();

    if (error) {
      console.error("[QUIZ_ERROR] Supabase insert failed:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        contact_name: contact.name,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        { error: "Erro ao salvar resposta" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, profileId: data.id });
  } catch (err) {
    console.error("[QUIZ_ERROR] Failed to process quiz submission:", {
      error: err instanceof Error ? err.message : String(err),
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "Erro ao processar quiz" },
      { status: 500 }
    );
  }
}
