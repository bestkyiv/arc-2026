// Local copies of the shape/graphic assets exported from the Figma file
// (Q0ArQhHiq7aiBmFPfZs9sk). These files live in public/figma-assets/ and
// are NOT included by default — run `bash scripts/fetch-figma-assets.sh`
// once (needs internet access) to download them before `npm run dev` /
// `docker build`. See README.md.

const ASSET = (name) => `/figma-assets/${name}`

// Real ARC "A · KYIV" gear logo
export const arcLogo = ASSET('arc-logo.svg')

// KPI (Kyiv Polytechnic) emblem, top-left of the navbar
export const kpiEmblem = ASSET('kpi-emblem.png')

// Header background band
export const headerBand = ASSET('header-band.webp')

// Ornate scroll flourish above/below the "Organizers" heading
export const flourishTop = ASSET('flourish-top.webp')
export const flourishBottom = ASSET('flourish-bottom.webp')

// Ornament above the Q&A banner (exported from the mockup)
export const bottomElm = ASSET('bottom-elm.png')

// "Categories" title ribbon (diamond banner) + the two pill-badge shapes
export const categoriesRibbon = ASSET('categories-ribbon.svg')
export const categoryPillA = ASSET('category-pill-a.webp')
export const categoryPillB = ASSET('category-pill-b.webp')

// "Competition Format" bolt-cornered banner + the two round-tour sub-banners
export const formatTitleBanner = ASSET('format-title-banner.webp')
export const formatStageBanner = ASSET('format-stage-banner.webp')
export const formatIntroBox = ASSET('format-intro-box.webp')
export const formatDayBox = [
  ASSET('format-day-box-1.webp'),
  ASSET('format-day-box-2.webp'),
  ASSET('format-day-box-3.webp'),
]
export const flourishFooterAccent = ASSET('flourish-footer-accent.webp')
export const gearTile = ASSET('gear-tile.webp')
export const headerWave = ASSET('header-wave.svg')

// "About project" (Про проєкт) decorative gears — one per corner
export const aboutGearCluster = ASSET('about-gear-cluster.png')
export const aboutGearSmallTop = ASSET('about-gear-small-top.svg')
export const aboutGearSmallBottom = ASSET('about-gear-small-bottom.svg')
export const aboutGearBottomRight = ASSET('about-gear-bottom-right.svg')

// Hero: gear clusters at the bottom-left / bottom-right corners
export const heroGearCluster = ASSET('hero-gear-cluster.png')

// Conditions for participation: small flourish above the title and
// below the body copy (same ornament family as the Organizers heading)
export const conditionsRibbon = ASSET('conditions-ribbon.webp')
// Wider flourish (spike pointing up) used above the "Conditions" heading
export const conditionsTop = ASSET('conditions-top.webp')

// Partners banner side decorations
export const partnersVine1 = ASSET('partners-vine-1.webp')
export const partnersVine2 = ASSET('partners-vine-2.webp')
export const partnersVine3 = ASSET('partners-vine-3.webp')
export const partnersGearCluster = ASSET('partners-gear-cluster.svg')

// "We are BEST" gear cluster flanking the title pill
export const weAreBestGearCluster = ASSET('we-are-best-gear-cluster.svg')

// "We are BEST" title banner (pill + flanking gears, single combined SVG)
export const weAreBestBanner = ASSET('wearebest.webp')

// "Partners" title banner (pill + flanking gears, single combined SVG)
export const partnersBanner = ASSET('partners.webp')


export const fon = ASSET('vecteezy_grunge-texture-vector-background_1090701.webp')

// Footer background shape (raised centre tab that holds the social icons)
export const footerShape = ASSET('footer.svg')
// Same shape, cropped to just the raised tab (used so the footer can be scaled independently of page width)
export const footerTab = ASSET('footer-tab.svg')

// Q&A tile: brown box with gold border + the gear that sits on its edges
export const qaBox = ASSET('qa-box.png')
export const qaGear = ASSET('qa-gear.svg')
