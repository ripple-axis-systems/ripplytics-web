export type ProductStatus = "live-beta" | "coming-soon" | "in-development";

export type Product = {
  name: string;
  slug: string;
  category: string;
  /** Customer outcome this product addresses */
  outcome: string;
  /** Customer question the product answers */
  question: string;
  tagline: string;
  description: string;
  /** Plain-language deliverable for Applications / Home — no engine jargon */
  deliverable: string;
  status: ProductStatus;
  available: boolean;
  cta: { label: string; href: string };
  route: string;
  problem?: string;
  philosophy?: string;
};

export const statusLabels: Record<ProductStatus, string> = {
  "live-beta": "Live Beta",
  "coming-soon": "R&D in progress",
  "in-development": "R&D in progress",
};

export const products: Product[] = [
  {
    name: "RipplePoint",
    slug: "ripplepoint",
    category: "Global Risk & Macro Intelligence",
    outcome: "Understand the global risk environment",
    question: "What is the state of global risk — and where might pressure travel next?",
    tagline: "See beyond the first movement.",
    description:
      "A Live Beta application that helps investors and analysts read global conditions, connected signals and transmission pathways — risk in context, not as isolated headlines.",
    deliverable:
      "A credentialed dashboard for system briefing, country and pillar views, transmission pathways, absorption context and operational alerts — diagnostic conditions intelligence, not forecasts or trade advice.",
    status: "live-beta",
    available: true,
    cta: { label: "Explore RipplePoint", href: "/ripplepoint" },
    route: "/ripplepoint",
    problem:
      "The headline is rarely the whole story. A geopolitical event may appear in the news — but what happens after it?",
    philosophy:
      "RipplePoint helps users move from event awareness to connected risk understanding — within the scope of what is live in beta today.",
  },
  {
    name: "Portfolio Health Engine",
    slug: "portfolio-health-engine",
    category: "Portfolio Risk Intelligence",
    outcome: "Portfolio health & market conditions",
    question: "How healthy is this portfolio under connected market pressure?",
    tagline: "A portfolio is more than a collection of positions.",
    description:
      "Intended to give a structured view of portfolio health, strength and systemic risk when market conditions shift together.",
    deliverable: "R&D in progress — portfolio-level health and resilience views toward launch.",
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
    outcome: "Portfolio health & market conditions",
    question: "What is changing in market structure before the broader picture is obvious?",
    tagline: "Markets leave traces before conditions become obvious.",
    description:
      "Intended to identify and interpret changes in market structure, momentum, pressure and participation.",
    deliverable: "R&D in progress — market-structure and participation intelligence toward launch.",
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
    outcome: "Business vulnerabilities",
    question: "Where is this business exposed when external pressure arrives?",
    tagline: "The visible numbers are only part of a business.",
    description:
      "Intended to examine structural, operational and strategic dimensions of business risk beneath surface performance.",
    deliverable: "R&D in progress — business vulnerability and exposure views toward launch.",
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
    outcome: "Discover / follow emerging signals",
    question: "Which emerging signals deserve attention before they become obvious?",
    tagline: "There are more signals than anyone can watch manually.",
    description:
      "Intended to discover and track signals that may warrant deeper investigation.",
    deliverable: "R&D in progress — signal discovery and tracking toward launch.",
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
    outcome: "Discover / follow emerging signals",
    question: "How do signals become decisions, actions and outcomes?",
    tagline: "Between a signal and an outcome lies a chain of decisions.",
    description:
      "An evolving concept for understanding how signals translate into decisions, actions and market outcomes.",
    deliverable: "R&D in progress — direction for signal-to-outcome intelligence.",
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

/** Homepage / Applications groups — insights for decisions; equal family framing. */
export const outcomeGroups = [
  {
    id: "global-risk",
    number: "01",
    title: "Understand the global risk environment",
    availability: "Live Beta" as const,
    products: ["ripplepoint"],
    prominent: true,
  },
  {
    id: "portfolio-market",
    number: "02",
    title: "Portfolio health & market conditions",
    availability: "R&D in progress" as const,
    products: ["portfolio-health-engine", "echopulse"],
    prominent: false,
  },
  {
    id: "business",
    number: "03",
    title: "Business vulnerabilities",
    availability: "R&D in progress" as const,
    products: ["rippleaudit"],
    prominent: false,
  },
  {
    id: "signals",
    number: "04",
    title: "Discover / follow emerging signals",
    availability: "R&D in progress" as const,
    products: ["pulse-tracker", "rippletrace"],
    prominent: false,
  },
] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
