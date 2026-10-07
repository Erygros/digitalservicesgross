import Image from "next/image";
export function Logo({ light = false }: { light?: boolean }) { return <span className={`brand ${light ? "brand-light" : ""}`}><Image src="/logo-mark.svg" width={48} height={48} alt="" priority /><span><b>Digital Service</b><strong>Gross</strong></span></span>; }
