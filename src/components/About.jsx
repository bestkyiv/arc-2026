import { about } from '../data'
import { RichText } from './ui'
import { aboutGearCluster, aboutGearSmallTop, aboutGearSmallBottom, aboutGearBottomRight } from '../figmaAssets'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:py-28 overflow-hidden">
      <div className="max-w-2xl mx-auto relative">
        {/* Gears are tied to the text block: each sits just outside its edge
            (right-full / left-full) so they never overlap the text. */}
        <img
          src={aboutGearSmallTop}
          alt=""
          aria-hidden="true"
          className="absolute right-full mr-4 -top-4 w-20 hidden 2xl:block"
        />
        <img
          src={aboutGearSmallBottom}
          alt=""
          aria-hidden="true"
          className="absolute left-full ml-4 -top-6 w-24 hidden 2xl:block"
        />
        <img
          src={aboutGearCluster}
          alt=""
          aria-hidden="true"
          className="absolute right-full mr-4 -bottom-6 w-32 hidden 2xl:block"
        />
        <img
          src={aboutGearBottomRight}
          alt=""
          aria-hidden="true"
          className="absolute left-full ml-4 -bottom-6 w-20 hidden 2xl:block"
        />
        <RichText
          paragraphs={about.body}
          className="relative font-mono text-xl md:text-2xl text-center leading-relaxed"
        />
      </div>
    </section>
  )
}
