"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const schema = z.object({ name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."), company: z.string().min(2, "Bitte geben Sie Ihr Unternehmen ein."), email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."), phone: z.string().optional(), service: z.string().min(1, "Bitte wählen Sie eine Leistung."), budget: z.string().min(1, "Bitte wählen Sie ein Budget."), message: z.string().min(20, "Bitte beschreiben Sie Ihr Projekt in mindestens 20 Zeichen."), website: z.string().optional() });
type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: FormData) => { setServerState("idle"); try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); if (!response.ok) throw new Error(); setServerState("success"); reset(); } catch { setServerState("error"); } };
  const field = (name: keyof FormData) => errors[name] && <span className="field-error">{errors[name]?.message}</span>;
  return <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-grid"><label><span>Name *</span><input {...register("name")} autoComplete="name" placeholder="Ihr Name" />{field("name")}</label><label><span>Unternehmen *</span><input {...register("company")} autoComplete="organization" placeholder="Unternehmensname" />{field("company")}</label><label><span>E-Mail *</span><input {...register("email")} type="email" autoComplete="email" placeholder="name@unternehmen.de" />{field("email")}</label><label><span>Telefon</span><input {...register("phone")} type="tel" autoComplete="tel" placeholder="Optional" /></label><label><span>Gewünschte Leistung *</span><select {...register("service")} defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Landingpage</option><option>Business Website</option><option>Growth Website</option><option>Performance Website</option><option>Bestehende Website verbessern</option><option>Individuelle Software</option><option>SEO / GEO / AEO</option><option>Google Ads</option></select>{field("service")}</label><label><span>Budget *</span><select {...register("budget")} defaultValue=""><option value="" disabled>Bitte auswählen</option><option>bis 1.000 €</option><option>1.000–3.000 €</option><option>3.000–7.500 €</option><option>7.500–15.000 €</option><option>über 15.000 €</option><option>Noch offen</option></select>{field("budget")}</label></div>
    <label className="message-field"><span>Projektbeschreibung *</span><textarea {...register("message")} rows={6} placeholder="Was möchten Sie erreichen? Was gibt es bereits?" />{field("message")}</label><label className="honeypot" aria-hidden="true">Website<input {...register("website")} tabIndex={-1} autoComplete="off" /></label>
    <div className="form-submit"><p>Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage zu. Details in der <Link href="/datenschutz">Datenschutzerklärung</Link>.</p><button type="submit" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="spinner" /> Wird gesendet</> : <>Anfrage senden <ArrowUpRight size={19} /></>}</button></div>
    {serverState === "success" && <div className="form-status success" role="status"><CheckCircle2 /> Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.</div>}{serverState === "error" && <div className="form-status error" role="alert">Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an kontakt@digitalservicegross.de.</div>}
  </form>;
}
