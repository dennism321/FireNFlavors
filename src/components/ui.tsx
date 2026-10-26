import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

/** Plays video only when in viewport to save bandwidth. */
export function LazyVideo({
  src,
  poster,
  className,
  eager = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15, rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (load) ref.current?.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      className={cn("h-full w-full object-cover", className)}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={eager}
      preload={eager ? "auto" : "none"}
      src={load ? src : undefined}
    />
  );
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function ColombiaFlag({ className, wave = false }: { className?: string; wave?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 60"
      className={cn("rounded-sm shadow-lg", wave && "animate-wave", className)}
      aria-label="Bandera de Colombia"
      role="img"
    >
      <rect width="90" height="30" fill="#FCD116" />
      <rect y="30" width="90" height="15" fill="#003893" />
      <rect y="45" width="90" height="15" fill="#CE1126" />
      <defs>
        <linearGradient id="shine" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#000" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="90" height="60" fill="url(#shine)" />
    </svg>
  );
}

export function Flame({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="fl" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#CE1126" />
          <stop offset="0.5" stopColor="#FF8A00" />
          <stop offset="1" stopColor="#FCD116" />
        </linearGradient>
      </defs>
      <path
        fill="url(#fl)"
        d="M12 0c1 5 6 8 6 15a6 6 0 0 1-2 4.5c.4-2.6-.8-4.8-2.6-6.2.3 2.6-.9 4.3-2.4 5-1-1.6-.6-3.4-.4-4.6C7.5 15.3 6 17.6 6 20.3c0 1.7.6 3.2 1.6 4.3A9 9 0 0 1 3 17C3 8.5 11 6 12 0Z"
      />
      <path
        fill="#FCD116"
        d="M12 32c-4.4 0-8-3-8-7.3 0-3.4 2.3-5.6 4-7 0 2 1 3.4 2.4 4 .4-2.8 2-5 4.3-6.2-.6 2.4.4 4 1.6 5.2.6-.8 1-1.8 1.1-2.9 1.6 1.6 2.6 3.5 2.6 6.4 0 4.6-3.6 7.8-8 7.8Z"
        opacity=".9"
      />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2", className)}>
      <Flame className="h-10 w-8 animate-flicker" />
      <div className="leading-none">
        <div
          className={cn(
            "font-display text-2xl tracking-wide uppercase",
            light ? "text-white" : "text-char"
          )}
        >
          Fire <span className="text-fire">&</span> Flavors
        </div>
        <div
          className={cn(
            "mt-0.5 text-[10px] font-semibold tracking-[0.35em] uppercase",
            light ? "text-col-yellow" : "text-col-blue"
          )}
        >
          Colombian Fast Food
        </div>
      </div>
    </a>
  );
}

export function SectionTitle({
  kicker,
  title,
  sub,
  light = false,
  center = true,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("reveal mb-12", center && "mx-auto max-w-3xl text-center")}>
      <div className={cn("font-script text-2xl md:text-3xl", light ? "text-col-yellow" : "text-fire")}>
        {kicker}
      </div>
      <h2
        className={cn(
          "font-display mt-1 text-5xl leading-[0.95] uppercase md:text-7xl",
          light ? "text-white" : "text-char"
        )}
      >
        {title}
      </h2>
      <div className={cn("flag-stripe mt-5 h-1.5 w-28 rounded-full", center && "mx-auto")} />
      {sub && (
        <p className={cn("mt-5 text-lg", light ? "text-white/80" : "text-char/70")}>{sub}</p>
      )}
    </div>
  );
}

export function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <span className={cn("text-col-yellow", className)} aria-label={`${n} stars`}>
      {"★".repeat(n)}
    </span>
  );
}
