import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

/* ── Fonts ── */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ── Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Race 3 Plus | Premium Engine Coolant & Automotive Protection`,
    template: `%s | Race 3 Plus`,
  },
  description:
    "Race 3 Plus offers premium engine coolant and automotive protection products — including high-performance coolant concentrates, additives, and anti-corrosion solutions engineered for cars, bikes, SUVs, and commercial vehicles across India.",
  keywords: [
    "Race 3 Plus",
    "Race3+",
    "engine coolant India",
    "engine protection India",
    "performance coolant concentrate",
    "engine coolant concentrate",
    "automotive engine protection",
    "car coolant India",
    "bike coolant",
    "SUV engine coolant",
    "keep performance alive",
    "anti-corrosion coolant",
    "Race 3 Plus coolant",
  ],
  authors: [{ name: "Race 3 Plus", url: siteConfig.url }],
  creator: "Race 3 Plus",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `Race 3 Plus — Keep Performance Alive`,
    description: siteConfig.description,
    siteName: "Race 3 Plus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Race 3 Plus — Keep Performance Alive`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Race 3 Plus — Keep Performance Alive`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen" style={{ background: "var(--color-brand-bg)" }}>
        <Navbar />
        {/* Main content — offset by navbar height */}
        <main className="flex-1 pt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
