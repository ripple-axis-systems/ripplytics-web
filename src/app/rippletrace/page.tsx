import type { Metadata } from "next";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "RippleTrace",
  description:
    "RippleTrace is an evolving concept for understanding how signals translate into decisions, actions and market outcomes. In Development.",
  path: "/rippletrace",
});

export default function Page() {
  const product = getProduct("rippletrace")!;
  return <ProductPage product={product} />;
}
