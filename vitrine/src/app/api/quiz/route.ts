import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase";
import { rateLimit } from "../../../lib/rate-limit";
import { validateEmail } from "../../../lib/email-validation";

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 requests per minute per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const { allowed, retryAfter } = rateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Muitas requisições. Tente novamente em breve." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    // CSRF protection: verify request origin
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://keymatic.com.br",
      "https://www.keymatic.com.br",
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    ].filter(Boolean);

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Origem não autorizada" },
        { status: 403 }
      );
    }

    // Validate Content-Type
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type inválido" },
        { status: 415 }
      );
    }

    const body = await request.json();
    const { answers, contact, consent } = body;

    // Validate required fields
    if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

    if (!contact?.name || typeof contact.name !== "string" || contact.name.length > 100) {
      return NextResponse.json({ error: "Nome inválido" }, { status: 400 });
    }

    if (!contact?.whatsapp || typeof contact.whatsapp !== "string" || contact.whatsapp.length > 20) {
      return NextResponse.json({ error: "WhatsApp inválido" }, { status: 400 });
    }

    if (contact.email) {
      if (typeof contact.email !== "string") {
        return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
      }
      const emailCheck = await validateEmail(contact.email);
      if (!emailCheck.valid) {
        const messages = {
          format: "E-mail com formato inválido",
          disposable: "E-mails temporários não são aceitos",
          mx: "Este domínio de e-mail não existe ou não recebe mensagens",
        };
        return NextResponse.json(
          { error: messages[emailCheck.reason], reason: emailCheck.reason },
          { status: 400 }
        );
      }
    }

    // Limit answers to prevent abuse (max 10 answers, values max 100 chars)
    const answerEntries = Object.entries(answers);
    if (answerEntries.length > 10 || answerEntries.some(([k, v]) => typeof k !== "string" || typeof v !== "string" || k.length > 50 || (v as string).length > 100)) {
      return NextResponse.json({ error: "Respostas inválidas" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin.from("quiz_leads").insert({
      answers,
      contact_name: contact.name,
      contact_whatsapp: contact.whatsapp,
      contact_email: contact.email || null,
      delivery_preference: contact.delivery || "whatsapp",
      source: request.headers.get("referer") || "direct",
      cookie_consent: consent === true,
    }).select("id").single();

    if (error) {
      console.error("[QUIZ_ERROR] Supabase insert failed:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
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
