import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
export const runtime = "nodejs";
const requestSchema = z.object({ name: z.string().trim().min(2).max(100), company: z.string().trim().min(2).max(150), email: z.email().max(200), phone: z.string().trim().max(50).optional(), service: z.string().trim().min(1).max(100), budget: z.string().trim().min(1).max(100), message: z.string().trim().min(20).max(5000), website: z.string().max(0).optional() });
const attempts = new Map<string, number[]>();
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char] || char)); }
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"; const now = Date.now(); const recent = (attempts.get(ip) || []).filter(time => now - time < 15 * 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Zu viele Anfragen." }, { status: 429 });
  let body: unknown; try { body = await request.json(); } catch { return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 }); }
  const parsed = requestSchema.safeParse(body); if (!parsed.success) return NextResponse.json({ error: "Bitte prüfen Sie Ihre Angaben." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); attempts.set(ip, [...recent, now]);
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL) return NextResponse.json({ error: "E-Mail-Konfiguration fehlt." }, { status: 503 });
  const transport = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: SMTP_SECURE === "true", auth: { user: SMTP_USER, pass: SMTP_PASSWORD } });
  const d = parsed.data; const safe = Object.fromEntries(Object.entries(d).filter(([, value]) => typeof value === "string").map(([key, value]) => [key, escapeHtml(value as string)]));
  try { await transport.sendMail({ from: SMTP_FROM || SMTP_USER, to: CONTACT_EMAIL, replyTo: d.email, subject: `Projektanfrage: ${d.company} – ${d.service}`, text: `Name: ${d.name}\nUnternehmen: ${d.company}\nE-Mail: ${d.email}\nTelefon: ${d.phone || "–"}\nLeistung: ${d.service}\nBudget: ${d.budget}\n\n${d.message}`, html: `<h2>Neue Projektanfrage</h2><p><b>Name:</b> ${safe.name}<br><b>Unternehmen:</b> ${safe.company}<br><b>E-Mail:</b> ${safe.email}<br><b>Telefon:</b> ${safe.phone || "–"}<br><b>Leistung:</b> ${safe.service}<br><b>Budget:</b> ${safe.budget}</p><h3>Projektbeschreibung</h3><p>${String(safe.message).replace(/\n/g, "<br>")}</p>` }); return NextResponse.json({ ok: true }); } catch (error) { console.error("SMTP send failed", error); return NextResponse.json({ error: "Versand fehlgeschlagen." }, { status: 500 }); }
}
