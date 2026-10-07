import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://digitalservicegross.de"),
  title: { default: "Digital Service Gross", template: "%s | Digital Service Gross" },
  description: "Websites, digitale Systeme und individuelle Software, die sichtbar machen, Prozesse verbessern und neue Kunden gewinnen.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0B2E22" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><div className="site-shell">{children}</div><div className="noise" aria-hidden="true" /></body></html>;
}
