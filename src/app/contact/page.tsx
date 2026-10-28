import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/theme";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start with the problem. Tell Ripplytics what you are trying to understand, what decision you are trying to improve, and where the uncertainty lies.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
        <Reveal>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Start with the problem.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Tell us what you are trying to understand. Tell us what decision you are trying to
            improve. Tell us where the uncertainty lies. We will explore whether Ripplytics can help.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <Reveal>
          <Suspense fallback={<div className="text-muted">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-8 rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] p-6 md:p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
                For investment professionals
              </p>
              <p className="mt-3 text-sm text-muted">
                Interested in global risk, macro intelligence or portfolio intelligence?
              </p>
              <Link href="/ripplepoint" className="mt-3 inline-flex text-sm text-teal">
                Explore RipplePoint →
              </Link>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">For businesses</p>
              <p className="mt-3 text-sm text-muted">
                Trying to understand risks beyond the financial statements?
              </p>
              <Link href="/rippleaudit" className="mt-3 inline-flex text-sm text-teal">
                Explore RippleAudit →
              </Link>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
                For analysts & researchers
              </p>
              <Link href="/observatory" className="mt-3 inline-flex text-sm text-teal">
                Explore the Observatory →
              </Link>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Company</p>
              <p className="mt-3 text-sm text-mist/90">{brand.legalName}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Management</p>
              <p className="mt-3 text-sm text-muted">
                Leadership profiles are being prepared.
              </p>
              <Link href="/about#team" className="mt-3 inline-flex text-sm text-teal">
                About · Team →
              </Link>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Digital</p>
              <p className="mt-3 text-sm text-muted">
                LinkedIn, X and other handles — coming soon.
              </p>
              <Link href="/about#connect" className="mt-3 inline-flex text-sm text-teal">
                About · Connect →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
