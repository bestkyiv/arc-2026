import { categories } from '../data'
import { categoriesRibbon, categoryPillA, categoryPillB } from '../figmaAssets'

const pillShapes = [categoryPillA, categoryPillB, categoryPillB]

export default function Categories() {
  return (
    <section id="categories" className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-xl mb-10">
          <img src={categoriesRibbon} alt="" aria-hidden="true" className="w-full h-auto" />
          <h2 className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-cream text-2xl sm:text-3xl md:text-5xl px-6">
            {categories.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-[16rem] sm:max-w-[900px]">
          {categories.items.map((item, i) => (
            <div
              key={i}
              className="relative w-full"
              style={{ containerType: 'inline-size' }}
            >
              <img
                src={pillShapes[i % pillShapes.length]}
                alt=""
                aria-hidden="true"
                className="w-full h-auto block"
              />
              {/* Font size scales with the card width (cqw), so every label
                  fits its card and all three look identical in size. */}
              <span
                className="absolute inset-0 flex items-center justify-center font-display font-bold text-cream text-center leading-tight"
                style={{ fontSize: '8.5cqw', padding: '0 9cqw' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
