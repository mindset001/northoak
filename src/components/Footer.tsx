import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logomark from "./Logomark";
import { company } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Logomark />
              <span className="font-serif-display text-lg font-semibold text-ink-50">
                Northoak Global Investment Limited
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-200">
              Engineering, construction, transportation, procurement and agricultural
              solutions delivered with integrity since 2007.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-ink-200/60">
              {company.rcNumber} &middot; Incorporated {company.incorporated}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-200">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-azure-400" />
                <span>{company.address}</span>
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex items-center gap-2">
                  <Mail size={16} className="shrink-0 text-azure-400" />
                  <a href={`mailto:${email}`} className="transition-colors hover:text-white">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-ink-200/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Northoak Global Investment Limited. All rights reserved.</p>
          <p>{company.rcNumber}</p>
        </div>
      </div>
    </footer>
  );
}
