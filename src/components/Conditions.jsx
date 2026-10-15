import { conditions } from '../data'
import { conditionsRibbon, conditionsTop } from '../figmaAssets'

export default function Conditions() {
  return (
    <section id="register" className="px-6 py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative">
        <img
          src={conditionsTop}
          alt=""
          aria-hidden="true"
          className="w-full max-w-md md:max-w-lg mx-auto mb-6 opacity-80"
        />
        <h1 className="font-display font-extrabold text-3xl md:text-5xl mb-8">
          {conditions.title}
        </h1>
        <p className="font-mono text-base md:text-3xl leading-relaxed">{conditions.body}</p>
        <img
          src={conditionsRibbon}
          alt=""
          aria-hidden="true"
          className="w-48 md:w-96 mx-auto mt-8 opacity-120"
        />
      </div>
    </section>
  )
}
