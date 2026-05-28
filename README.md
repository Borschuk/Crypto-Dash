# Crypto-Dash

Crypto-Dash is a React single-page application for tracking cryptocurrency market data from CoinGecko. It provides a fast dashboard view with filtering, sorting, and coin detail pages with charts.

## Implemented features

- Routing with `BrowserRouter`, `Routes`, and dynamic route params:
  - Home: `/`
  - About: `/about`
  - Coin details: `/coin/:id`
  - Not found fallback: `*`
- Real-time crypto market list fetched from CoinGecko.
- Coin detail page with additional market stats and external links.
- 7-day line chart for each coin using `react-chartjs-2` + `chart.js`.
- Client-side search/filter by coin name or symbol.
- Client-side sorting:
  - Market cap (asc/desc)
  - Price (asc/desc)
  - 24h change (asc/desc)
- Top N selector (5/10/20/50/100 coins).
- Dedicated loading spinner and error handling UI.

## Tech stack

- React 19
- Vite 8
- React Router 7 (`react-router`)
- Chart.js 4 + `react-chartjs-2`
- `chartjs-adapter-date-fns` + `date-fns`
- `react-spinners`
- ESLint 9

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create or update `.env` in the project root:

```bash
VITE_COINS_API_URL='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
VITE_COIN_API_URL='https://api.coingecko.com/api/v3/coins'
```

### 3) Start backend/API

This project does not include a custom backend. It consumes the public CoinGecko API directly from the frontend.

### 4) Start frontend

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

- `npm run dev` - Start the Vite development server.
- `npm run build` - Create a production build.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint checks.

## Project structure

```text
src/
  components/
    CoinCard.jsx
    CoinChart.jsx
    FilterInput.jsx
    Header.jsx
    LimitSelector.jsx
    SortSelector.jsx
    Spinner.jsx
  pages/
    home.jsx
    coins-details.jsx
    about.jsx
    not-found.jsx
  App.jsx
  main.jsx
  index.css
```

Key paths:

- App entry and router setup: `src/main.jsx`, `src/App.jsx`
- Pages: `src/pages`
- Reusable UI and chart components: `src/components`
- Global styling: `src/index.css`

## Usage example

```bash
# 1) Install and run
npm install
npm run dev
```

Example flow in the app:

1. Open `/` and browse top coins.
2. Use filter input to search by name/symbol.
3. Change sorting and coin limit.
4. Click a coin card to open `/coin/:id` details and chart.

```bash
npm run lint
npm run build
```
