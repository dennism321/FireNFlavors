import { useState, type FormEvent } from "react";
import { BIZ, HOURS } from "../data";
import { cn } from "../utils/cn";
import { ColombiaFlag, Logo, SectionTitle } from "./ui";

export function Visit() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="visit" className="texture-dots bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          kicker="Te esperamos"
          title={<>Visit <span className="text-col-red">Us</span></>}
          sub="Easy free parking, wheelchair accessible, and always a warm ¡bienvenidos!"
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal space-y-6">
            <div className="rounded-3xl border-4 border-char bg-white p-7 shadow-[8px_8px_0_#fcd116]">
              <h3 className="font-display text-3xl uppercase">📍 Dirección</h3>
              <p className="mt-2 text-lg font-semibold">
                {BIZ.address}
                <br />
                {BIZ.city}
              </p>
              <a href={BIZ.mapsLink} target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-col-blue underline underline-offset-4">
                Get Directions →
              </a>
            </div>

            <div className="rounded-3xl border-4 border-char bg-white p-7 shadow-[8px_8px_0_#003893]">
              <h3 className="font-display text-3xl uppercase">🕐 Horario</h3>
              <ul className="mt-3 divide-y divide-char/10">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className={cn(
                      "flex justify-between py-2",
                      h.day === today && "-mx-3 rounded-lg bg-col-yellow/40 px-3 font-bold"
                    )}
                  >
                    <span>
                      {h.day} <span className="text-sm text-char/50">· {h.es}</span>
                    </span>
                    <span className={h.time === "Closed" ? "font-bold text-col-red" : ""}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-char/50">Hours may vary on holidays. Call ahead to confirm.</p>
            </div>

            <div className="rounded-3xl border-4 border-char bg-white p-7 shadow-[8px_8px_0_#ce1126]">
              <h3 className="font-display text-3xl uppercase">📞 Contacto</h3>
              <p className="mt-2">
                <a href={BIZ.phoneHref} className="text-lg font-bold hover:text-col-red">
                  {BIZ.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BIZ.email}`} className="hover:text-col-red">
                  {BIZ.email}
                </a>
              </p>
              <p>
                <a href={BIZ.instagram} target="_blank" rel="noreferrer" className="hover:text-col-red">
                  Instagram @fireandflavorsct
                </a>
              </p>
            </div>
          </div>

          <div className="reveal min-h-[480px] overflow-hidden rounded-3xl border-4 border-char shadow-[8px_8px_0_#140c08]">
            <iframe
              title="Fire & Flavors map"
              src={BIZ.mapsEmbed}
              className="h-full min-h-[480px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-fire py-20 text-white">
      <div className="texture-dots absolute inset-0 opacity-30" />
      <div className="absolute -top-10 -left-10 rotate-[-15deg] opacity-30">
        <ColombiaFlag className="h-40 w-60" />
      </div>
      <div className="absolute -right-10 -bottom-10 rotate-[15deg] opacity-30">
        <ColombiaFlag className="h-40 w-60" />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <div className="font-script text-3xl text-col-yellow">¡Únete!</div>
        <h2 className="font-display text-5xl uppercase md:text-7xl">Welcome to the Familia!</h2>
        <p className="mt-3 text-lg text-white/90">
          Sign up for news, specials and updates. We respect your privacy.
        </p>
        {done ? (
          <div className="mt-8 rounded-2xl bg-white/20 p-6 text-xl font-bold">
            ¡Gracias! You're part of the familia now 🇨🇴🔥
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 rounded-full border-2 border-white bg-white px-6 py-4 text-char outline-none placeholder:text-char/40 focus:ring-4 focus:ring-col-yellow"
            />
            <button className="rounded-full bg-char px-8 py-4 font-bold tracking-wider uppercase transition hover:bg-col-blue">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-char text-white">
      <div className="flag-stripe h-2" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-white/70">
            🔥 Auténtico sabor colombiano en Hamden, CT. 🍔🍛 Comida rápida con ingredientes 100%
            latinos. Platos típicos llenos de tradición.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: BIZ.instagram, label: "Instagram", icon: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" },
              { href: BIZ.yelp, label: "Yelp", icon: "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-col-yellow hover:text-char">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wider text-col-yellow uppercase">Explora</h4>
          <ul className="mt-3 space-y-2 text-white/75">
            <li><a href="#menu" className="hover:text-white">Menú</a></li>
            <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
            <li><a href="#colombia" className="hover:text-white">Colombia</a></li>
            <li><a href="#catering" className="hover:text-white">Catering</a></li>
            <li><a href={BIZ.doordash} target="_blank" rel="noreferrer" className="hover:text-white">Order Online</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wider text-col-yellow uppercase">Visítanos</h4>
          <p className="mt-3 text-white/75">
            {BIZ.address}
            <br />
            {BIZ.city}
            <br />
            <a href={BIZ.phoneHref} className="hover:text-white">{BIZ.phone}</a>
            <br />
            <a href={`mailto:${BIZ.email}`} className="break-all hover:text-white">{BIZ.email}</a>
          </p>
          <p className="mt-3 text-sm text-white/60">Mon & Wed–Sun · Closed Tue</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 pt-6 pb-24 text-center text-sm text-white/50 sm:pb-6">
        © {new Date().getFullYear()} Fire & Flavors · Colombian Fast Food · Hamden, CT · Hecho con ❤️ y 🔥
      </div>
    </footer>
  );
}
