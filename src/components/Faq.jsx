import { useState } from 'react'
import { faq } from '../data'
import { bottomElm, formatTitleBanner, qaGear } from '../figmaAssets'

// Один блок: клік перемикає «питання ⇄ відповідь», шестерні по боках
// провертаються (ліва — за годинниковою, права — проти, як зчеплені).
function QaTile({ q, a }) {
  const [open, setOpen] = useState(false)
  const [turns, setTurns] = useState(0)

  const toggle = () => {
    setOpen((o) => !o)
    setTurns((t) => t + 1)
  }

  const angle = turns * 180

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      className="qa-tile"
    >
      <img
        src={qaGear}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="qa-gear qa-gear-left"
        style={{ '--qa-rot': `${angle}deg` }}
      />
      <img
        src={qaGear}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="qa-gear qa-gear-right"
        style={{ '--qa-rot': `${-angle}deg` }}
      />

      <span
        className="qa-text py-8 text-cream font-display font-bold text-2xl md:text-3xl"
        data-visible={!open}
        aria-hidden={open}
      >
        {q}
      </span>
      <span
        className="qa-text py-8 text-cream font-display font-bold text-sm md:text-base"
        data-visible={open}
        aria-hidden={!open}
      >
        {a}
      </span>
    </button>
  )
}

export default function Faq() {
  return (
    <section className="px-6 pt-6 md:pt-8 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <img
          src={bottomElm}
          alt=""
          aria-hidden="true"
          className="w-72 md:w-[28rem] mb-6"
        />

        <div className="relative w-full max-w-sm mb-14">
          <img src={formatTitleBanner} alt="" aria-hidden="true" className="w-full h-auto" />
          <h2 className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-cream text-4xl md:text-5xl">
            Q&amp;A
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 gap-8">
          {faq.map(({ q, a }) => (
            <QaTile key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
