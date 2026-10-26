import { AMENITIES, BIZ, REVIEWS } from "../data";
import { SectionTitle, Stars } from "./ui";

export function Reviews() {
  return (
    <section id="reviews" className="texture-dots relative overflow-hidden bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          kicker="Lo que dice la familia"
          title={<>Real <span className="text-col-blue">Reviews</span></>}
        />
        <div className="reveal mb-12 flex flex-wrap justify-center gap-5">
          {[
            ["Google", "4.8", "24 reviews"],
            ["DoorDash", "4.7", "50+ ratings"],
            ["Yelp", "★", "Burgers · Breakfast · Colombian"],
          ].map(([s, r, c]) => (
            <div key={s} className="flex items-center gap-4 rounded-2xl border-2 border-char bg-white px-6 py-4 shadow-[5px_5px_0_#003893]">
              <div className="font-display text-5xl text-col-red">{r}</div>
              <div>
                <div className="font-bold uppercase">{s}</div>
                <div className="text-sm text-char/60">{c}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="reveal mb-6 break-inside-avoid rounded-3xl bg-white p-7 shadow-lg ring-1 ring-black/5"
            >
              <Stars className="text-2xl" />
              <blockquote className="mt-3 text-lg leading-relaxed text-char/85">“{r.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-col-blue font-bold text-col-yellow">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-char/50">
                    via {r.source}
                    {r.date ? ` · ${r.date}` : ""}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={BIZ.yelp} target="_blank" rel="noreferrer" className="font-bold text-col-red underline underline-offset-4">
            See more reviews & photos on Yelp →
          </a>
        </div>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section className="bg-col-blue py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="font-display mb-8 text-center text-4xl uppercase md:text-5xl">
          Todo lo que <span className="text-col-yellow">necesitas</span>
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {AMENITIES.map((a) => (
            <div key={a.label} className="reveal rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15 transition hover:bg-col-yellow hover:text-char">
              <div className="text-3xl">{a.icon}</div>
              <div className="mt-2 text-sm font-semibold">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Catering() {
  return (
    <section id="catering" className="relative overflow-hidden bg-char py-24 text-white">
      <img src="images/bandeja-paisa.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-char via-char/85 to-col-red/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <div className="font-script text-3xl text-col-yellow">¡Lleva la fiesta!</div>
          <h2 className="font-display text-5xl leading-[0.95] uppercase md:text-7xl">
            Catering & <span className="fire-text">Events</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Birthdays, office lunches, quinceañeras, game day or family reunions. Bring the authentic
            taste of Colombia to your next celebration. Salchipapa trays, bandejas, arepas,
            empanadas, jugos and more, prepared fresh for your group.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${BIZ.email}?subject=Catering%20Request`} className="rounded-full bg-col-yellow px-8 py-4 font-extrabold tracking-wider text-char uppercase shadow-[0_5px_0_#b8950a] transition hover:-translate-y-1">
              Request Catering
            </a>
            <a href={BIZ.phoneHref} className="rounded-full border-2 border-white px-8 py-4 font-bold tracking-wider uppercase transition hover:bg-white hover:text-char">
              {BIZ.phone}
            </a>
          </div>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {["🎂 Birthdays", "💼 Office Lunch", "👗 Quinceañeras", "⚽ Game Day", "👨‍👩‍👧‍👦 Reunions", "🎓 Graduations"].map((e) => (
            <div key={e} className="rounded-2xl bg-white/10 p-4 text-center font-semibold backdrop-blur ring-1 ring-white/20">
              {e}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
