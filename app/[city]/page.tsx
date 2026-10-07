import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { locationMap, locations } from "@/lib/locations";

export function generateStaticParams() { return locations.map(location => ({ city: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params; const location = locationMap[city]; if (!location) return {};
  return { title: location.title, description: location.description, alternates: { canonical: `/${location.slug}` }, openGraph: { title: location.title, description: location.description, url: `/${location.slug}`, type: "website", locale: "de_DE" } };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params; const location = locationMap[city]; if (!location) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `Webdesign ${location.name}`, description: location.description, areaServed: { "@type": "AdministrativeArea", name: location.name }, provider: { "@type": "Organization", name: "Digital Service Gross", url: "https://digitalservicegross.de" }, url: `https://digitalservicegross.de/${location.slug}` };
  return <><Navigation /><main className="location-page">
    <section className="location-hero"><div className="location-grid" aria-hidden="true" /><div className="location-breadcrumb"><Link href="/"><ArrowLeft size={16} /> Startseite</Link><span>/</span><span>{location.name}</span></div><Reveal className="location-title"><p className="kicker kicker-light">{location.eyebrow}</p><h1>{location.headline}</h1><p>{location.intro}</p><a className="button button-primary" href="#lokale-anfrage">Projekt in {location.name} anfragen <ArrowUpRight size={18} /></a></Reveal><div className="location-code" aria-hidden="true"><span>REGION</span><strong>{location.slug.toUpperCase()}</strong><i /></div></section>
    <section className="location-context section-pad"><Reveal><p className="kicker">Der regionale Blick</p><h2>{location.contextTitle}</h2></Reveal><Reveal className="location-context-copy"><p>{location.context}</p><div>{location.focus.map(item => <span key={item}><Check size={17} />{item}</span>)}</div></Reveal></section>
    <section className="location-approach section-pad"><Reveal className="section-heading"><p className="kicker kicker-light">Unser Ansatz</p><h2>{location.approachTitle}</h2></Reveal><div className="location-approach-grid">{location.approach.map((item, index) => <Reveal className="location-point" key={item.title} delay={index * .08}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div></section>
    <section className="location-links section-pad"><Reveal><p className="kicker">Auch in der Region</p><h2>Weitere lokale Schwerpunkte.</h2></Reveal><div>{location.links.map(slug => <Link key={slug} href={`/${slug}`}><span>{locationMap[slug].name}</span><ArrowUpRight /></Link>)}</div></section>
    <section className="location-cta section-pad" id="lokale-anfrage"><Reveal><p className="kicker kicker-light">Nächster Schritt</p><h2>Lassen Sie uns klären, was digital wirklich weiterhilft.</h2><p>Eine kurze Projektbeschreibung reicht für eine erste Einordnung. Sie erhalten eine konkrete Rückmeldung zu sinnvoller Lösung, Umfang und nächstem Schritt.</p><Link className="button button-primary" href="/#anfrage">Projekt anfragen <ArrowUpRight /></Link></Reveal></section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
