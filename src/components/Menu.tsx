import { useState } from "react";
import { BIZ, MENU } from "../data";
import { cn } from "../utils/cn";
import { SectionTitle } from "./ui";

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;

  return (
    <section id="menu" className="texture-dots relative bg-cream py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          kicker="Nuestro Menú"
          title={<>Fuego & <span className="text-col-red">Sabor</span></>}
          sub="From traditional plates to explosive Colombian fast food. Bilingual menu, big portions."
        />

        {/* Tabs */}
        <div className="no-scrollbar -mx-4 mb-10 flex gap-3 overflow-x-auto px-4 pb-2 md:flex-wrap md:justify-center">
          {MENU.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "shrink-0 rounded-full border-2 border-char px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition",
                active === c.id
                  ? "bg-char text-col-yellow shadow-[4px_4px_0_#ce1126]"
                  : "bg-white text-char hover:bg-col-yellow"
              )}
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.title}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2rem] border-4 border-char bg-white shadow-[10px_10px_0_#140c08]">
          <div className="flag-stripe h-3" />
          <div className="p-6 md:p-12">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-dashed border-char/20 pb-6">
              <div>
                <h3 className="font-display text-5xl uppercase md:text-6xl">
                  {cat.emoji} {cat.title}
                </h3>
                <div className="font-script text-2xl text-fire">{cat.en}</div>
              </div>
              {cat.note && (
                <p className="max-w-md rounded-xl bg-col-yellow/30 px-4 py-3 text-sm font-medium text-char/80">
                  ℹ️ {cat.note}
                </p>
              )}
            </div>

            <div key={cat.id} className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {cat.items.map((it) => (
                <div key={it.name} className="group">
                  <div className="flex items-baseline gap-3">
                    <h4 className="text-xl font-extrabold tracking-tight uppercase group-hover:text-col-red">
                      {it.name}
                    </h4>
                    <span className="mb-1 flex-1 border-b-2 border-dotted border-char/30" />
                    <span className="font-display text-2xl text-col-red">{it.price ?? "Ask"}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    {it.en && <span className="text-sm font-semibold text-col-blue italic">{it.en}</span>}
                    {it.tag && (
                      <span className="rounded-full bg-fire px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white uppercase">
                        {it.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-char/70">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-char/60">
            Prices reflect online ordering & may vary in store. Ask about our daily specials, soups and
            traditional Colombian desserts!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={BIZ.doordash}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-col-red px-7 py-3.5 font-bold tracking-wider text-white uppercase shadow-[0_4px_0_#8a0b19] transition hover:-translate-y-0.5"
            >
              Order on DoorDash
            </a>
            <a
              href={BIZ.orderOnline}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-char bg-white px-7 py-3.5 font-bold tracking-wider text-char uppercase transition hover:bg-col-yellow"
            >
              Pickup Online
            </a>
            <a
              href={BIZ.phoneHref}
              className="rounded-full border-2 border-char bg-white px-7 py-3.5 font-bold tracking-wider text-char uppercase transition hover:bg-col-yellow"
            >
              📞 Call to Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
