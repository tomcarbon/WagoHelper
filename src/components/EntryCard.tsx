import { useState } from 'react';
import type { Entry, Register } from '../types';
import { useSettings } from '../context/SettingsContext';
import styles from './EntryCard.module.css';

const REGISTER_LABEL: Record<Register, string> = {
  native: '訓 native',
  sino: '音 sino',
  loan: '外 loan',
};

const REGISTER_CLASS: Record<Register, string> = {
  native: styles.native,
  sino: styles.sino,
  loan: styles.loan,
};

export default function EntryCard({ entry }: { entry: Entry }) {
  const { settings } = useSettings();
  const mode = settings.readingDisplay;

  // 'toggle' mode hides romaji until the user reveals it. The other two modes
  // are wired in but render simply for now (see Settings).
  const [revealed, setRevealed] = useState(false);
  const showRomaji =
    mode === 'kana-romaji' || (mode === 'toggle' && revealed);
  const canReveal = mode === 'toggle' && Boolean(entry.romaji);

  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <div className={styles.lead}>
          <span className={`${styles.kanji} jp`}>{entry.kanji}</span>
          <span className={`${styles.kana} jp`}>{entry.kana}</span>
        </div>
        <span className={`${styles.badge} ${REGISTER_CLASS[entry.register]}`}>
          {REGISTER_LABEL[entry.register]}
        </span>
      </header>

      <div className={styles.meaning}>{entry.meaning}</div>

      <div className={styles.romajiRow}>
        {showRomaji ? (
          <span className={styles.romaji}>{entry.romaji}</span>
        ) : canReveal ? (
          <button className={styles.reveal} onClick={() => setRevealed(true)}>
            reveal rōmaji
          </button>
        ) : null}
        {entry.partOfSpeech && <span className={styles.pos}>{entry.partOfSpeech}</span>}
      </div>

      {entry.etymology && (
        <p className={styles.note}>
          <span className={styles.noteLabel}>Roots</span>
          {entry.etymology}
        </p>
      )}

      {entry.mnemonic && (
        <p className={styles.note}>
          <span className={styles.noteLabel}>Hook</span>
          {entry.mnemonic}
        </p>
      )}

      {entry.examples && entry.examples.length > 0 && (
        <ul className={styles.examples}>
          {entry.examples.map((ex, i) => (
            <li key={i}>
              <span className="jp">{ex.ja}</span>{' '}
              <span className={`${styles.exKana} jp`}>（{ex.kana}）</span>
              <span className={styles.exEn}>{ex.en}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.footer}>
        {entry.family && <span className={styles.tag}>family: {entry.family}</span>}
        {entry.pairId && <span className={styles.tag}>pair: {entry.pairId}</span>}
      </div>
    </article>
  );
}
