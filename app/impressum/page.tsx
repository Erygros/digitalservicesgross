import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Impressum", description: "Impressum und Anbieterkennzeichnung von Digital Service Gross.", alternates: { canonical: "/impressum" } };
const env = process.env;
const value = (name: string | undefined, fallback: string) => name || fallback;

export default function Impressum() {
  return <LegalPage title="Impressum" updated="Oktober 2026">
    <h2>Angaben gemäß § 5 DDG</h2><p><strong>{value(env.LEGAL_NAME, "Digital Service Gross")}</strong><br />{value(env.LEGAL_OWNER, "Inhaber bitte über LEGAL_OWNER hinterlegen")}<br />{value(env.LEGAL_STREET, "Anschrift bitte über LEGAL_STREET hinterlegen")}<br />{value(env.LEGAL_CITY, "Ort bitte über LEGAL_CITY hinterlegen")}</p>
    <h2>Kontakt</h2><p>Telefon: {value(env.LEGAL_PHONE, "Bitte über LEGAL_PHONE hinterlegen")}<br />E-Mail: <a href="mailto:kontakt@digitalservicegross.de">kontakt@digitalservicegross.de</a></p>
    {env.LEGAL_VAT_ID && <><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />{env.LEGAL_VAT_ID}</p></>}
    <h2>Redaktionell verantwortlich</h2><p>{value(env.LEGAL_OWNER, "Verantwortliche Person bitte über LEGAL_OWNER hinterlegen")}<br />{value(env.LEGAL_STREET, "Anschrift bitte über LEGAL_STREET hinterlegen")}<br />{value(env.LEGAL_CITY, "Ort bitte über LEGAL_CITY hinterlegen")}</p>
    <h2>Verbraucherstreitbeilegung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </LegalPage>;
}
