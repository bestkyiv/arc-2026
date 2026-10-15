# ARC — Assemble Research Competition

Односторінковий сайт, зібраний з макета у Figma (React + Vite + Tailwind CSS).

## Запуск локально (без Docker)

Потрібен Node.js 18+ (для вбудованого `fetch` у скрипті завантаження).

```bash
npm install
npm run fetch-assets   # завантажує фото/лого/форми з Figma у public/figma-assets/
npm run dev
```

Сайт буде на http://localhost:5173

## Запуск у Docker

Асети завантажуються автоматично під час `docker build` (потрібен інтернет
на машині, де збираєш образ):

```bash
docker compose up --build
```

Сайт буде на http://localhost:8080

Або без compose:

```bash
docker build -t arc-site .
docker run -p 8080:80 arc-site
```

## Структура

```
scripts/
  fetch-figma-assets.mjs  # завантажує фото/лого/банери з Figma (Node.js, крос-платформний)
src/
  data.js              # весь текстовий контент + шляхи до фото
  figmaAssets.js        # шляхи до фонів фігурних елементів (банери, маски)
  components/          # по одному файлу на секцію сторінки
  App.jsx              # порядок секцій на сторінці
public/
  fonts/               # Antique Olive Bold (реальний файл шрифту)
  figma-assets/         # сюди скрипт кладе завантажені зображення (порожньо в репо)
```

## ⚠️ Посилання на Figma-асети — тимчасові

`scripts/fetch-figma-assets.mjs` тягне файли з
`https://www.figma.com/api/mcp/asset/...` — це посилання, які Figma видає
на кілька годин, не назавжди. **Якщо не запустити скрипт найближчим часом,
вони протухнуть** і завантаження впаде з помилкою 403/404 (скрипт про це
напише в консоль, але не зупинить збірку).

Якщо це сталося:
1. Відкрий потрібний фрейм/шар у Figma desktop.
2. Експортуй його вручну (Export → PNG/SVG).
3. Поклади файл у `public/figma-assets/` з тим самим іменем, яке очікує
   скрипт (див. список імен усередині `scripts/fetch-figma-assets.mjs`).

## Що варто доробити

1. **Категорії** (`src/data.js` → `categories`) — у макеті всі три бейджі
   підписані однаково "Mil-tech" (це не остаточні назви категорій). Онови
   `categories.items` реальними назвами треків.
2. **FAQ** (`src/data.js` → `faq`) — у макеті є лише 6 питань без відповідей.
   Додай текст відповідей у `src/components/Faq.jsx`.
3. **Партнери** (`src/components/Partners.jsx`) — у макеті замість реальних
   партнерів стоять чужі логотипи (Lamborghini, Ferrari, Adidas, NASA, Red
   Bull, Heineken) як приклад дизайну. Я навмисно не відтворював ці товарні
   знаки — зараз там нейтральні плейсхолдери. Постав справжні лого партнерів
   у `public/partners/` і підключи їх замість `PlaceholderLogo`.
4. **Кнопка Registration** зараз веде на секцію "Conditions for
   participation" (`#register`). Заміни `href` у `src/components/Hero.jsx`
   на реальне посилання (Google Form / Tally / інше).
5. Соцмережі у футері (`src/data.js` → `footer.socials`) мають порожні
   посилання `href="#"` — онови на реальні профілі.

## Технології

- React 18 + Vite
- Tailwind CSS
- Nginx (для продакшн-контейнера)
