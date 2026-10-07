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

export const models = [
  { acronym: "GCPI", name: "Global Crash Probability Index", purpose: "A component within the broader architecture for assessing systemic crash risk conditions." },
  { acronym: "GFSI", name: "Geopolitical Fracture Stress Index", purpose: "Interprets geopolitical fracture and stress within a connected risk framework." },
  { acronym: "SSI", name: "Stress Sync Index", purpose: "Examines synchronisation of stress across related systems." },
  { acronym: "GRCI", name: "Global Regime Confidence Index", purpose: "Supports interpretation of broader regime conditions and confidence around them." },
  { acronym: "TRM", name: "Trigger Ripple Model", purpose: "Explores how triggers may propagate through connected pathways." },
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
