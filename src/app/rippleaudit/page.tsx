import type { Metadata } from "next";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "RippleAudit",
  description:
    "RippleAudit is being developed to examine structural, operational and strategic dimensions of business risk. Coming Soon.",
  path: "/rippleaudit",
});

export default function Page() {
  const product = getProduct("rippleaudit")!;
  return <ProductPage product={product} />;
}
