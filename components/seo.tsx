import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Android Engineering Career Roadmap",
  description: "Interactive Android career roadmap from Junior to Senior with progress tracking and printable self-assessment.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: {
    title: "Android Engineering Career Roadmap",
    description: "Interactive Android career roadmap from Junior to Senior.",
    url: "/",
    siteName: "Android Engineering Career Roadmap",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Engineering Career Roadmap",
    description: "Interactive Android career roadmap from Junior to Senior."
  }
};
