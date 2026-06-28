import type { Entry, Module } from '../types';
import { oppositeSubmodules, oppositeEntries } from './opposites';
import { kunyomiSubmodules, kunyomiEntries } from './kunyomi';
import { verbSubmodules, verbEntries } from './verbs';
import { adjectiveSubmodules, adjectiveEntries } from './adjectives';
import { numberSubmodules, numberEntries } from './numbers';
import { natureSubmodules, natureEntries } from './nature';

// The single source of truth. Pages and components look modules up by id, so
// growing the collection means editing the per-topic data files above — no
// component changes required.

export const MODULES: Module[] = [
  {
    id: 'opposites',
    title: 'Opposite Pairs',
    titleJa: '対義語',
    description: 'The native readings for the most common opposite pairs.',
    intro:
      'The flagship collection: learn high/low, in/out, big/small and the rest in their original native (kun) forms. Each pair is linked so you can study both halves together.',
    submodules: oppositeSubmodules,
    entries: oppositeEntries,
    defaultOnHome: true,
  },
  {
    id: 'kunyomi',
    title: 'Kunyomi Atlas',
    titleJa: '訓読み',
    description: 'Research the kun-reading system itself — its size, families, and patterns.',
    intro:
      'How big is kunyomi, and how does it hang together? Browse the system: root families, sound patterns (okurigana, rendaku), and transitive/intransitive pairs.',
    submodules: kunyomiSubmodules,
    entries: kunyomiEntries,
    defaultOnHome: true,
  },
  {
    id: 'verbs',
    title: 'Core Native Verbs',
    titleJa: '基本動詞',
    description: 'The most common yamato-kotoba verbs, with their root families.',
    intro:
      'High-frequency native verbs. Watch how kun verbs cluster into families: 上がる/上げる, 出る/出す — learn one root and the rest follow.',
    submodules: verbSubmodules,
    entries: verbEntries,
    defaultOnHome: true,
  },
  {
    id: 'adjectives',
    title: 'Native Adjectives',
    titleJa: 'い形容詞',
    description: 'Common い-adjectives — nearly all native/kun.',
    submodules: adjectiveSubmodules,
    entries: adjectiveEntries,
  },
  {
    id: 'numbers',
    title: 'Numbers & Counters',
    titleJa: '数詞',
    description: 'Native counting vs. Sino-Japanese — the split made visible.',
    submodules: numberSubmodules,
    entries: numberEntries,
  },
  {
    id: 'nature',
    title: 'Nature & Time',
    titleJa: '自然と時',
    description: 'Ancient core words for land, sky, and time.',
    submodules: natureSubmodules,
    entries: natureEntries,
  },
];

export const DEFAULT_HOME_MODULE_IDS = MODULES.filter((m) => m.defaultOnHome).map((m) => m.id);

export function getModule(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

/** Group a module's entries by submodule, preserving submodule order. */
export function groupBySubmodule(module: Module): { submoduleId: string; title: string; titleJa?: string; description?: string; entries: Entry[] }[] {
  return module.submodules.map((sub) => ({
    submoduleId: sub.id,
    title: sub.title,
    titleJa: sub.titleJa,
    description: sub.description,
    entries: module.entries.filter((e) => e.submoduleId === sub.id),
  }));
}
