import { format } from '../data'
import { formatTitleBanner, formatStageBanner, formatIntroBox, formatDayBox } from '../figmaAssets'

function ShapedText({ src, width = 'w-full', textClass, children }) {
  return (
    <div className={`relative mx-auto ${width}`}>
      <img src={src} alt="" aria-hidden="true" className="w-full h-auto" />
      <div className={`absolute inset-0 flex items-center justify-center px-[12%] text-center ${textClass}`}>
        {children}
      </div>
    </div>
  )
}

/* A maroon plate whose scalloped-corner artwork (format-day-box-*.svg /
   format-intro-box.webp) is the ONLY fill — no background color on the
   container itself, or it shows through the SVG's cut-out corners as a
   mismatched second plate underneath.

   The plate's aspect ratio is locked to the SVG's own viewBox (`aspect`)
   so the scalloped corners always stay round instead of stretching into
   ovals. object-contain (not object-fill) means that even if a plate's
   text content ever forces the box taller than that ratio, the artwork
   scales evenly instead of distorting. */
function BoltPlate({ src, aspect, children, className = '' }) {
  return (
    <div
      className={`relative grid rounded-[1.75rem] ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-fill"
      />
      {/* Padding is in % of the plate width so it always clears the scalloped
          corners (~10% of width) at any screen size; text is centred vertically. */}
      <div className="relative flex items-center justify-center px-[12%] py-[5%]">
        {children}
      </div>
    </div>
  )
}

// Intrinsic width/height of each plate SVG (from their viewBox), used to
// keep BoltPlate proportional instead of stretched/squished.
const INTRO_BOX_ASPECT = 883 / 455
const DAY_BOX_ASPECT = [902 / 346, 902 / 287, 902 / 469]

// format.days is always [День 1 (2 пункти), День 2–3 (4 пункти), День 4 (2
// пункти)], but formatDayBox's three SVGs have very different heights
// (346 / 287 / 469). Picking them by plain index (i % length) handed the
// SHORTEST plate (index 1, 287px) to the day with the MOST text (День 2–3)
// and the TALLEST plate (index 2, 469px) to a day with only two short
// bullets — that mismatch is what forced the plate to stretch. This order
// matches each plate to how much text it actually needs to hold.
const dayBoxOrder = [0, 2, 1]

export default function Format() {
  return (
    <section id="format" className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <ShapedText
          src={formatTitleBanner}
          width="max-w-2xl mb-16"
          textClass="font-display font-extrabold text-cream text-2xl sm:text-4xl md:text-5xl"
        >
          {format.title}
        </ShapedText>

        {/* Selection round */}
        <div className="mb-14">
          <ShapedText
            src={formatStageBanner}
            width="max-w-2xl mb-8"
            textClass="font-display font-bold text-cream text-sm sm:text-xl md:text-2xl leading-tight"
          >
            {format.stages[0].heading}
          </ShapedText>
          <BoltPlate
            src={formatIntroBox}
            aspect={INTRO_BOX_ASPECT}
            className="max-w-2xl mx-auto"
          >
            <p className="text-cream font-mono text-lg sm:text-xl md:text-2xl text-center leading-relaxed">
              {format.stages[0].body}
            </p>
          </BoltPlate>
        </div>

        {/* Main round heading */}
        <ShapedText
          src={formatStageBanner}
          width="max-w-2xl mb-12"
          textClass="font-display font-bold text-cream text-sm sm:text-xl md:text-2xl leading-tight"
        >
          {format.stages[1].heading}
        </ShapedText>

        {/* Day-by-day timeline */}
        <ol className="space-y-10">
          {format.days.map((d, i) => {
            const boxIndex = dayBoxOrder[i % dayBoxOrder.length]
            return (
              <li
                key={d.day}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 items-center"
              >
                <div className="font-mono">
                  <p className="font-bold text-2xl">{d.day}</p>
                  <p className="text-xl">{d.title}</p>
                </div>
                <BoltPlate
                  src={formatDayBox[boxIndex]}
                  aspect={DAY_BOX_ASPECT[boxIndex]}

                >
                  <ul className="text-cream font-mono text-lg sm:text-xl md:text-2xl list-disc list-inside space-y-2 leading-snug">
                    {d.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </BoltPlate>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
