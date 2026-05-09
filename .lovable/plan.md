## Goal

Add a theme switcher button at the top of the homepage that toggles between the current **Orange & White** scheme and the previous **Deep Night Blue** scheme.

## Behavior

- Default theme on first visit: current Orange & White (unchanged for existing visitors).
- Button placement: top-right of the header on `/`, visible on mobile and desktop.
- Click toggles between the two themes; choice persists in `localStorage` so it survives reloads.
- Smooth color transition (no flash).
- Icon + short label (e.g. sun/moon style icon, label "Night" / "Day"). No dropdown — just a single toggle.

## What gets built

**`src/styles.css`**
- Keep current `:root` tokens as the Orange & White theme (default).
- Add a `.theme-night` class that overrides the same tokens with the previous deep-night-blue palette (background, foreground, primary, secondary, accent, card, sidebar, gradient + shadow tokens).
- Both themes already exist in history — night palette will be restored from the pre-orange version.

**`src/components/ThemeToggle.tsx`** (new)
- Small client component. Reads `localStorage.theme` on mount, applies/removes `theme-night` class on `<html>`.
- Guards against SSR hydration mismatch by only reading localStorage inside `useEffect` (server renders default; class is applied post-hydration).
- Button uses existing design tokens so it restyles itself in both themes.

**`src/routes/index.tsx`**
- Mount `<ThemeToggle />` in the existing top header bar (top-right of the masthead row).

## Out of scope

- System-preference auto-detect (can add later if you want).
- Per-section theme overrides.
- Toggle on routes other than `/` (only home for now, as requested).
