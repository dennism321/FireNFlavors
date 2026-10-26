import { BIZ, SIGNATURES } from "../data";
import { cn } from "../utils/cn";
import { SectionTitle } from "./ui";

const WORDS = [
  "Bandeja Paisa",
  "Salchipapa",
  "Mazorcada",
  "Arepa de Choclo",
  "Chicharrón",
  "Calentado",
  "Jugos en Leche",
  "Perro de la Casa",
  "Tostones",
  "Papa Criolla",
];
const COLORS = ["text-col-yellow", "text-white", "text-col-red", "text-ember"];

export function Marquee() {
  return (
    <div id="marquee" className="relative overflow-hidden bg-col-blue py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...WORDS, ...WORDS].map((w, i) => (
          <span key={i} className={cn("font-display flex items-center gap-10 text-3xl uppercase md:text-4xl", COLORS[i % 4])}>
            {w} <span className="text-2xl">🔥</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <section className="texture-dots relative overflow-hidden bg-cream py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="reveal">
          <div className="font-script text-3xl text-fire">¡Qué chimba!</div>
          <h2 className="font-display mt-2 text-5xl leading-[0.95] uppercase md:text-7xl">
            Un pedacito de <span className="text-col-blue">Colombia</span> en{" "}
            <span className="text-col-red">Hamden</span>
          </h2>
          <div className="flag-stripe mt-5 h-1.5 w-28 rounded-full" />
          <p className="mt-6 text-xl font-semibold text-char/90">
            Immerse yourself in the lively atmosphere as you enjoy delicious food and embrace the
            spirit of Colombian cuisine.
          </p>
          <p className="mt-4 text-lg text-char/70">
            Fire & Flavors is a true gem for lovers of delicious homemade food. Our cozy restaurant
            offers a wide selection of breakfasts, lunches and quick bites, all made with fresh
            ingredients and a homemade touch that shines through in every bite. Big portions,
            honest prices ({BIZ.priceRange}) and a whole lot of sabor.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              ["4.8★", "Google Rating"],
              ["40+", "Menu Items"],
              ["100%", "Latin Ingredients"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border-2 border-char bg-white p-4 shadow-[5px_5px_0_#140c08]">
                <div className="font-display text-3xl text-col-red md:text-4xl">{n}</div>
                <div className="text-xs font-semibold tracking-wider text-char/70 uppercase">{l}</div>
              </div>
            ))}
          </div>
          <a
            href="#visit"
            className="mt-9 inline-block rounded-full bg-char px-8 py-4 font-bold tracking-wider text-white uppercase transition hover:bg-col-red"
          >
            Check Us Out →
          </a>
        </div>

        {/* Collage like reference site */}
        <div className="reveal grid grid-cols-2 gap-4">
          <img src="images/arepas.jpg" alt="Arepas" className="h-64 w-full -rotate-2 rounded-3xl border-4 border-white object-cover shadow-xl md:h-80" />
          <img src="images/jugos.jpg" alt="Jugos naturales" className="mt-10 h-64 w-full rotate-2 rounded-3xl border-4 border-white object-cover shadow-xl md:h-80" />
          <img src="images/chicharron.jpg" alt="Chicharrón" className="h-56 w-full rotate-1 rounded-3xl border-4 border-white object-cover shadow-xl md:h-64" />
          <img src="images/mazorcada.jpg" alt="Mazorcada" className="-mt-6 h-56 w-full -rotate-1 rounded-3xl border-4 border-white object-cover shadow-xl md:h-64" />
        </div>
      </div>
    </section>
  );
}

export function Signatures() {
  return (
    <section className="relative bg-char py-24 text-white">
      <div className="texture-dots-light absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle
          light
          kicker="Los favoritos de la casa"
          title={<>Signature <span className="fire-text">Platos</span></>}
          sub="Recipes perfected by Chef Diego in Zipaquirá, Cundinamarca — now sizzling on Dixwell Ave."
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURES.map((s) => (
            <article
              key={s.name}
              className="reveal group overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-2 hover:ring-col-yellow"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-char/80 to-transparent" />
                <span className={cn("absolute top-4 right-4 rounded-full px-4 py-1.5 font-display text-xl text-white shadow-lg", s.color, s.color === "bg-col-yellow" && "text-char")}>
                  {s.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl tracking-wide uppercase">{s.name}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
