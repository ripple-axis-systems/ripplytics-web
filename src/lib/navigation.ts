export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How We Think", href: "/how-we-think" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/observatory" },
  { label: "Technology", href: "/technology" },
];

export const secondaryNav: NavItem[] = [
  { label: "Contact", href: "/contact" },
];

export const footerExplore: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How We Think", href: "/how-we-think" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/observatory" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

export const footerProducts: NavItem[] = [
  { label: "RipplePoint", href: "/ripplepoint" },
  { label: "Portfolio Health Engine", href: "/portfolio-health-engine" },
  { label: "EchoPulse", href: "/echopulse" },
  { label: "RippleAudit", href: "/rippleaudit" },
  { label: "Pulse Tracker", href: "/pulse-tracker" },
  { label: "RippleTrace", href: "/rippletrace" },
];
