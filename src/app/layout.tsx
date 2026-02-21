import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "suhagshetty",
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
  ],
  authors: [{ name: "Suhag Shetty" }],
  creator: "Suhag Shetty",
  metadataBase: new URL("https://suhagshetty.dev"),
  icons: {
    icon: "/suhag.png",
    apple: "/suhag.png",
  },
  openGraph: {
    title: "Suhag Shetty — Software Engineer",
    description:
      "Software Engineer building scalable full-stack apps. Currently building Apex, a Cursor competitor.",
    url: "https://suhagshetty.dev",
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
    creator: "@suhagshetty07",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} font-serif antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full px-6 md:px-32 lg:px-48">
            <div className="mx-auto max-w-5xl">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
