import type { Metadata } from "next";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio Health Engine",
  description:
    "Portfolio Health Engine is being developed to provide a structured view of portfolio health, strength and systemic risk. Coming Soon.",
  path: "/portfolio-health-engine",
});

export default function Page() {
  const product = getProduct("portfolio-health-engine")!;
  return <ProductPage product={product} />;
}
