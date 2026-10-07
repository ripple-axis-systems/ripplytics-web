import type { ProductStatus } from "@/lib/products";
import { statusLabels } from "@/lib/products";

const tone: Record<ProductStatus, string> = {
  "live-beta": "border-teal/50 text-teal bg-teal/10",
  "coming-soon": "border-[rgba(232,236,244,0.22)] text-muted bg-white/[0.03]",
  "in-development": "border-[rgba(232,236,244,0.16)] text-muted/90 bg-white/[0.02]",
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${tone[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
