import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-navy text-mist">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
