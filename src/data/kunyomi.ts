import type { Entry, Submodule } from '../types';

// Module 2 — 訓読み Kunyomi Atlas.
// A place to research the kun'yomi system itself: how big it is, how readings
// cluster into families, and the sound/spelling patterns (okurigana, rendaku).
// Entries here are illustrative concept-cards rather than single vocab words.

export const kunyomiSubmodules: Submodule[] = [
  {
    id: 'families',
    title: 'Root Families',
    titleJa: '語幹',
    description: 'One root, many words — how a single kun reading fans out.',
  },
  {
    id: 'themes',
    title: 'By Theme',
    titleJa: 'テーマ別',
    description: 'Native vocabulary grouped by meaning domain.',
  },
  {
    id: 'patterns',
    title: 'Reading Patterns',
    titleJa: '読みの規則',
    description: 'Okurigana, rendaku, and transitive/intransitive endings.',
  },
];

export const kunyomiEntries: Entry[] = [
  {
    id: 'kun-scale',
    kanji: '訓読み',
    kana: 'くんよみ',
    romaji: "kun'yomi",
    meaning: 'native reading — how big is the system?',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'concept',
    etymology:
      'Of the 2,136 jōyō (everyday-use) kanji, the list assigns roughly 2,000 distinct kun readings (and a similar number of on readings). So the "core" kun system is bounded and learnable — a few thousand readings — even though the underlying native vocabulary (wago) it draws on is open-ended.',
    mnemonic:
      'Think in three tiers: ~2,000 kun readings → a few thousand inflected word-forms → an open sea of native vocabulary.',
    submoduleId: 'families',
  },
  {
    id: 'kun-family-ue',
    kanji: '上',
    kana: 'うえ・あ・のぼ',
    romaji: 'ue / a- / nobo-',
    meaning: 'family: "up" and everything that rises',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'family',
    family: 'ue',
    etymology:
      'One kanji, several kun readings, all clustered around "up": 上 (うえ, "above"), 上がる (あがる, "to rise"), 上げる (あげる, "to raise"), 上る (のぼる, "to climb"). Learn the root once and the family comes nearly free.',
    submoduleId: 'families',
  },
  {
    id: 'kun-okurigana',
    kanji: '送り仮名',
    kana: 'おくりがな',
    romaji: 'okurigana',
    meaning: 'the kana tail after a kanji',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'concept',
    etymology:
      'Kun words carry a kana "tail" (okurigana) that shows inflection: 高い・高さ・高まる all share the kanji 高 but differ in the kana after it. The okurigana tells you where the kanji-root ends and the grammar begins.',
    submoduleId: 'patterns',
  },
  {
    id: 'kun-rendaku',
    kanji: '連濁',
    kana: 'れんだく',
    romaji: 'rendaku',
    meaning: 'sequential voicing in compounds',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'concept',
    etymology:
      'When two native words join, the second often "voices" its first sound: 手 (て te) + 紙 (かみ kami) → 手紙 (てがみ tegami). か→が. This rendaku shift is a hallmark of native (not Sino) compounds.',
    mnemonic: 'Native words soften when they hold hands: kami → -gami.',
    submoduleId: 'patterns',
  },
  {
    id: 'kun-transitivity',
    kanji: '自他',
    kana: 'じた',
    romaji: 'jita',
    meaning: 'intransitive vs. transitive pairs',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'concept',
    etymology:
      'Many native verbs come in pairs sharing a root: 上がる/上げる, 入る/入れる, 出る/出す. The intransitive (it happens) vs. transitive (you do it) distinction is often marked by the okurigana ending (-aru/-eru, -ru/-su).',
    submoduleId: 'patterns',
  },
];
