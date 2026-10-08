"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, secondaryNav } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(232,236,244,0.08)] bg-[rgba(11,15,31,0.9)] backdrop-blur-md py-3.5"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:gap-10 md:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-7 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {primaryNav
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium tracking-[0.015em] transition-colors ${
                    active ? "text-teal" : "text-mist/80 hover:text-mist"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium tracking-[0.015em] text-mist/70 transition-colors hover:text-mist"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/ripplepoint"
            className="rounded-sm border border-teal/45 bg-teal/10 px-4 py-2.5 text-[14.5px] font-medium tracking-[0.01em] text-teal transition-colors hover:bg-teal/20"
          >
            Explore RipplePoint
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[rgba(232,236,244,0.16)] text-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[rgba(232,236,244,0.08)] bg-[rgba(11,15,31,0.97)] px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg ${pathname === item.href ? "text-teal" : "text-mist"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/ripplepoint" className="mt-2 text-lg text-teal">
              Explore RipplePoint
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
