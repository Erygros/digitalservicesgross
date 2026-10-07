"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return <section className="hero" id="top">
    <video className="hero-video" autoPlay={!reduceMotion} muted loop playsInline preload="metadata" poster="/hero-poster.jpg" aria-hidden="true">
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
    <div className="hero-video-overlay" aria-hidden="true" />

    <motion.div className="hero-editorial" initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .1, delayChildren: .22 } } }}>
      <div className="hero-editorial-copy">
        <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .75, ease: easing } } }}>Websites, Webentwicklung und digitale Systeme für Unternehmen.</motion.h1>
        <motion.p className="hero-editorial-subline" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: easing } } }}>Individuell entwickelt. Technisch sauber. Auf Sichtbarkeit, Conversion und Wachstum optimiert.</motion.p>
        <motion.p className="hero-disciplines" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: .7 } } }}>Webdesign · Entwicklung · SEO · GEO · AEO · CRO · Ads · Software</motion.p>
      </div>

      <motion.div className="hero-text-links" variants={{ hidden: { opacity: 0, x: 18 }, visible: { opacity: 1, x: 0, transition: { duration: .7, ease: easing } } }}>
        <motion.a className="hero-primary-link" href="#anfrage" whileHover={{ x: 4 }} transition={{ duration: .25 }}><span>Projekt anfragen</span><ArrowUpRight size={20} /></motion.a>
        <motion.a className="hero-secondary-link" href="#leistungen" whileHover={{ x: 4 }} transition={{ duration: .25 }}><span>Leistungen ansehen</span><ArrowRight size={17} /></motion.a>
      </motion.div>
    </motion.div>
  </section>;
}
