# nihongo 日本語

A personal, **kunyomi-first** collection for learning Japanese — built around the native
(和語 / kun'yomi) layer of the language.

## Why

The motivating goal: learn the **native readings** for the ~100 most common **opposite
pairs** (high/low, in/out, proud/humble…), with etymology, roots, and word-families to
aid retention toward eventually speaking and hearing it.

The key design idea: the "native vs. non-native" distinction maps exactly onto Japanese's
**wago (kun'yomi)** vs. **kango (on'yomi)** split (with **gairaigo** loanwords as a third
register). A single `register` field on each entry powers the native filter. See the
**About** page in the app for the full explainer.

## Stack

Vite + React + TypeScript, React Router, plain CSS Modules. No CSS framework. The app is a
thin viewer over data files — content lives in `src/data/`.

## Run

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Structure

```
src/
  types/        domain model (Entry, Module, Settings…)
  data/         the collection — one file per module + modules.ts registry
  context/      SettingsContext (localStorage-backed preferences)
  components/   Layout, Nav, ModuleCard, ModuleView, EntryCard, FilterBar
  pages/        Home, Research, ModulePage, Fun, Flashcards, Settings, About
  styles/       global.css (theme variables, JP font stack)
```

## Modules

1. **対義語 Opposite Pairs** — the flagship (seeded with ~10 pairs).
2. **訓読み Kunyomi Atlas** — research the kun system itself (size, families, patterns).
3. **Core Native Verbs** — high-frequency native verbs with root families (populated first).
4. **Native Adjectives** — scaffold.
5. **Numbers & Counters** — scaffold.
6. **Nature & Time** — scaffold.

Home shows 3 modules by default; configure which (and the reading-display + native-filter
defaults) in **Settings**. Preferences persist in `localStorage`.

## Adding content

Edit the relevant file in `src/data/` (e.g. `verbs.ts`) and add `Entry` objects. No
component changes needed — every page reads from the `MODULES` registry in
`src/data/modules.ts`.

### Entry fields

`kanji`, `kana`, `romaji`, `meaning`, `register` (`native`|`sino`|`loan`), `reading`
(`kun`|`on`|`mixed`), `submoduleId`, plus optional `etymology`, `family` (shared-root key),
`mnemonic`, `examples`, `pairId` (links opposite pairs).
