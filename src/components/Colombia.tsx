import { COLOMBIA_SITES, VIDEOS } from "../data";
import { cn } from "../utils/cn";
import { ColombiaFlag, LazyVideo, SectionTitle } from "./ui";

const FLAG_MEANING = [
  { color: "bg-col-yellow", text: "text-char", name: "Amarillo", d: "The riches of our land: gold, sun, harvests and abundance." },
  { color: "bg-col-blue", text: "text-white", name: "Azul", d: "Two oceans, the Pacific & Caribbean, and our endless skies and rivers." },
  { color: "bg-col-red", text: "text-white", name: "Rojo", d: "The blood of the heroes who gave us our independence in 1810." },
];

export default function Colombia() {
  return (
    <section id="colombia" className="relative overflow-hidden bg-char text-white">
      {/* Flag video banner */}
      <div className="relative h-[70vh] min-h-[460px] overflow-hidden">
        <LazyVideo src={VIDEOS.flag.src} poster={VIDEOS.flag.poster} />
        <div className="absolute inset-0 bg-gradient-to-b from-char/40 via-char/30 to-char" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <ColombiaFlag className="mb-6 h-16 w-24 ring-4 ring-white/80" wave />
          <div className="font-script text-3xl text-col-yellow md:text-4xl">Orgullosamente</div>
          <h2 className="font-display text-6xl leading-none uppercase drop-shadow-2xl md:text-9xl">
            ¡Colombia, <br className="md:hidden" />
            <span className="fire-text">Tierra Querida!</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Our vision goes beyond food. We want to be a reference for Colombian culture, a place
            where flavors awaken memories and our community finds a piece of home.
          </p>
        </div>
      </div>

      {/* Flag meaning */}
      <div className="relative mx-auto -mt-10 max-w-6xl px-4">
        <div className="grid overflow-hidden rounded-3xl shadow-2xl md:grid-cols-[2fr_1fr_1fr]">
          {FLAG_MEANING.map((f) => (
            <div key={f.name} className={cn("reveal p-8", f.color, f.text)}>
              <div className="font-display text-4xl uppercase">{f.name}</div>
              <p className="mt-2 font-medium opacity-90">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sites gallery */}
      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle
          light
          kicker="Lugares que enamoran"
          title={<>Postcards from <span className="text-col-yellow">Colombia</span></>}
          sub="The most photogenic corners of the land that inspires every plate we serve."
        />
        <div className="grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COLOMBIA_SITES.map((s, i) => (
            <figure
              key={s.name}
              className={cn(
                "reveal group relative overflow-hidden rounded-3xl",
                (i === 0 || i === 3) && "lg:col-span-2 lg:row-span-2",
                s.special && "ring-4 ring-col-yellow"
              )}
            >
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-char/20 to-transparent" />
              {s.special && (
                <span className="absolute top-4 left-4 rounded-full bg-col-yellow px-3 py-1 text-xs font-bold tracking-wider text-char uppercase">
                  👨‍🍳 Chef Diego's hometown
                </span>
              )}
              <figcaption className="absolute right-0 bottom-0 left-0 p-5">
                <div className="text-xs font-semibold tracking-[0.2em] text-col-yellow uppercase">
                  📍 {s.region}
                </div>
                <div className="font-display mt-1 text-2xl uppercase md:text-3xl">{s.name}</div>
                <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 transition-all duration-500 group-hover:max-h-24">
                  {s.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="flag-stripe h-3" />
    </section>
  );
}
