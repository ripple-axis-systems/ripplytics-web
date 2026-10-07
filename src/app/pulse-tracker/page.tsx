import type { Metadata } from "next";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pulse Tracker",
  description:
    "Pulse Tracker is being developed to discover and track signals that may warrant deeper investigation. Coming Soon.",
  path: "/pulse-tracker",
});

export default function Page() {
  const product = getProduct("pulse-tracker")!;
  return <ProductPage product={product} />;
}
