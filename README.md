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


## Технології

- React 18 + Vite
- Tailwind CSS
- Nginx (для продакшн-контейнера)
