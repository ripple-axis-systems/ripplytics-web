import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/lib/seo";
import { brand } from "@/lib/theme";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: brand.name,
    description:
      "Risk insight that informs the decision. Ripplytics develops intelligence tools for investors, analysts and businesses — with RipplePoint available as Live Beta.",
    path: "/",
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || brand.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
