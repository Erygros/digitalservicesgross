import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return <><Navigation /><main className="legal"><div className="legal-head"><Link href="/"><ArrowLeft size={16} /> Zurück zur Startseite</Link><p className="kicker kicker-light">Rechtliches</p><h1>{title}</h1><span>Stand: {updated}</span></div><article className="legal-copy">{children}</article></main><Footer /></>;
}
