import type { Metadata } from "next";

const siteUrl = "https://suhagshetty.dev"; // update to your real domain

export const seoMetadata: Metadata = {
  title: "Suhag Shetty — Software Engineer",
  description:
    "Software Engineer with 1+ year of experience building scalable full-stack applications. Currently building Apex, a Cursor competitor. Open to Full-Time, Freelance, or Collabs.",
  keywords: [
    "Suhag Shetty",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Bengaluru",
    "India",
    "Apex Code Editor",
    "Freelance Developer",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Suhag Shetty", url: siteUrl }],
  creator: "Suhag Shetty",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Suhag Shetty — Software Engineer",
    description:
      "Software Engineer building scalable full-stack apps. Currently building Apex, a Cursor competitor.",
    url: siteUrl,
    siteName: "Suhag Shetty",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Suhag Shetty — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhag Shetty — Software Engineer",
    description:
      "Software Engineer building scalable full-stack apps. Currently building Apex, a Cursor competitor.",
    creator: "@suhagshetty07", // update if different
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "", // paste your Google Search Console verification code here
  },
};
