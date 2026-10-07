import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Bot, Braces, ChartNoAxesCombined, Check, Gauge, Magnet, Search, Wrench } from "lucide-react";

const services = [
  { icon: Braces, title: "Webdesign & Entwicklung", text: "Individuell konzipiert, sauber entwickelt und auf das Ziel Ihres Unternehmens ausgerichtet.", tag: "Website" },
  { icon: Wrench, title: "Bestehende Website verbessern", text: "Technik, Inhalte, Struktur und Conversion gezielt optimieren – ohne funktionierende Bereiche unnötig neu zu bauen.", tag: "Optimierung" },
  { icon: Search, title: "SEO · GEO · AEO", text: "Für klassische Suche, KI-Antworten und konkrete Fragen sichtbar werden – technisch und redaktionell.", tag: "Sichtbarkeit" },
  { icon: Gauge, title: "CRO & Performance", text: "Reibung reduzieren, Ladezeiten verbessern und aus Aufmerksamkeit nachvollziehbar mehr Anfragen machen.", tag: "Wirkung" },
  { icon: ChartNoAxesCombined, title: "Google Ads", text: "Kampagnen, Landingpages und Messbarkeit als zusammenhängendes System statt isolierter Anzeigen.", tag: "Reichweite" },
  { icon: Magnet, title: "Funnel & Kundenmagnete", text: "Nützliche Einstiege, die Interesse in qualifizierte Kontakte und klare nächste Schritte übersetzen.", tag: "Anfragen" },
];

const packages = [
  { name: "Landingpage", price: "799 €", note: "einmalig", featured: false, items: ["Individuelle Landingpage", "Responsive Umsetzung", "Funnel zu E-Mail oder WhatsApp", "Basis SEO, GEO und AEO", "Projektdateien & Anleitung"] },
  { name: "Business Website", price: "Auf Anfrage", note: "bis ca. 3–4 Seiten", featured: true, items: ["Individuelles Design", "SEO, GEO und AEO Basis", "Kontakt-Funnel", "Responsive Umsetzung", "Klare Seitenarchitektur"] },
  { name: "Growth Website", price: "Auf Anfrage", note: "für planbares Wachstum", featured: false, items: ["Mehr Seiten & Branchenanalyse", "SEO, GEO, AEO und CRO", "Kundenmagnet", "Conversion-Funnel", "Tracking-Vorbereitung"] },
  { name: "Performance Website", price: "Auf Anfrage", note: "vollständiges System", featured: false, items: ["Vollständige Optimierung", "Individuelle Landingpages", "Google Ads Setup", "Kundenmagnet", "Conversion-Struktur"] },
];

const retainers = [
  { name: "Hosting & Care", price: "49 €", unit: "/ Monat", text: "Hosting, Monitoring, technische Pflege, Updates und Backups." },
  { name: "Support Plus", price: "99 €", unit: "/ Monat", text: "Hosting & Care, priorisierter Support, kleine Änderungen und Performancekontrolle." },
  { name: "Growth Betreuung", price: "ab 249 €", unit: "/ Monat", text: "SEO, GEO, AEO, CRO und laufende Optimierung." },
  { name: "Ads Management", price: "ab 349 €", unit: "/ Monat", text: "Google Ads, Kampagnenoptimierung, Tracking und Landingpage-Optimierung. Werbebudget exklusive." },
];

const faqs = [
  ["Was kostet eine Website?", "Eine individuelle Landingpage kostet 799 € einmalig. Umfangreichere Websites und Software kalkulieren wir nach Ziel, Umfang und technischer Komplexität transparent vor Projektstart."],
  ["Was ist bei der Landingpage für 799 € enthalten?", "Die fertige responsive Website, Basis-Optimierung für SEO, GEO und AEO, alle Projektdateien und eine verständliche Anleitung zur Veröffentlichung. Hosting, Domain-Verbindung und Live-Schaltung sind nicht enthalten."],
  ["Kann ich die Website selbst veröffentlichen?", "Ja. Sie erhalten die Projektdateien und eine Anleitung. Wenn Sie sich nicht um Vercel, DNS, SSL, SMTP und die finale Prüfung kümmern möchten, können Sie die technische Einrichtung hinzubuchen."],
  ["Arbeiten Sie auch an bestehenden Websites?", "Ja. Wir prüfen, was bereits funktioniert, und verbessern gezielt Technik, Nutzerführung, Inhalte, Sichtbarkeit und Conversion – statt reflexartig alles neu zu bauen."],
  ["Was bedeuten GEO und AEO?", "GEO verbessert die Zitierfähigkeit in KI-Suchsystemen. AEO strukturiert Inhalte so, dass konkrete Fragen direkt beantwortet werden. Beides ergänzt klassische Suchmaschinenoptimierung."],
  ["Wie läuft ein Projekt ab?", "Nach einer kurzen Analyse erhalten Sie eine klare Empfehlung und ein verbindliches Angebot. Danach folgen Konzeption, Design, Entwicklung, Qualitätssicherung und Übergabe oder Live-Schaltung."],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://digitalservicegross.de/#organization", name: "Digital Service Gross", url: "https://digitalservicegross.de", logo: "https://digitalservicegross.de/logo-mark.svg", email: "kontakt@digitalservicegross.de" },
      { "@type": "Service", "@id": "https://digitalservicegross.de/#service", name: "Webdesign, Webentwicklung und digitale Systeme", provider: { "@id": "https://digitalservicegross.de/#organization" }, areaServed: "DE", serviceType: ["Webdesign", "Webentwicklung", "SEO", "GEO", "AEO", "CRO", "Google Ads", "Individuelle Software"] },
      { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <section className="statement" aria-label="Positionierung">
          <div className="statement-line" aria-hidden="true"><span>DESIGN</span><i /><span>TECHNIK</span><i /><span>WACHSTUM</span></div>
          <Reveal className="statement-copy"><p className="kicker">Nicht nur eine schöne Oberfläche</p><h2>Eine gute Website ist <em>Vertrieb, System und Werkzeug</em> zugleich.</h2><p>Wir verbinden klare Gestaltung mit sauberer Technik und einer Struktur, die Menschen vom ersten Eindruck bis zur Anfrage führt.</p></Reveal>
        </section>

        <section className="services section-pad" id="leistungen"><Reveal className="section-heading wide-heading"><p className="kicker">Leistungsspektrum</p><h2>Alles, was zwischen <span>gefunden werden</span> und <span>Auftrag gewinnen</span> passiert.</h2></Reveal><div className="service-grid">
          {services.map((service, index) => { const Icon = service.icon; return <Reveal key={service.title} className={`service-card service-${index + 1}`} delay={index * .04}><div className="service-meta"><span>{service.tag}</span><Icon size={23} strokeWidth={1.7} /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#anfrage" className="text-link">Details besprechen <ArrowUpRight size={17} /></a></Reveal>; })}
        </div></section>

        <section className="software section-pad" id="software"><div className="software-orbit" aria-hidden="true"><div className="orbit-core"><Braces /></div><span className="orbit o1">PORTAL</span><span className="orbit o2">AUTOMATION</span><span className="orbit o3">WEBAPP</span><span className="orbit o4">API</span></div><Reveal className="software-copy"><p className="kicker kicker-light">Wenn Standard nicht reicht</p><h2>Individuelle Software, die zu Ihrem Ablauf passt.</h2><p>Webapps, Kundenportale, interne Tools, Automatisierungen, Datenbanken, APIs und sinnvolle KI-Funktionen – exakt für den Prozess entwickelt, den Sie wirklich haben.</p><a className="button button-light" href="#anfrage">Software anfragen <ArrowUpRight size={18} /></a></Reveal></section>

        <section className="ai-section section-pad"><Reveal className="ai-title"><Bot size={32} /><p className="kicker">Eine faire Frage</p><h2>„Kann ich meine Website nicht einfach selbst mit KI erstellen?“</h2></Reveal><div className="ai-answer"><Reveal><p className="answer-lead">Ja – Design und Code kann KI heute erstaunlich schnell erzeugen.</p><p>Eine professionelle Website endet aber nicht beim Code. Sie muss erreichbar, sicher, messbar, schnell und wartbar sein.</p></Reveal><Reveal className="tech-stack" delay={.1}>{["Domain", "Hosting", "DNS", "SSL", "Deployment", "SMTP", "Datenbank", "Tracking", "SEO", "GEO", "AEO", "CRO", "Performance", "Wartung", "Backups"].map((item) => <span key={item}>{item}</span>)}</Reveal></div><Reveal className="choice-bar"><div><strong>Sie entscheiden.</strong><span>Nur Website kaufen und selbst veröffentlichen – oder die technische Einrichtung direkt mitbuchen.</span></div><a href="#pakete">Optionen vergleichen <ArrowUpRight size={18} /></a></Reveal></section>

        <section className="process section-pad" id="prozess"><Reveal className="section-heading"><p className="kicker">Der Weg zur fertigen Lösung</p><h2>Vier klare Etappen.<br />Keine Blackbox.</h2></Reveal><div className="process-list">{[["01", "Verstehen", "Ziele, Zielgruppe, bestehende Systeme und echte Engpässe klären."], ["02", "Konzipieren", "Struktur, Nutzerwege, Inhalte und technische Lösung festlegen."], ["03", "Bauen", "Design und Entwicklung eng verzahnt umsetzen und laufend prüfen."], ["04", "Übergeben", "Sauber testen, verständlich dokumentieren und auf Wunsch live schalten."]].map(([n, title, text], i) => <Reveal className="process-row" delay={i * .06} key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight /></Reveal>)}</div></section>

        <section className="pricing section-pad" id="pakete"><Reveal className="section-heading pricing-heading"><p className="kicker kicker-light">Pakete</p><h2>Ein klarer Einstieg.<br />Passend skalierbar.</h2><p>Keine künstlichen Leistungslücken. Jedes Paket wird so geplant, dass es seinen Zweck erfüllt.</p></Reveal><div className="pricing-grid">{packages.map((pkg, index) => <Reveal key={pkg.name} className={`price-card ${pkg.featured ? "featured" : ""}`} delay={index * .04}>{pkg.featured && <span className="recommend">Häufig gewählt</span>}<p className="price-index">0{index + 1}</p><h3>{pkg.name}</h3><div className="price">{pkg.price}</div><p className="price-note">{pkg.note}</p><ul>{pkg.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a href="#anfrage">Paket anfragen <ArrowUpRight size={18} /></a></Reveal>)}</div><Reveal className="setup-addon"><div><p className="kicker">Technische Einrichtung</p><h3>99 € <small>einmalig</small></h3></div><p>Vercel, Deployment, Domain, DNS, SSL, Environment Variables, SMTP, Funktionsprüfung und Live-Schaltung für einfache Websites.</p><span>Komplexe Systeme<br /><strong>ab 99 € nach Aufwand</strong></span></Reveal></section>

        <section className="retainers section-pad" id="addons"><Reveal className="section-heading"><p className="kicker">Nach dem Launch</p><h2>Technisch betreut.<br />Kontinuierlich verbessert.</h2></Reveal><div className="retainer-list">{retainers.map((item, i) => <Reveal className="retainer-row" key={item.name} delay={i * .05}><span className="retainer-no">0{i + 1}</span><h3>{item.name}</h3><p>{item.text}</p><div><strong>{item.price}</strong><span>{item.unit}</span></div></Reveal>)}</div></section>

        <section className="faq section-pad" id="faq"><Reveal className="section-heading"><p className="kicker">Kurz beantwortet</p><h2>Fragen vor dem Start.</h2></Reveal><div className="faq-list">{faqs.map(([question, answer], i) => <Reveal key={question} delay={i * .03}><details><summary><span>{question}</span><i>+</i></summary><p>{answer}</p></details></Reveal>)}</div></section>

        <section className="contact section-pad" id="anfrage"><div className="contact-intro"><Reveal><p className="kicker kicker-light">Projektanfrage</p><h2>Was soll Ihre Website <em>leisten?</em></h2><p>Erzählen Sie kurz, wo Sie stehen und was Sie erreichen möchten. Sie erhalten eine klare Einschätzung statt eines Verkaufsskripts.</p></Reveal><div className="contact-signal"><span /><p>Neue Projekte<br /><strong>werden angenommen</strong></p></div></div><ContactForm /></section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
