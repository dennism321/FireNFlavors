import { useEffect, useState } from "react";
import { BIZ } from "../data";
import { cn } from "../utils/cn";
import { ColombiaFlag, Logo } from "./ui";

const LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#videos", label: "Videos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#colombia", label: "Colombia" },
  { href: "#reviews", label: "Reviews" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-char text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-1.5 text-xs font-medium md:text-sm">
          <ColombiaFlag className="h-3.5 w-5 shadow-none" />
          <span className="truncate">
            ¡Bienvenidos! Open Mon & Wed–Sun · Closed Tuesdays ·{" "}
            <a href={BIZ.phoneHref} className="text-col-yellow underline-offset-2 hover:underline">
              {BIZ.phone}
            </a>
          </span>
          <ColombiaFlag className="hidden h-3.5 w-5 shadow-none sm:block" />
        </div>
        <div className="flag-stripe h-1" />
      </div>

      <nav
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-cream/95 shadow-lg backdrop-blur" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Logo light={!scrolled} />
          <ul className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "text-sm font-semibold tracking-wider uppercase transition hover:text-fire",
                    scrolled ? "text-char" : "text-white"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={BIZ.doordash}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-col-red px-5 py-2.5 text-sm font-bold tracking-wider text-white uppercase shadow-[0_4px_0_#8a0b19] transition hover:-translate-y-0.5 hover:bg-fire sm:inline-block"
            >
              Ordena Acá
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "rounded-lg p-2 lg:hidden",
                scrolled ? "text-char" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-black/10 bg-cream px-4 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-black/5 py-3 text-2xl tracking-wide text-char uppercase"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={BIZ.doordash}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-full bg-col-red py-3 text-center font-bold tracking-wider text-white uppercase"
            >
              Order Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
