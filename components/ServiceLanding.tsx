import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { Reveal } from "./Reveal";
import type { ServicePageData } from "@/lib/servicePages";

export function ServiceLanding({ service }: { service: ServicePageData }) {
  return <><Navigation /><main className="service-landing"><section className="service-landing-hero"><div className="service-landing-grid" aria-hidden="true" /><Link className="service-back" href="/#leistungen"><ArrowLeft size={16} /> Alle Leistungen</Link><Reveal className="service-landing-content"><p className="kicker kicker-light">{service.eyebrow}</p><h1>{service.headline}</h1><p>{service.intro}</p><Link className="nav-cta service-page-cta" href="/#anfrage">Projekt anfragen <ArrowUpRight size={18} /></Link></Reveal><div className="service-signal" aria-label="Leistungsversprechen"><span>DSG / SERVICE</span><strong>{service.signal}</strong></div></section></main><Footer /></>;
}
