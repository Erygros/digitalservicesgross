import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalservicegross.de";
  return { rules: [
    { userAgent: "*", allow: "/", disallow: "/api/" },
    { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"], allow: "/", disallow: "/api/" },
  ], sitemap: `${base}/sitemap.xml`, host: base };
}
