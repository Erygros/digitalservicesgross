import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
  { title: "Webdesign & Entwicklung", text: "Individuell konzipiert, sauber entwickelt und auf das Ziel Ihres Unternehmens ausgerichtet." },
  { title: "Bestehende Website verbessern", text: "Technik, Inhalte, Struktur und Conversion gezielt optimieren – ohne funktionierende Bereiche unnötig neu zu bauen." },
  { title: "SEO · GEO · AEO", text: "Für klassische Suche, KI-Antworten und konkrete Fragen sichtbar werden – technisch und redaktionell." },
  { title: "CRO & Performance", text: "Reibung reduzieren, Ladezeiten verbessern und aus Aufmerksamkeit nachvollziehbar mehr Anfragen machen." },
  { title: "Google Ads", text: "Kampagnen, Landingpages und Messbarkeit als zusammenhängendes System statt isolierter Anzeigen." },
  { title: "Funnel & Kundenmagnete", text: "Nützliche Einstiege, die Interesse in qualifizierte Kontakte und klare nächste Schritte übersetzen." },
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
      <main className="home-page">
        <Hero />
        <section className="statement" aria-label="Positionierung">
          <div className="statement-ambient" aria-hidden="true" />
          <Reveal className="statement-copy">
            <h2>Eine Website ist nicht nur Oberfläche. <span>Sie ist Vertrieb, System und Werkzeug zugleich.</span></h2>
            <div className="statement-support"><p>Gestaltung, Technik und Inhalte greifen so ineinander, dass aus einem guten ersten Eindruck ein klarer Weg bis zur Anfrage wird.</p><a href="#leistungen">Leistungen ansehen <ArrowUpRight size={18} /></a></div>
          </Reveal>
        </section>

        <section className="services section-pad" id="leistungen"><Reveal className="section-heading wide-heading"><p className="kicker">Leistungen</p><h2>Von der ersten Idee bis zum System, das im Alltag funktioniert.</h2></Reveal><div className="service-grid">
          {services.map((service, index) => <Reveal key={service.title} className={`service-card service-${index + 1}`} delay={index * .04}><span className="service-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#anfrage" className="text-link" aria-label={`${service.title} anfragen`}><ArrowUpRight size={18} /></a></Reveal>)}
        </div></section>

        <section className="software section-pad" id="software"><Reveal className="software-copy"><p className="kicker kicker-light">Individuelle Software</p><h2>Wenn der Prozess nicht in ein fertiges Produkt passt.</h2><p>Wir entwickeln digitale Werkzeuge entlang Ihrer tatsächlichen Abläufe – von Kundenportalen und Webapps bis zu Automatisierungen und Schnittstellen.</p><a className="editorial-link" href="#anfrage">Software besprechen <ArrowUpRight size={18} /></a></Reveal><Reveal className="software-fields" delay={.1}>{["Webapps und Portale", "Interne Werkzeuge", "Automatisierte Abläufe", "Schnittstellen und Daten"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</Reveal></section>

        <section className="ai-section section-pad"><Reveal className="ai-title"><p className="kicker">Website mit KI?</p><h2>Erzeugen ist leicht. Verlässlich betreiben ist die eigentliche Arbeit.</h2></Reveal><div className="ai-answer"><Reveal><p className="answer-lead">KI kann Design und Code beschleunigen. Eine professionelle Website braucht trotzdem ein belastbares technisches Fundament.</p></Reveal><Reveal className="ai-detail" delay={.1}><p>Domain, Sicherheit, Messbarkeit, Ladezeit, E-Mail-Versand und Wartung müssen zusammen funktionieren. Sie entscheiden, ob Sie nur die Website übernehmen oder die technische Einrichtung direkt mitbuchen.</p><a className="editorial-link" href="#pakete">Optionen vergleichen <ArrowUpRight size={18} /></a></Reveal></div></section>

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
