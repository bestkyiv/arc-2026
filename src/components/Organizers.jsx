import { organizers, mainOrganizer } from '../data'
import { flourishFooterAccent } from '../figmaAssets'

function Card({ role, name, photo }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 w-32 sm:w-40 md:w-48">
      <div className="gear-frame w-full">
        <img src={photo} alt={name} loading="lazy" />
      </div>
      <div className="font-display font-bold text-maroon leading-tight">
        <p>{role}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default function Organizers() {
  return (
    <section className="relative px-6 pt-24 md:pt-32 pb-6 md:pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative flex flex-col items-center">
        {/* Fleur-de-lis ornament above the title, as in the mockup */}
        <img
          src={flourishFooterAccent}
          alt=""
          aria-hidden="true"
          className="w-64 md:w-96 mb-4"
        />
        <h2 className="font-display font-extrabold text-espresso text-4xl md:text-6xl mb-12 md:mb-16">
          Organizers
        </h2>

        <Card {...mainOrganizer} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-16 mt-20 justify-items-center">
          {organizers.map((o) => (
            <Card key={o.name} {...o} />
          ))}
        </div>
      </div>
    </section>
  )
}
