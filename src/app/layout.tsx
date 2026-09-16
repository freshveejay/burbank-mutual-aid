import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://burbankmutualaid.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Burbank Mutual Aid — Solidarity, Not Charity",
    template: "%s · Burbank Mutual Aid",
  },
  description:
    "Neighbors taking care of neighbors. Burbank Mutual Aid shows up every Sunday evening in downtown Burbank with food, clothing, and hygiene supplies for our unhoused neighbors.",
  openGraph: {
    title: "Burbank Mutual Aid",
    description:
      "Neighbors taking care of neighbors. Every Sunday evening in downtown Burbank.",
    url: SITE_URL,
    siteName: "Burbank Mutual Aid",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
