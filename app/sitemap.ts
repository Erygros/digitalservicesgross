import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { servicePages } from "@/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalservicegross.de";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...locations.map(location => ({ url: `${base}/${location.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: location.slug === "nrw" ? .9 : .8 })),
    ...servicePages.map(service => ({ url: `${base}/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .85 })),
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: .2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: .2 },
  ];
}
