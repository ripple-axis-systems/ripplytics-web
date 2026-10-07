import type { Metadata } from "next";
import { brand } from "./theme";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || brand.siteUrl;

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path === "/" ? "" : path}`;
  const fullTitle =
    title === brand.name
      ? `${brand.name} | Risk Intelligence for an Interconnected World`
      : `${title} | ${brand.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
