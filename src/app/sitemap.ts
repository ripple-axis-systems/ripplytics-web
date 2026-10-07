import type { MetadataRoute } from "next";
import { brand } from "@/lib/theme";
import { products } from "@/lib/products";

const staticPaths = [
  "/",
  "/about",
  "/how-we-think",
  "/intelligence",
  "/applications",
  "/observatory",
  "/technology",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || brand.siteUrl;
  const now = new Date();
  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: now,
    })),
    ...products.map((product) => ({
      url: `${base}${product.route}`,
      lastModified: now,
    })),
  ];
}
