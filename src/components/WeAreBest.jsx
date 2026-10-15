import { weAreBest } from '../data'
import { RichText } from './ui'
import { weAreBestBanner } from '../figmaAssets'

export default function WeAreBest() {
  return (
    <section id="we-are-best" className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-14">
          <img
            src={weAreBestBanner}
            alt={weAreBest.title}
            className="w-full max-w-[18rem] sm:max-w-[24rem] md:max-w-[34rem]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <RichText
            paragraphs={weAreBest.body}
            className="font-mono text-lg leading-relaxed"
          />
          <img
            src={weAreBest.photo}
            alt="Команда BEST"
            className="rounded-3xl border-4 border-copper shadow-lg w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
