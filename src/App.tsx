import Header from "./components/Header";
import Hero from "./components/Hero";
import { Intro, Marquee, Signatures } from "./components/Intro";
import Videos from "./components/Videos";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Colombia from "./components/Colombia";
import { Amenities, Catering, Reviews } from "./components/Reviews";
import { Footer, Newsletter, Visit } from "./components/Visit";
import { useReveal } from "./components/ui";
import { BIZ } from "./data";

export default function App() {
  useReveal();

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Signatures />
        <Videos />
        <Menu />
        <Story />
        <Colombia />
        <Reviews />
        <Amenities />
        <Catering />
        <Visit />
        <Newsletter />
      </main>
      <Footer />

      {/* Floating mobile order button */}
      <a
        href={BIZ.doordash}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-col-red px-5 py-3.5 font-bold tracking-wider text-white uppercase shadow-2xl ring-4 ring-col-yellow sm:hidden"
      >
        🔥 Order Now
      </a>

      {/* TechAthos watermark */}
      <a
        href="https://techathos.com"
        target="_blank"
        rel="noreferrer"
        title="Website by TechAthos"
        aria-label="Website by TechAthos"
        className="fixed bottom-4 left-4 z-40 block h-14 w-14 overflow-hidden rounded-xl opacity-60 shadow-lg ring-1 ring-white/20 transition hover:opacity-100 sm:h-16 sm:w-16"
      >
        <img src="images/techathos-logo.png" alt="TechAthos" className="h-full w-full" />
      </a>
    </div>
  );
}
