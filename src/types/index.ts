// Core domain model for the nihongo collection.
// The app is a thin viewer over these data structures — growing the
// collection means editing the data/ files, not the components.

/**
 * The vocabulary register. This is the backbone of the "native" filter:
 *  - native: 和語 (wago) / yamato-kotoba — original Japanese words, read with kun'yomi.
 *  - sino:   漢語 (kango) — borrowed from Chinese, read with on'yomi.
 *  - loan:   外来語 (gairaigo) — modern loanwords, usually written in katakana.
 */
export type Register = 'native' | 'sino' | 'loan';

/** How a kanji is read in a given word. */
export type Reading = 'kun' | 'on' | 'mixed';

/** How readings are surfaced on a card (user-configurable in Settings). */
export type ReadingDisplay = 'toggle' | 'kana-romaji' | 'kana-only';

/** The native/non-native filter applied to entry lists. */
export type NativeFilter = 'all' | 'native' | 'non-native';

export interface Example {
  ja: string; // sentence in mixed kanji/kana
  kana: string; // full reading
  en: string; // English gloss
}

export interface Entry {
  id: string;
  kanji: string; // e.g. 高い
  kana: string; // e.g. たかい
  romaji: string; // e.g. takai
  meaning: string; // English meaning
  register: Register; // powers the native filter
  reading: Reading;
  partOfSpeech?: string; // e.g. "i-adjective", "godan verb"
  etymology?: string; // origin / roots notes — aids retention
  family?: string; // shared-root key, links e.g. 上がる・上げる・上
  mnemonic?: string; // a memory hook
  examples?: Example[];
  pairId?: string; // links the two halves of an opposite pair
  submoduleId: string; // which submodule this entry lives under
}

export interface Submodule {
  id: string;
  title: string;
  titleJa?: string;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  /** Longer note shown at the top of the module's research page. */
  intro?: string;
  submodules: Submodule[];
  entries: Entry[];
  defaultOnHome?: boolean;
}

export interface Settings {
  /** Which modules render on the Home page (order preserved). */
  homeModuleIds: string[];
  readingDisplay: ReadingDisplay;
  nativeFilter: NativeFilter;
}
