"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { servicePages } from "@/lib/servicePages";

const primaryLinks = [
  { label: "Prozess", href: "/#prozess" },
  { label: "Pakete", href: "/#pakete" },
  { label: "FAQ", href: "/#faq" },
];

const easing = [0.16, 1, 0.3, 1] as const;

function AnimatedNavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return <motion.div className="nav-link-shell" whileHover={{ y: -2 }} transition={{ duration: .25, ease: easing }}>
    <Link href={href} onClick={onClick}><span>{label}</span><motion.i initial={false} whileHover={{ scaleX: 1 }} /></Link>
  </motion.div>;
}

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const closeMobile = () => setMobileOpen(false);

  return <header className="nav-wrap" onMouseLeave={() => setServicesOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setServicesOpen(false); }}>
    <nav className="nav" aria-label="Hauptnavigation">
      <motion.div className="header-logo" whileHover={{ scale: 1.025, y: -1 }} transition={{ duration: .35, ease: easing }}>
        <Link href="/" aria-label="Digital Service Gross – Startseite"><Image src="/logo-horizontal-dark.svg" width={720} height={150} priority alt="Digital Service Gross" /></Link>
      </motion.div>

      <div className="desktop-nav">
        <div className="services-trigger-wrap" onMouseEnter={() => setServicesOpen(true)}>
          <motion.button className={`services-trigger ${servicesOpen ? "active" : ""}`} type="button" aria-expanded={servicesOpen} aria-controls="services-mega-menu" onClick={() => setServicesOpen(value => !value)} whileHover={{ y: -2 }} transition={{ duration: .25 }}>
            <span>Leistungen</span><ChevronDown size={15} /><i />
          </motion.button>
        </div>
        {primaryLinks.map(link => <AnimatedNavLink key={link.href} {...link} />)}
      </div>

      <div className="nav-cta-wrap">
        <Link className="nav-cta" href="/#anfrage"><span>Projekt anfragen</span><ArrowUpRight size={17} /></Link>
      </div>

      <button className="menu-button" type="button" onClick={() => setMobileOpen(value => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}><span>{mobileOpen ? "Schließen" : "Menü"}</span>{mobileOpen ? <X /> : <Menu />}</button>
    </nav>

    <AnimatePresence>
      {servicesOpen && <motion.div id="services-mega-menu" className="mega-menu" initial={{ opacity: 0, y: -14, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, y: -8, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .38, ease: easing }} onMouseEnter={() => setServicesOpen(true)}>
        <div className="mega-intro"><span>DSG / LEISTUNGEN</span><h2>Digitale Arbeit,<br />sauber verzahnt.</h2><p>Von der sichtbaren Oberfläche bis zum System dahinter.</p><Link href="/#leistungen" onClick={() => setServicesOpen(false)}>Alle Leistungen im Überblick <ArrowRight size={16} /></Link></div>
        <div className="mega-services">{servicePages.map((service, index) => <motion.div key={service.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .035 * index, duration: .35 }}>
          <Link className={service.slug === "individuelle-software" ? "service-menu-link emphasized" : "service-menu-link"} href={`/${service.slug}`} onClick={() => setServicesOpen(false)}><span className="service-menu-index">{String(index + 1).padStart(2, "0")}</span><span><strong>{service.name}</strong><small>{service.menuText}</small></span><ArrowUpRight size={17} /></Link>
        </motion.div>)}</div>
      </motion.div>}
    </AnimatePresence>

    <AnimatePresence>
      {mobileOpen && <motion.div id="mobile-navigation" className="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .42, ease: easing }}>
        <div className="mobile-menu-marker"><span>DSG / NAVIGATION</span><i /></div>
        <div className="mobile-primary">
          <button type="button" onClick={() => setMobileServicesOpen(value => !value)} aria-expanded={mobileServicesOpen}><span>Leistungen</span><ChevronDown className={mobileServicesOpen ? "rotated" : ""} /></button>
          <AnimatePresence initial={false}>{mobileServicesOpen && <motion.div className="mobile-services" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35, ease: easing }}>{servicePages.map((service, index) => <Link key={service.slug} href={`/${service.slug}`} onClick={closeMobile}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{service.name}</strong><small>{service.menuText}</small></div><ArrowUpRight size={16} /></Link>)}</motion.div>}</AnimatePresence>
          {primaryLinks.map(link => <Link key={link.href} href={link.href} onClick={closeMobile}>{link.label}<ArrowUpRight size={20} /></Link>)}
        </div>
        <Link className="mobile-project-cta" href="/#anfrage" onClick={closeMobile}><span>Projekt anfragen</span><ArrowUpRight /></Link>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
