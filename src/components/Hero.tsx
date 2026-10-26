import { BIZ, VIDEOS } from "../data";
import { ColombiaFlag, Stars } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-char">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEOS.hero.src}
        poster={VIDEOS.hero.poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-char via-char/75 to-char/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-char via-transparent to-char/40" />
      <div className="texture-dots-light absolute inset-0 opacity-40" />

      {/* Vertical flag accent */}
      <div className="flag-stripe-v absolute top-0 left-0 hidden h-full w-2 md:block" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-36 pb-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="reveal in mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <ColombiaFlag className="h-5 w-7" wave />
            <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase md:text-sm">
              Auténtico sabor colombiano · Hamden, CT
            </span>
          </div>

          <h1 className="font-display text-[15vw] leading-[0.85] text-white uppercase sm:text-8xl lg:text-[8.5rem]">
            Bringing
            <br />
            the <span className="fire-text">Fuego</span>
          </h1>
          <p className="font-script mt-4 text-3xl text-col-yellow md:text-4xl">
            ¡Descubre el sabor de Colombia en cada bocado!
          </p>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Where tradition and creativity unite to conquer your palate. From hearty Bandeja Paisa to
            explosive Colombian fast food: salchipapas, mazorcadas, loaded hot dogs & burgers, made
            with 100% Latin ingredients.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={BIZ.doordash}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-col-yellow px-8 py-4 text-base font-extrabold tracking-wider text-char uppercase shadow-[0_5px_0_#b8950a] transition hover:-translate-y-1"
            >
              🔥 Order Now
            </a>
            <a
              href="#menu"
              className="rounded-full border-2 border-white px-8 py-4 text-base font-bold tracking-wider text-white uppercase transition hover:bg-white hover:text-char"
            >
              Ver Menú
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Stars className="text-xl" />
              <span className="font-bold">4.8</span>
              <span className="text-sm text-white/60">Google</span>
            </div>
            <div className="h-6 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="font-bold">4.7★</span>
              <span className="text-sm text-white/60">DoorDash (50+ ratings)</span>
            </div>
            <div className="h-6 w-px bg-white/30" />
            <div className="text-sm">
              📍 {BIZ.address}, {BIZ.city}
            </div>
          </div>
        </div>

        {/* Floating food polaroids */}
        <div className="relative hidden h-[520px] lg:block">
          <figure
            className="animate-floaty absolute top-0 right-6 w-72 rotate-6 rounded-2xl bg-white p-3 pb-10 shadow-2xl"
            style={{ ["--r" as string]: "6deg" }}
          >
            <img src="images/bandeja-paisa.jpg" alt="Bandeja Paisa" className="h-60 w-full rounded-lg object-cover" />
            <figcaption className="font-script absolute bottom-2 left-0 w-full text-center text-xl text-col-red">
              Bandeja Paisa
            </figcaption>
          </figure>
          <figure
            className="animate-floaty absolute bottom-0 left-0 w-64 rounded-2xl bg-white p-3 pb-10 shadow-2xl"
            style={{ ["--r" as string]: "-7deg", animationDelay: "1.5s" }}
          >
            <img src="images/salchipapa.jpg" alt="Salchipapa" className="h-52 w-full rounded-lg object-cover" />
            <figcaption className="font-script absolute bottom-2 left-0 w-full text-center text-xl text-col-blue">
              Salchipapa
            </figcaption>
          </figure>
          <div className="absolute top-1/2 left-1/3 flex h-28 w-28 -translate-y-1/2 rotate-12 items-center justify-center rounded-full bg-col-red text-center font-display text-lg leading-tight text-white uppercase shadow-xl ring-4 ring-col-yellow">
            Since
            <br />
            June 2024
          </div>
        </div>
      </div>

      <a
        href="#marquee"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
