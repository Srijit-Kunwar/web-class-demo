# Next.js E-Commerce Demo — Class Reference

A small, complete Next.js project used as a **reference example** in class. It is deliberately
kept simple so you can read every file and understand how the pieces fit together.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · shadcn/ui

---

## What it demonstrates

| Concept | Where to look |
| --- | --- |
| App Router & layouts | `app/layout.js` |
| Server Components (async, no `"use client"`) | `app/page.js` |
| Dynamic routes | `app/products/[productId]/page.js`, `app/categories/[category-slug]/page.js` |
| Data fetching & parallel requests (`Promise.all`) | `app/page.js`, `lib/api/products.js` |
| Reusable components | `components/` |
| UI primitives (shadcn/ui) | `components/ui/button.jsx` |
| Tailwind CSS 4 | `app/globals.css` |
| `@/` path alias | `jsconfig.json` |

## Project structure

```
app/
  layout.js                    # root layout, header + global styles
  page.js                      # home: featured products + categories
  about/page.js
  products/page.js             # all products
  products/[productId]/page.js # single product (dynamic segment)
  categories/page.js
  categories/[category-slug]/page.js
components/
  layout/header.js
  home/Categories.js
  home/FeaturedProducts.js
  product/allProducts.js
  product/productCard.js
  ui/button.jsx                # shadcn/ui button
lib/
  api/products.js              # all data fetching lives here
  utils.js                     # cn() class-name helper
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Data source

This project uses the free public API **[dummyjson.com](https://dummyjson.com)** — no API key,
no account, no setup. All requests are made from the server in `lib/api/products.js`, so the
data is fetched before the page is sent to the browser.

## Notes for students

- There is **no `.env` file and no secret** anywhere in this project. If you later add a real API
  key, put it in `.env.local` (already git-ignored) and read it with `process.env`.
- The `app/` folder is a **Server Component** by default. Add `"use client"` only when you need
  state, event handlers, or browser APIs.
- `node_modules/` and `.next/` are git-ignored, so run `npm install` first after cloning.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
