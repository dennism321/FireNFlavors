import { VIDEOS } from "../data";
import { ColombiaFlag, LazyVideo } from "./ui";

const TIMELINE = [
  { y: "El Colegio", t: "A friendship is born", d: "Diego & Felipe meet in the hallways of their school in Colombia." },
  { y: "Zipaquirá", t: "The recipes", d: "Diego, a professional cook, perfects the recipes that shine on our menu today." },
  { y: "Junio 2024", t: "Doors open", d: "Fire & Flavors opens at 1100 Dixwell Ave, Hamden, CT." },
  { y: "Hoy", t: "Una familia", d: "Every guest becomes part of the family, one bite at a time." },
];

export default function Story() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-col-yellow py-24">
      <div className="texture-dots absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="relative h-[460px] overflow-hidden rounded-[2.5rem] border-4 border-char shadow-[12px_12px_0_#140c08] md:h-[560px]">
            <LazyVideo src={VIDEOS.story.src} poster={VIDEOS.story.poster} />
            <div className="absolute inset-0 bg-gradient-to-t from-char/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="font-script text-2xl text-col-yellow">Diego & Felipe</div>
              <div className="font-display text-3xl uppercase">Two friends. One dream.</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-4 rotate-12 md:-right-8">
            <ColombiaFlag className="h-20 w-32 ring-4 ring-white" wave />
          </div>
        </div>

        <div className="reveal">
          <div className="font-script text-3xl text-col-red">Nuestra Historia</div>
          <h2 className="font-display mt-1 text-5xl leading-[0.95] uppercase md:text-7xl">
            Donde la tradición y la creatividad se unen
          </h2>
          <div className="mt-6 space-y-4 text-lg text-char/85">
            <p>
              Our story is the fusion of two passions and a friendship born in the hallways of school.
              We are <strong>Diego and Felipe</strong>, two Colombians who share the dream of bringing
              the flavor of our land to every corner.
            </p>
            <p>
              <strong>Diego</strong>, a cook by profession, perfected his culinary art in{" "}
              <strong>Zipaquirá, Cundinamarca</strong>, where the recipes on our menu were created with
              dedication. <strong>Felipe</strong>, an advertiser and lover of good food, brings
              creativity and design passion to every plate we serve.
            </p>
            <p>
              In <strong>June 2024</strong> we opened our doors with a clear mission: to be a bridge
              connecting hearts and palates with the essence of Colombian cuisine, enchanting the
              Latin community and winning over American tastes too.
            </p>
          </div>
          <blockquote className="mt-6 rounded-2xl border-l-8 border-col-red bg-white/70 p-5 font-semibold italic">
            “En Fire and Flavors, cada plato cuenta una historia, y cada cliente es parte de nuestra
            familia.”
          </blockquote>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl px-4">
        <div className="grid gap-5 md:grid-cols-4">
          {TIMELINE.map((s, i) => (
            <div key={s.y} className="reveal rounded-3xl border-4 border-char bg-white p-6 shadow-[6px_6px_0_#140c08]" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-display text-3xl text-col-blue uppercase">{s.y}</div>
              <div className="mt-1 font-bold text-col-red uppercase">{s.t}</div>
              <p className="mt-2 text-sm text-char/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
