import { partners } from '../data'
import { partnersBanner } from '../figmaAssets'

// encodeURI handles file names with spaces (e.g. "logo black.png");
// trim() guards against stray whitespace in links copied from the browser.
function PartnerLogo({ name, logo, href }) {
  const img = (
    <img
      src={encodeURI(logo)}
      alt={name}
      draggable="false"
      loading="lazy"
      className="h-full w-auto max-w-full object-contain"
    />
  )
  return (
    <div className="shrink-0 w-56 h-36 md:w-72 md:h-44 mx-6 md:mx-8 flex items-center justify-center">
      {href ? (
        <a
          href={href.trim()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="h-full flex items-center justify-center transition-transform duration-200 hover:scale-105 focus-visible:scale-105 outline-none"
        >
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  )
}

export default function Partners() {
  const row = partners.items
  // Second strip: reversed order, same scroll direction as the first
  const rowReversed = [...partners.items].reverse()
  return (
    <section className="py-20 md:py-28">
      <div className="flex justify-center mb-16">
        <img
          src={partnersBanner}
          alt={partners.title}
          className="w-full max-w-[18rem] sm:max-w-[24rem] md:max-w-[34rem]"
        />
      </div>

      <div className="overflow-hidden mt-4">
        <div className="flex w-max animate-marquee">
          {[...row, ...row].map((p, i) => (
            <PartnerLogo key={i} {...p} />
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-10 md:mt-14">
        <div className="flex w-max animate-marquee">
          {[...rowReversed, ...rowReversed].map((p, i) => (
            <PartnerLogo key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
