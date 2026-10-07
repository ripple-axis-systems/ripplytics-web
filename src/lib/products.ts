export type ProductStatus = "live-beta" | "coming-soon" | "in-development";

export type Product = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  available: boolean;
  cta: { label: string; href: string };
  route: string;
  problem?: string;
  philosophy?: string;
};

export const statusLabels: Record<ProductStatus, string> = {
  "live-beta": "Live Beta",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

export const products: Product[] = [
  {
    name: "RipplePoint",
    slug: "ripplepoint",
    category: "Global Risk & Macro Intelligence",
    tagline: "See beyond the first movement.",
    description:
      "Understand emerging global risks, their origins, their potential connections and their significance within the wider macro environment.",
    status: "live-beta",
    available: true,
    cta: { label: "Explore RipplePoint", href: "/ripplepoint" },
    route: "/ripplepoint",
    problem:
      "The headline is rarely the whole story. A geopolitical event may appear in the news — but what happens after it?",
    philosophy:
      "RipplePoint is designed to help users move from event awareness to connected risk understanding.",
  },
  {
    name: "Portfolio Health Engine",
    slug: "portfolio-health-engine",
    category: "Portfolio Risk Intelligence",
    tagline: "A portfolio is more than a collection of positions.",
    description:
      "Portfolio Health Engine is being developed to provide a structured view of portfolio health, strength and systemic risk.",
    status: "coming-soon",
    available: false,
    cta: { label: "Register Interest", href: "/contact?interest=Portfolio+Intelligence" },
    route: "/portfolio-health-engine",
    problem:
      "A portfolio's condition cannot always be understood by looking at individual securities independently.",
    philosophy:
      "Move beyond individual security analysis toward understanding the health, resilience and systemic condition of a portfolio.",
  },
  {
    name: "EchoPulse",
    slug: "echopulse",
    category: "Market Structure Intelligence",
    tagline: "Markets leave traces before conditions become obvious.",
    description:
      "EchoPulse is being developed to identify and interpret changes in market structure, momentum, pressure and participation.",
    status: "coming-soon",
    available: false,
    cta: { label: "Register Interest", href: "/contact?interest=Market+Intelligence" },
    route: "/echopulse",
    problem:
      "Changes in momentum, structure, participation and pressure can reveal that market conditions are changing before the broader picture becomes obvious.",
    philosophy:
      "Identify changes in market structure, momentum, pressure and emerging technical conditions.",
  },
  {
    name: "RippleAudit",
    slug: "rippleaudit",
    category: "Business Risk Intelligence",
    tagline: "The visible numbers are only part of a business.",
    description:
      "RippleAudit is being developed to examine structural, operational and strategic dimensions of business risk.",
    status: "coming-soon",
    available: false,
    cta: { label: "Register Interest", href: "/contact?interest=Business+Risk" },
    route: "/rippleaudit",
    problem:
      "A business can appear financially healthy while carrying risks beneath the surface.",
    philosophy:
      "Look beyond financial performance to identify structural, operational and strategic vulnerabilities within a business.",
  },
  {
    name: "Pulse Tracker",
    slug: "pulse-tracker",
    category: "Signal Discovery & Surveillance",
    tagline: "There are more signals than anyone can watch manually.",
    description:
      "Pulse Tracker is being developed to discover and track signals that may warrant deeper investigation.",
    status: "coming-soon",
    available: false,
    cta: { label: "Register Interest", href: "/contact?interest=Other" },
    route: "/pulse-tracker",
    problem:
      "The objective is not to watch everything. It is to identify what deserves attention.",
    philosophy:
      "Track emerging signals and identify developments that may deserve attention before they become obvious.",
  },
  {
    name: "RippleTrace",
    slug: "rippletrace",
    category: "Execution Intelligence",
    tagline: "Between a signal and an outcome lies a chain of decisions.",
    description:
      "RippleTrace is an evolving concept for understanding how signals translate into decisions, actions and market outcomes.",
    status: "in-development",
    available: false,
    cta: { label: "Discuss the Concept", href: "/contact?interest=Other" },
    route: "/rippletrace",
    problem:
      "Between intelligence and outcome lies execution — a chain of decisions and actions that is often poorly observed.",
    philosophy:
      "Follow the path from signal to action and understand how decisions, transactions and market movements connect.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
