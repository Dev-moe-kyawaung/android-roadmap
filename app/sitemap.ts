import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    { url: `\${site}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `\${site}/checklist`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
