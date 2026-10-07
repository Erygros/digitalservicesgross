import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const cities = ["Dortmund", "Castrop-Rauxel", "Herne", "Bochum", "Witten", "Recklinghausen", "Essen", "NRW", "Berlin"];

export function Footer() {
  return <footer className="footer">
    <div className="footer-top"><Logo light /><p>Websites, digitale Systeme und Software, die einen konkreten Job erledigen.</p><a href="#top" aria-label="Nach oben">Nach oben <ArrowUpRight /></a></div>
    <div className="footer-grid">
      <div><h3>Leistungen</h3><Link href="/#leistungen">Webdesign & Entwicklung</Link><Link href="/#leistungen">Website-Optimierung</Link><Link href="/#leistungen">SEO · GEO · AEO · CRO</Link><Link href="/#software">Individuelle Software</Link><Link href="/#leistungen">Google Ads & Funnel</Link></div>
      <div><h3>Angebot</h3><Link href="/#pakete">Landingpage</Link><Link href="/#pakete">Business Website</Link><Link href="/#pakete">Growth Website</Link><Link href="/#pakete">Performance Website</Link><Link href="/#addons">Betreuung & Add-ons</Link></div>
      <div><h3>Vor Ort & remote</h3>{cities.map(city => <Link key={city} href={`/${city.toLowerCase()}`}>{city}</Link>)}</div>
      <div className="footer-contact"><h3>Kontakt</h3><a href="mailto:kontakt@digitalservicegross.de">kontakt@digitalservicegross.de</a><Link className="footer-cta" href="/#anfrage">Projekt anfragen <ArrowUpRight /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Digital Service Gross</span><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div><span>Konzipiert & entwickelt mit System.</span></div>
  </footer>;
}
