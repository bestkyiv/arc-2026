import { nav } from '../data'
import { arcLogo, kpiEmblem, headerBand } from '../figmaAssets'

// Fixed pixel sizing (not rem) so the header stays a deliberate, fixed
// size independent of the site-wide rem-based scale-up in index.css.
const HEADER_HEIGHT = 190 // total height of the shaped band, incl. the dip
const EMBLEM_SIZE = 156 // ARC gear emblem — centered on the dip's lowest point

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30">
      <div className="relative w-full" style={{ height: HEADER_HEIGHT }}>
        {/* The header isn't a plain rectangle — header-band.webp is the
            actual silhouette: flat across the top, dipping down in a
            smooth curve at the center (where the emblem sits), matching
            the mockup. Everything below the dip shows the page behind it. */}
        <img
          src={headerBand}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        />
        <div className="absolute inset-x-0 top-0 mx-auto max-w-[1400px] flex items-center justify-between px-[40px] py-[26px] text-cream">
          <img src={kpiEmblem} alt="Емблема КПІ" className="h-[52px] w-auto" />
         <nav className="hidden md:flex items-center gap-[36px] font-mono text-[19px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Emblem straddles the header/hero boundary at the bottom of the
            dip, matching the mockup. */}
        <div
          className="absolute left-1/2 -translate-x-1/2 drop-shadow-lg"
          style={{
            width: EMBLEM_SIZE,
            height: EMBLEM_SIZE,
            top: HEADER_HEIGHT - EMBLEM_SIZE / 2,
          }}
        >
          <img src={arcLogo} alt="Лого ARC" className="w-full h-full" />
        </div>
      </div>
    </header>
  )
}
