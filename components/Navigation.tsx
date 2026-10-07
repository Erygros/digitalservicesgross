"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
const links = [["Leistungen", "#leistungen"], ["Prozess", "#prozess"], ["Pakete", "#pakete"], ["FAQ", "#faq"]];
export function Navigation() { const [open, setOpen] = useState(false); return <header className="nav-wrap"><nav className="nav" aria-label="Hauptnavigation"><a className="nav-brand" href="#top" aria-label="Digital Service Gross – Startseite"><Logo light /></a><div className={`nav-links ${open ? "open" : ""}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#anfrage" onClick={() => setOpen(false)}>Projekt anfragen <ArrowUpRight size={17} /></a></div><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Menü schließen" : "Menü öffnen"}>{open ? <X /> : <Menu />}</button></nav></header>; }
