import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://digitalservicegross.de"),
  title: { default: "Digital Service Gross", template: "%s | Digital Service Gross" },
  description: "Websites, digitale Systeme und individuelle Software, die sichtbar machen, Prozesse verbessern und neue Kunden gewinnen.",
  applicationName: "Digital Service Gross",
  authors: [{ name: "Digital Service Gross" }],
  creator: "Digital Service Gross",
  publisher: "Digital Service Gross",
  alternates: { canonical: "/" },
  openGraph: { title: "Websites, die mehr können als gut aussehen.", description: "Websites, digitale Systeme und individuelle Software für Sichtbarkeit, bessere Prozesse und neue Kunden.", url: "/", siteName: "Digital Service Gross", locale: "de_DE", type: "website" },
  twitter: { card: "summary_large_image", title: "Digital Service Gross", description: "Websites, digitale Systeme und individuelle Software mit Substanz." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0B2E22" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><div className="site-shell">{children}</div><div className="noise" aria-hidden="true" /></body></html>;
}
