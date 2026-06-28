import type { Entry, Submodule } from '../types';

// Module 3 — Core Native Verbs (基本動詞). Populated first.
// These are yamato-kotoba verbs read with kun'yomi (register: 'native').
// Several share a root "family" to demonstrate how kun readings cluster:
// transitive/intransitive pairs and okurigana variants reuse one root.

export const verbSubmodules: Submodule[] = [
  {
    id: 'motion',
    title: 'Motion & Movement',
    titleJa: '移動',
    description: 'Going, coming, entering, leaving, rising, falling.',
  },
  {
    id: 'perception',
    title: 'Perception & Mind',
    titleJa: '知覚・思考',
    description: 'Seeing, hearing, knowing, thinking, saying.',
  },
  {
    id: 'change',
    title: 'Change of State',
    titleJa: '変化',
    description: 'Transitive/intransitive pairs — raising vs. rising, etc.',
  },
];

export const verbEntries: Entry[] = [
  // --- Motion ---
  {
    id: 'verb-iku',
    kanji: '行く',
    kana: 'いく',
    romaji: 'iku',
    meaning: 'to go',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'iku',
    etymology:
      'Ancient native verb. The same kanji 行 also reads おこなう (okonau, "to carry out"); the kun reading いく is the core "go" sense.',
    mnemonic: 'い-く — "ee, ku!" you go.',
    examples: [
      { ja: '学校へ行く', kana: 'がっこうへいく', en: 'I go to school.' },
    ],
    submoduleId: 'motion',
  },
  {
    id: 'verb-kuru',
    kanji: '来る',
    kana: 'くる',
    romaji: 'kuru',
    meaning: 'to come',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'irregular verb',
    family: 'kuru',
    etymology:
      'One of only two irregular verbs in Japanese. Conjugates unpredictably: 来る・来ます・来ない (kuru/kimasu/konai).',
    mnemonic: 'The "come" verb that comes out differently every time.',
    examples: [
      { ja: '友達が来る', kana: 'ともだちがくる', en: 'A friend is coming.' },
    ],
    submoduleId: 'motion',
  },
  {
    id: 'verb-hairu',
    kanji: '入る',
    kana: 'はいる',
    romaji: 'hairu',
    meaning: 'to enter (intransitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'hairu-ireru',
    etymology:
      'Pairs with 入れる (いれる, ireru) "to put in". Same kanji 入, two kun readings: はいる (something enters) vs. いれる (you put something in).',
    examples: [
      { ja: '部屋に入る', kana: 'へやにはいる', en: 'I enter the room.' },
    ],
    submoduleId: 'motion',
  },
  {
    id: 'verb-ireru',
    kanji: '入れる',
    kana: 'いれる',
    romaji: 'ireru',
    meaning: 'to put in (transitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'ichidan verb',
    family: 'hairu-ireru',
    etymology: 'Transitive partner of 入る (はいる). You いれる something; it はいる.',
    examples: [
      { ja: 'かばんに入れる', kana: 'かばんにいれる', en: 'I put it in the bag.' },
    ],
    submoduleId: 'motion',
  },

  // --- Perception & Mind ---
  {
    id: 'verb-miru',
    kanji: '見る',
    kana: 'みる',
    romaji: 'miru',
    meaning: 'to see, to look',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'ichidan verb',
    family: 'miru',
    etymology:
      'Root み- also appears in 見える (みえる, "to be visible") and 見せる (みせる, "to show") — a perception family.',
    examples: [
      { ja: '映画を見る', kana: 'えいがをみる', en: 'I watch a movie.' },
    ],
    submoduleId: 'perception',
  },
  {
    id: 'verb-kiku',
    kanji: '聞く',
    kana: 'きく',
    romaji: 'kiku',
    meaning: 'to hear, to listen, to ask',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'kiku',
    etymology:
      'One verb covers both "listen" and "ask" — context decides. 聞こえる (きこえる) is the intransitive "to be audible".',
    examples: [
      { ja: '音楽を聞く', kana: 'おんがくをきく', en: 'I listen to music.' },
    ],
    submoduleId: 'perception',
  },
  {
    id: 'verb-wakaru',
    kanji: '分かる',
    kana: 'わかる',
    romaji: 'wakaru',
    meaning: 'to understand',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'wakaru-wakeru',
    etymology:
      'Literally "to be divided/sorted out" — from 分ける (わける, "to divide"). To understand is for things to fall into place.',
    mnemonic: 'When ideas are sorted (分), you わかる.',
    examples: [
      { ja: '日本語が分かる', kana: 'にほんごがわかる', en: 'I understand Japanese.' },
    ],
    submoduleId: 'perception',
  },
  {
    id: 'verb-iu',
    kanji: '言う',
    kana: 'いう',
    romaji: 'iu',
    meaning: 'to say',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'iu',
    etymology: 'Often pronounced ゆう (yuu) in speech though written いう.',
    examples: [
      { ja: '名前を言う', kana: 'なまえをいう', en: 'I say my name.' },
    ],
    submoduleId: 'perception',
  },
  {
    id: 'verb-taberu',
    kanji: '食べる',
    kana: 'たべる',
    romaji: 'taberu',
    meaning: 'to eat',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'ichidan verb',
    family: 'taberu',
    etymology:
      'Kun reading of 食. The same kanji has the on reading しょく (shoku) in compounds like 食事 (しょくじ, "a meal") — a neat native/sino contrast on one character.',
    examples: [
      { ja: 'ご飯を食べる', kana: 'ごはんをたべる', en: 'I eat rice / a meal.' },
    ],
    submoduleId: 'perception',
  },

  // --- Change of State (transitive / intransitive pairs) ---
  {
    id: 'verb-agaru',
    kanji: '上がる',
    kana: 'あがる',
    romaji: 'agaru',
    meaning: 'to rise, to go up (intransitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (u)',
    family: 'ue',
    etymology:
      'Built on the root 上 (うえ/あ-, "up"). Intransitive: something rises by itself. Sibling of 上げる (あげる).',
    examples: [
      { ja: '値段が上がる', kana: 'ねだんがあがる', en: 'The price goes up.' },
    ],
    submoduleId: 'change',
  },
  {
    id: 'verb-ageru',
    kanji: '上げる',
    kana: 'あげる',
    romaji: 'ageru',
    meaning: 'to raise, to give (transitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'ichidan verb',
    family: 'ue',
    etymology:
      'Transitive partner of 上がる. You あげる something (raise it); it あがる (rises). The -eru ending often marks the transitive verb of a pair.',
    examples: [
      { ja: '手を上げる', kana: 'てをあげる', en: 'I raise my hand.' },
    ],
    submoduleId: 'change',
  },
  {
    id: 'verb-deru',
    kanji: '出る',
    kana: 'でる',
    romaji: 'deru',
    meaning: 'to exit, to come out (intransitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'ichidan verb',
    family: 'deru-dasu',
    etymology: 'Root で-. Pairs with 出す (だす, "to take/put out", transitive).',
    examples: [
      { ja: '家を出る', kana: 'いえをでる', en: 'I leave the house.' },
    ],
    submoduleId: 'change',
  },
  {
    id: 'verb-dasu',
    kanji: '出す',
    kana: 'だす',
    romaji: 'dasu',
    meaning: 'to take out, to put out (transitive)',
    register: 'native',
    reading: 'kun',
    partOfSpeech: 'godan verb (su)',
    family: 'deru-dasu',
    etymology:
      'Transitive partner of 出る. The -su ending is a classic transitive marker (出る→出す, 起きる→起こす).',
    examples: [
      { ja: '手紙を出す', kana: 'てがみをだす', en: 'I send (put out) a letter.' },
    ],
    submoduleId: 'change',
  },
];
