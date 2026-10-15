import { footer } from '../data'
import { footerTab } from '../figmaAssets'

// Footer is built from three parts: a flat espresso strip on each side and
// the raised centre tab (footer-tab.svg, 879×184) in the middle. This keeps
// the tab at a fixed, small size (50% of the original) while the strips
// stretch to the page edges.
//
// Tab geometry (svg units): the side strips start at y=67 → 36.4% of height.
// The icon row is 600 units wide (68.26% of the tab), centred at 51.4% / 39%.
const STRIP = {
  background: 'linear-gradient(to bottom, transparent 36.4%, #3f1a03 36.4%)',
}

// The tab's width is fractional (aspect-ratio + vw), so the edge between a
// strip and the tab lands between device pixels and a hairline of the page
// texture shows through. Each strip therefore extends 2px *under* the tab
// (negative margin on the inner side). Both are the same espresso colour,
// so the overlap is invisible but closes the gap.
const OVERLAP = '-2px'

export default function Footer() {
  return (
    <footer className="flex w-full items-stretch leading-none">
      <div className="flex-1 min-w-0" style={{ ...STRIP, marginRight: OVERLAP }} aria-hidden="true" />

      <div
        className="relative z-10 shrink-0"
        style={{ height: 'max(75px, 4.79vw)', aspectRatio: '879 / 184' }}
      >
        <img
          src={footerTab}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="block h-full w-full select-none"
        />

        <div
          className="absolute flex items-center justify-between -translate-x-1/2 -translate-y-1/2"
          style={{ left: '51.4%', top: '39%', width: '68.26%' }}
        >
          {footer.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="block shrink-0 transition-transform duration-200 hover:scale-110 focus-visible:scale-110 outline-none"
              style={{ width: `${(s.width / 600) * 100}%` }}
            >
              <img
                src={s.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="block w-full h-auto"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0" style={{ ...STRIP, marginLeft: OVERLAP }} aria-hidden="true" />
    </footer>
  )
}
