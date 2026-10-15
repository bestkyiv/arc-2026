import { hero } from '../data'

export default function Hero() {
  return (
    <section className="relative pt-14 pb-24 md:pt-16 md:pb-32 px-6 text-center overflow-hidden">
      <div className="relative">
        <h1 className="font-display font-extrabold text-espresso text-5xl sm:text-6xl md:text-7xl leading-tight max-w-4xl mx-auto">
          {hero.title}
        </h1>

        <a
           href="https://docs.google.com/forms/d/e/1FAIpQLSdw2YZBhTISrxC2T6I3a9knNjJ-q29lA51Y-LbasoDDmuo6vg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-12 py-5 rounded-full bg-espresso text-gold font-display font-extrabold text-xl md:text-2xl shadow-[0_4px_0_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_2px_0_rgba(0,0,0,0.3)] transition-all"
        >
          Registration
        </a>
      </div>
    </section>
  )
}
