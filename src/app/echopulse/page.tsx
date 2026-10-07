import type { Metadata } from "next";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "EchoPulse",
  description:
    "EchoPulse is being developed to identify and interpret changes in market structure, momentum, pressure and participation. Coming Soon.",
  path: "/echopulse",
});

export default function Page() {
  const product = getProduct("echopulse")!;
  return <ProductPage product={product} />;
}
