export const rippleSequence = [
  {
    id: "origin",
    label: "Origin",
    question: "Where did the pressure begin?",
    body: "Every ripple has a starting point — a policy decision, geopolitical development, market event, behavioural change or structural shift.",
  },
  {
    id: "signal",
    label: "Signal",
    question: "What tells us that something is changing?",
    body: "Not every event becomes a meaningful risk. Signals provide the first layer of evidence that a change is becoming significant.",
  },
  {
    id: "connection",
    label: "Connection",
    question: "What else is related to it?",
    body: "An event exists within a network of relationships. We seek the relevant connections rather than treating the event as isolated.",
  },
  {
    id: "transmission",
    label: "Transmission",
    question: "How can the pressure travel?",
    body: "A connection alone is not enough. Transmission pathways show how influence may move through the system.",
  },
  {
    id: "exposure",
    label: "Exposure",
    question: "Where can it matter?",
    body: "The same risk can have very different consequences for different entities. Exposure gives the analysis context.",
  },
  {
    id: "absorption",
    label: "Absorption",
    question: "What can absorb it — and what may not?",
    body: "A system may resist, adapt, amplify or deteriorate. Absorption changes the outcome.",
  },
  {
    id: "impact",
    label: "Impact",
    question: "What could the resulting consequences look like?",
    body: "Only after considering these layers can we begin to understand potential consequence.",
  },
  {
    id: "decision",
    label: "Decision",
    question: "What deserves attention?",
    body: "Intelligence ultimately has to become useful — helping a human decision-maker see the situation more clearly.",
  },
] as const;

export const sixDimensions = [
  {
    id: "influence",
    label: "Systemic Influence",
    body: "Not every factor has the same ability to affect the wider system. We consider importance and potential reach rather than treating every signal equally.",
  },
  {
    id: "transmission",
    label: "Transmission",
    body: "Risk needs a pathway. We examine the relationships through which pressure may move between markets, economies, sectors, entities and systems.",
  },
  {
    id: "exposure",
    label: "Exposure",
    body: "A risk matters differently depending on who or what is exposed to it. Understanding exposure translates a broad event into relevant consequence.",
  },
  {
    id: "absorption",
    label: "Absorption",
    body: "A shock does not automatically become a crisis. The ability of a system to absorb, adapt to or amplify pressure can fundamentally change the outcome.",
  },
  {
    id: "regime",
    label: "Regime",
    body: "Context changes meaning. The same event can produce very different consequences depending on the state of the surrounding environment.",
  },
  {
    id: "confidence",
    label: "Confidence",
    body: "Intelligence should recognise uncertainty. Not every signal is equally reliable, and not every interpretation deserves the same degree of confidence.",
  },
] as const;

export const architectureLayers = [
  { id: "observation", label: "Observation", body: "Data, events, signals and indicators — the raw material from which intelligence begins." },
  { id: "detection", label: "Detection", body: "Distinguish potentially meaningful changes from background movement." },
  { id: "classification", label: "Classification", body: "Understand the nature, character and potential significance of the risk." },
  { id: "connection", label: "Connection", body: "Entities, domains, dependencies and relationships become part of the analysis." },
  { id: "transmission", label: "Transmission", body: "How pressure can move from one part of the system to another." },
  { id: "exposure", label: "Exposure", body: "Where potential consequence becomes relevant and material." },
  { id: "absorption", label: "Absorption", body: "Resilience, adaptive capacity and system response under pressure." },
  { id: "regime", label: "Regime", body: "The broader state of the environment — stable, stressed, fragile or transitioning." },
  { id: "decision", label: "Decision Intelligence", body: "Present complex relationships in a form that supports human judgement." },
] as const;

/** Names aligned to live RipplePoint engines — educational Technology page, not a full product catalog. */
export const models = [
  {
    acronym: "GCPI",
    name: "Global Conditions Pressure Index",
    purpose: "Macro conditions / pressure scoring used in RipplePoint Live Beta (RASS-03).",
  },
  {
    acronym: "GFSI",
    name: "Global Fragility & Shock Index",
    purpose: "Fragility and shock field within a connected risk framework (Live Beta).",
  },
  {
    acronym: "GRCI",
    name: "Global Recovery Confirmation Index",
    purpose: "Recovery-conditions interpretation alongside regime context (Live Beta).",
  },
  {
    acronym: "SSI",
    name: "Systemic Stability Intelligence",
    purpose: "Reasoning layer across pillars — feeds operational alert policy (Live Beta).",
  },
  {
    acronym: "TRI",
    name: "Transmission & Ripple Intelligence",
    purpose: "Transmission pathways and residual ripple — including Ripple Field (Live Beta).",
  },
  {
    acronym: "EII",
    name: "Evidence Integrity Intelligence",
    purpose: "Assurance / evidence-integrity layer for platform and country views (Live Beta).",
  },
  {
    acronym: "MASI",
    name: "Market Absorptive Strength Intelligence",
    purpose: "Absorption strength and horizons — methodology views, not predicted loss (Live Beta).",
  },
  {
    acronym: "ACI",
    name: "Adaptive Capacity Intelligence",
    purpose: "Structural / adaptive capacity (Domain III; quarterly SCP) in Live Beta.",
  },
] as const;

export const observatoryCategories = [
  { id: "ripple-briefs", label: "Ripple Briefs", description: "Short observations designed to surface important developments quickly." },
  { id: "deep-dives", label: "Deep Dives", description: "Long-form analysis of important themes and structural shifts." },
  { id: "risk-maps", label: "Risk Maps", description: "Visual exploration of relationships, exposure and transmission." },
  { id: "regime-watch", label: "Regime Watch", description: "Observations on changing global and market conditions." },
  { id: "intelligence-notes", label: "Intelligence Notes", description: "Research into the models, frameworks and ideas behind Ripplytics." },
] as const;

export const contactInterests = [
  "RipplePoint",
  "Portfolio Intelligence",
  "Market Intelligence",
  "Business Risk",
  "Research",
  "Partnership",
  "Other",
] as const;

/** Well-known public episodes for illustrative education only — not live RipplePoint output. */
export const ILLUSTRATIVE_DISCLAIMER =
  "Illustrative — for education; not a live RipplePoint output; Ripplytics does not claim to have predicted these events.";

export const realWorldEpisodes = [
  {
    id: "covid-supply-inflation",
    period: "2020–22",
    title: "COVID-era supply chains and inflation transmission",
    teaser:
      "A health shock became a logistics shock, then a price shock — pressure moved far from where it began.",
    happened:
      "Pandemic lockdowns and sudden demand shifts disrupted production and shipping worldwide. What began as a public-health emergency showed up months later as shortages, freight stress and broader inflation pressure.",
    began:
      "Originated in public-health measures and abrupt changes in mobility, labour and demand — not in a single market price.",
    traveled:
      "Factories and ports → shipping and inventories → commodity and goods prices → corporate costs and household inflation → policy and rate expectations.",
    needed:
      "Decision-makers needed to see the chain from origin through logistics and prices — not only the initial case counts or a single CPI print.",
  },
  {
    id: "energy-shock-2022",
    period: "2022",
    title: "Energy shock after the Russia–Ukraine war onset",
    teaser:
      "A geopolitical rupture transmitted through energy markets into industry, inflation and policy across regions.",
    happened:
      "The war’s onset and subsequent energy-market stress raised concerns about gas and oil availability, especially in Europe. Price and security of supply became a system-wide pressure, not a local commodity story.",
    began:
      "Originated in geopolitical conflict and energy-trade disruption — a fracture that markets and governments had to interpret in real time.",
    traveled:
      "Energy supply and contracts → wholesale power and fuel costs → industrial margins and household bills → inflation and fiscal responses → wider risk appetite.",
    needed:
      "Leaders needed visibility into transmission from geopolitics into energy, industry and inflation — beyond the headline of the conflict alone.",
  },
  {
    id: "svb-banking-2023",
    period: "2023",
    title: "US regional banking stress and SVB",
    teaser:
      "Confidence and liquidity moved faster than balance-sheet headlines — stress transmitted through funding and trust.",
    happened:
      "Silicon Valley Bank’s failure and related regional-bank stress showed how quickly deposit flight and funding pressure can spread. The episode was as much about confidence and liquidity as about any single asset mark.",
    began:
      "Originated in interest-rate and portfolio mismatches at specific institutions, then in a sudden loss of depositor and market confidence.",
    traveled:
      "Bank portfolios and duration risk → deposit outflows and liquidity → funding markets and peer institutions → credit conditions and risk sentiment more broadly.",
    needed:
      "Decision-makers needed to see confidence and liquidity pathways — not only the first institution’s reported losses.",
  },
] as const;
