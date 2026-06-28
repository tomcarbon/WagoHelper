import type { Entry, Submodule } from '../types';

// Module 5 — Numbers & Counters. Scaffold only; populate later.
// A vivid demonstration of the native/non-native split: native counting
// (ひとつ・ふたつ…) sits alongside Sino-Japanese (いち・に・さん…).

export const numberSubmodules: Submodule[] = [
  { id: 'native-count', title: 'Native Counting', titleJa: '和語数詞', description: 'ひとつ, ふたつ, みっつ…' },
  { id: 'sino-count', title: 'Sino Counting', titleJa: '漢数詞', description: 'いち, に, さん… (for contrast).' },
  { id: 'counters', title: 'Counters', titleJa: '助数詞', description: '〜つ, 〜人, 〜本, 〜枚…' },
];

export const numberEntries: Entry[] = [];
