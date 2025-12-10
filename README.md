# Movie Browser

> A small responsive React application that lets you discover and search movies using The Movie Database (TMDB) API, save favourites to localStorage, and browse results with server-driven pagination. Built with Vite, React 19, Tailwind CSS and Flowbite React components.

---

## Highlights

- Discover popular movies (server-driven) and paginate through results.
- Search movies with paginated search results.
- Save / remove favourite movies; favourites persist in browser localStorage.
- Responsive grid layout with consistent card heights and title clamping.
- UI built with Tailwind CSS and Flowbite React components.

## Project status

This is a learning project. It is functional but intentionally small — suitable for experimentation and extension.

## Tech stack

- React 19 (Vite)
- Tailwind CSS
- Flowbite & flowbite-react (UI components)
- react-router-dom for routing
- react-icons
- TMDB API as the data source

## Project structure (important files)

- `src/` — application source
  - `API/api.js` — TMDB API helper (discover & search endpoints, pagination)
  - `components/` — UI components (MovieCard, Home, Favourite, NavBar, ReactToast)
  - `contexts/MovieContext.jsx` — favourites state and localStorage persistence
  - `main.jsx`, `App.jsx` — app bootstrap and routing

## Environment & API key

This project uses The Movie Database (TMDB) API. A (demo) API key may be present in `src/API/api.js` for convenience during learning. For production or to avoid committing secrets, replace the hard-coded key with an environment variable.

Recommended (Vite) approach:

1. Create a file at the project root named `.env` or `.env.local`.
2. Add your key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

3. Update `src/API/api.js` to read from `import.meta.env.VITE_TMDB_API_KEY` instead of a hard-coded string. Restart the dev server after changes.

Note: Do not commit `.env` to version control.

## Run locally (Windows PowerShell)

Clone or open the project in your workspace, then run:

```powershell
cd d:\learning\project02
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`) in your browser.

Build for production:

```powershell
npm run build
npm run preview
```

## Behaviour & UX details

- Pagination: The app uses TMDB's server-side pagination. The Home page and Search both fetch a specific `page` from the API and render Prev / numbered / Next controls.
- Favourites: Adding a movie stores the full movie object to localStorage under the `favourite` key via `MovieContext`. On mount the context reads and validates the stored value; malformed or non-array values are cleared.
- Card layout: Movie cards are fixed-height (image crop + content area) and titles are clamped to two lines so controls (rating, button) align across a grid row.

## Troubleshooting

- Flowbite / Tailwind issues: If Flowbite components (Toast, etc.) throw import errors or styles don't appear, ensure the `flowbite` and `flowbite-react` packages are installed (`npm install flowbite flowbite-react`) and that `tailwind.config.js` includes Flowbite in `content` and `plugins` (see `tailwind.config.js`). Also ensure `src/index.css` imports Tailwind and Flowbite.
- LocalStorage clearing on refresh: If favourites seem to reset after refresh, confirm the browser's localStorage (`Application` → `Local Storage`) and check for console warnings about malformed JSON — the context will clear invalid values and log a warning.
- API errors / rate limits: Check the browser console & Network tab for HTTP status codes. TMDB enforces rate limits and will return error responses when exceeded.

## Customization & Next steps

- Replace the quick demo API key with a Vite environment variable (`VITE_TMDB_API_KEY`).
- Improve pagination UI (first/last buttons, ellipses) or switch to infinite scroll.
- Add unit/integration tests (Jest + React Testing Library).
- Add user authentication and server-side storage for favourites.

## Contribution

This repository is a learning/demo project — contributions are welcome. Open an issue or submit a pull request with small, well-scoped changes. Keep changes consistent with the existing styling and project conventions.

## License

This project is provided for learning purposes. Use and adapt as you like. If you plan to publish or distribute, consider adding a short license file (e.g., MIT).

---

## Quick env example

To avoid committing API keys, create a `.env` file at the project root and add your TMDB key. Here's an example you can copy from `.env.example`:

```env
# .env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

After creating `.env`, restart the dev server. The recommended next step is to update `src/API/api.js` to read the key from `import.meta.env.VITE_TMDB_API_KEY` instead of a hard-coded string.

## Acknowledgements

- The Movie Database (TMDB) for providing a rich movie API used in this demo.
- Flowbite for the component library and examples.

## Contact / Follow-up

If you want changes (switch to infinite scroll, add authentication, or persist favourites to a backend), open an issue or drop a note in the repository description and I can help implement the next steps.
