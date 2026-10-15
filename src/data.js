// All content below is sourced directly from the Figma design
// (file: Q0ArQhHiq7aiBmFPfZs9sk). Photos live in public/figma-assets/ —
// run `bash scripts/fetch-figma-assets.sh` once to download them
// (see README.md).

const ASSET = (name) => `/figma-assets/${name}`

export const nav = [
  { label: 'Про проєкт', href: '#about' },
  { label: 'Формат', href: '#format' },
  { label: 'Категорії', href: '#categories' },
  { label: 'Про нас', href: '#we-are-best' },
]

export const hero = {
  title: 'Assemble Research Competition',
  cta: 'Registration',
}

export const about = {
  body: [
    [
      { bold: true, text: 'ARC' },
      {
        text:
          ' — можливість, яку ти давно шукав(-ла)! Збирай команду та спробуй свої сили на щорічних інженерних змаганнях: ',
      },
    ],
    [
      { bold: true, text: 'тобі' },
      {
        text:
          ' знадобляться технічні знання, креатив і вміння презентувати, щоб поділитися своїм рішенням реальної інженерної задачі. Здобувай практичний досвід та знайомся з провідними українськими компаніями, які диктують майбутнє вже сьогодні',
      },
    ],
  ],
}

export const format = {
  title: 'Competition Format',
  stages: [
    {
      heading: 'Відбірковий тур (онлайн)',
      body: 'Після успішної реєстрації ти отримаєш завдання на e-mail. Твоя задача — виконати його протягом наступних 24 годин. Доведи, що твоя команда заряджена на перемогу!',
    },
    {
      heading: 'Основний тур (офлайн у м. Київ): 23.10–26.10',
      body: null,
    },
  ],
  days: [
    {
      day: 'День 1',
      title: 'Відкриття',
      items: [
        'Знайомство з учасниками, менторами та організаторами проєкту',
        'Ознайомлення з таймлайном змагань',
      ],
    },
    {
      day: 'День 2 — 3',
      title: 'Змагання',
      items: [
        '2 дні роботи над реальним кейсом у обраній категорії',
        '16 годин на розв’язання технічного завдання',
        'Менторські сесії з партнерами та їхня безумовна підтримка',
        'Презентації проєктів',
      ],
    },
    {
      day: 'День 4',
      title: 'Фінал і закриття',
      items: ['Визначення переможців змагань', 'Закриття'],
    },
  ],
}

export const categories = {
  title: 'Categories',
  // The Figma frame only had a placeholder repeated three times —
  // swap these for the real track names.
  items: ['Mil-tech', 'Роботизовані системи', 'Менеджмент'],
}

export const conditions = {
  title: 'Conditions for participation',
  body: 'Ти — студент(-ка) українського ЗВО, який(-а) прагне інженерної практики, бо втомився(-лась) від сухої теорії та встиг(-ла) зареєструватися до 12.10.2026. У тебе обов’язково зібрана команда з не більше ніж 4 однодумців, вони — твоя підтримка та запорука успіху. Разом ви подолали відбіркове завдання та готові змагатися за 1 місце. Якщо у тебе немає команди, читай Q&A нижче!',
}

// Заглушка для відповідей — заміни текст `a` на справжні відповіді.
const FAQ_PLACEHOLDER = 'Тут буде відповідь на це питання. (заглушка)'
const FAQ_PLACEHOLDER1 = 'Участь у ARC є абсолютно безкоштовною для відібраних учасників. Витрати, що пов’язані з організацією, матеріальним забезпеченням та харчуванням на локації, покриваються організаторами та партнерами змагань. '
const FAQ_PLACEHOLDER2= 'Участь можлива для студентів та студенток українських ЗВО, які цікавляться інженерією. Курс та спеціальність — не важливі. Тут грає роль твій ентузіазм, креативність та технічне мислення, яке необхідне для того, щоб реалізувати твоє інженерне рішення.'
const FAQ_PLACEHOLDER3 = 'Команда має складатися з 3 або 4 учасників. Команда, як і всі її учасники, можуть брати участь лише в одній з обраних категорій.'
const FAQ_PLACEHOLDER4 = 'Реєструйся індивідуально! Ми допоможемо сформувати тобі команду одразу після реєстрації.'
const FAQ_PLACEHOLDER5 = 'Змагання проходять у м. Київ офлайн. Точне місце проведення буде повідомлено відібраним учасникам заздалегідь. Якщо ти з іншого міста, ми заохочуємо тебе подаватися, проте не зможемо відшкодувати транспортні та житлові витрати. '
const FAQ_PLACEHOLDER6 = 'Змагання проходять у два етапи. Перший — онлайн-відбір: твоя команда отримає завдання на електронну пошту та матиме 24 години на його виконання. Другий — основний, що триває 4 дні офлайн у Києві'

export const faq = [
  { q: 'Скільки коштує участь?', a: FAQ_PLACEHOLDER1 },
  { q: 'Хто може взяти участь у ARC?', a: FAQ_PLACEHOLDER2 },
  { q: 'Скільки людей має бути у команді?', a: FAQ_PLACEHOLDER3 },
  { q: 'Що робити, якщо я не маю команди?', a: FAQ_PLACEHOLDER4 },
  { q: 'Де проходять змагання?', a: FAQ_PLACEHOLDER5 },
  { q: 'У якому форматі проходить ARC?', a: FAQ_PLACEHOLDER6 },
]

export const mainOrganizer = {
  role: 'Main Organiser',
  name: 'Мариніч Поліна',
  photo: ASSET('polina.JPG'),
}

export const organizers = [
  { role: 'Host', name: 'Тригуб Діана', photo: ASSET('diana.jpg') },
  { role: 'CR Responsible', name: 'Пузік Анна', photo: ASSET('puzik.JPG') },
  { role: 'PR Responsible', name: 'Малахова Софія', photo: ASSET('sofi.JPG') },
  { role: 'HR Responsible', name: 'Ільїн Михайло', photo: ASSET('miha.jpg') },
  { role: 'Media Responsible', name: "П'ятигорець Тетяна", photo: ASSET('tanya.JPG') },
  { role: 'Marketing Designer', name: 'Горохівський Олександр', photo: ASSET('sanchpopus.JPG') },
  { role: 'Brand Designer', name: 'Фотул Олександра', photo: ASSET('sashka.JPG') },
  { role: 'Barter Responsible', name: 'Сологуб Марія', photo: ASSET('maria.jpg') },
  { role: 'Logist', name: 'Литвиненко Максим', photo: ASSET('maks.jpg') },
  { role: 'Topic Responsible', name: 'Землянухін Єгор', photo: ASSET('egor.JPG') },
  { role: 'PAX Responsible', name: 'Голуб Дарина', photo: ASSET('dar.JPG') },
  { role: 'Mentor', name: 'Карачевцева Вікторія', photo: ASSET('vik.JPG') },
]

export const partners = {
  title: 'Partners',
   items: [
    { name: 'puzzlean',  logo: '/partners/logo_puzzlean 1.png',  href: 'https://puzzlean.com.ua ' },
    { name: 'vidro',  logo: '/partners/logo black.png',  href: 'https://vidro.lviv.ua/ ' },
    { name: 'geekach', logo: '/partners/Mix_black.png', href: 'https://geekach.com.ua/?srsltid=AfmBOoouyskxve1YMIMJrUZX0RO9s5FqveeKI3L5YycJYHqSil4nWard ' },
    { name: 'griffon socks',  logo: '/partners/63273272465314.webp',  href: 'https://griffonsocks.com/?srsltid=AU7gw4W8yDMutYkvt8NpLG_PAJzh5lc_n-XzzMgaxflf1eIak1mlZufe ' },
    { name: 'cyber.zone',  logo: '/partners/cyber.zone.png',  href: 'https://www.instagram.com/cyberzone.ua/ ' },
    { name: 'cambridge.ua',  logo: '/partners/Logo_Camridge.ua_main.png',  href: 'https://cambridge.ua/ ' },
    { name: 'Київстар ТБ',  logo: '/partners/KSTV_LOGO_hor_blue_ua.png',  href: 'https://www.instagram.com/kyivstar.tv/ ' },
    { name: 'GPsocks',  logo: '/partners/Copy of logo-gpsocks.svg',  href: 'https://gpsocks.com/ ' },
    { name: 'CBGames',  logo: '/partners/logo_.png',  href: 'https://www.instagram.com/cbgames_kyiv?stkn=aXk3ajF4OHRnZnE0 ' },
    { name: 'Battery_logo',  logo: '/partners/Battery_Logo Black_1.png',  href: 'https://carlsbergukraine.com/ ' },
    { name: 'KT',  logo: '/partners/KT_Logo-01.png',  href: 'https://carlsbergukraine.com/ ' },
    { name: 'rozmay',  logo: '/partners/Rozmay_Logo-01.jpg',  href: 'https://carlsbergukraine.com/ ' },



  ],
}

export const weAreBest = {
  title: 'We are BEST',
  body: [
    [
      { bold: true, text: 'Ми — BEST (Board of European Students of Technology)' },
      { text: ', міжнародна студентська організація, яка об’єднує студентів технічних університетів усієї Європи.' },
    ],
    [
      { bold: true, text: 'Наша місія — розвиток студентів' },
      {
        text:
          ', тому наше ком’юніті вже багато років сприяє цьому та створює відповідні можливості: інженерні змагання, освітні курси, кар’єрні івенти, фанові вікторини і міжкультурні обміни. Ми допомагаємо вчитися одне одному через командну роботу та практику, щоб ',
      },
      { bold: true, text: 'стати найкращими версіями себе' },
      { text: '.' },
    ],
  ],
  photo: ASSET('team-photo.png'),
}

export const footer = {
  socials: [
    { label: 'LinkedIn', href: 'https://ua.linkedin.com/company/best-kyiv', icon: ASSET('footer-linkedin.png'), width: 62 },
    { label: 'Instagram', href: 'https://www.instagram.com/best_kyiv/', icon: ASSET('footer-instagram.png'), width: 62 },
    { label: 'BEST Kyiv', href: 'https://best.kpi.ua/', icon: ASSET('footer-best.png'), width: 121 },
    { label: 'Telegram', href: 'https://t.me/bestkyiv', icon: ASSET('footer-telegram.png'), width: 62 },
  ],
}

export const kpiLogo = ASSET('kpi-emblem.png')
