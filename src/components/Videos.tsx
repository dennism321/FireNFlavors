import { useState } from "react";
import { VIDEOS } from "../data";
import { cn } from "../utils/cn";
import { LazyVideo, SectionTitle } from "./ui";

type V = { title: string; sub: string; src: string; poster: string };

function VideoCard({ v, className, onOpen }: { v: V; className?: string; onOpen: (v: V) => void }) {
  return (
    <button
      onClick={() => onOpen(v)}
      className={cn(
        "reveal group relative overflow-hidden rounded-3xl bg-char text-left shadow-xl ring-4 ring-white",
        className
      )}
    >
      <LazyVideo src={v.src} poster={v.poster} className="transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-char/10 to-transparent" />
      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-col-red px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
        <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> Live Flavor
      </div>
      <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-col-yellow text-char opacity-0 transition group-hover:opacity-100">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm14 0h2v6h-6v-2h4v-4z" /></svg>
      </div>
      <div className="absolute bottom-5 left-5">
        <div className="font-display text-3xl text-white uppercase md:text-4xl">{v.title}</div>
        <div className="font-script text-lg text-col-yellow">{v.sub}</div>
      </div>
    </button>
  );
}

export default function Videos() {
  const [active, setActive] = useState<V | null>(null);
  const f = VIDEOS.food;
  const p = VIDEOS.people;

  return (
    <section id="videos" className="relative overflow-hidden bg-fiesta py-24">
      <div className="texture-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle
          light
          kicker="Mira cómo se cocina el sabor"
          title={<>Food in <span className="text-col-yellow">Motion</span></>}
          sub="From the fire of our grill to the smiles around the table. This is what Fire & Flavors feels like."
        />

        {/* Food videos */}
        <div className="grid auto-rows-[240px] gap-5 md:grid-cols-4 md:auto-rows-[260px]">
          <VideoCard v={f[0]} onOpen={setActive} className="md:col-span-2 md:row-span-2" />
          <VideoCard v={f[1]} onOpen={setActive} className="md:col-span-2" />
          <VideoCard v={f[2]} onOpen={setActive} />
          <VideoCard v={f[3]} onOpen={setActive} />
        </div>

        <div className="reveal my-16 text-center">
          <div className="font-display text-5xl text-white uppercase md:text-7xl">
            La comida sabe mejor <span className="text-col-yellow">en familia</span>
          </div>
          <p className="mt-3 text-lg text-white/80">Food tastes better together. Bring the whole crew!</p>
        </div>

        {/* People eating videos */}
        <div className="grid auto-rows-[240px] gap-5 md:grid-cols-6 md:auto-rows-[280px]">
          <VideoCard v={p[0]} onOpen={setActive} className="md:col-span-3" />
          <VideoCard v={p[1]} onOpen={setActive} className="md:col-span-3" />
          <VideoCard v={p[2]} onOpen={setActive} className="md:col-span-2" />
          <VideoCard v={p[3]} onOpen={setActive} className="md:col-span-2" />
          <VideoCard v={p[4]} onOpen={setActive} className="md:col-span-2" />
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-4xl text-white hover:text-col-yellow"
              aria-label="Close"
            >
              ×
            </button>
            <video src={active.src} poster={active.poster} controls autoPlay muted loop playsInline className="w-full rounded-2xl" />
            <div className="mt-3 text-center">
              <span className="font-display text-3xl text-white uppercase">{active.title}</span>
              <span className="font-script ml-3 text-xl text-col-yellow">{active.sub}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
