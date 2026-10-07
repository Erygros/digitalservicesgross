"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) { return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .7, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>; }
