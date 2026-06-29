import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Entry, NativeFilter } from '../types';
import { MODULES } from '../data/modules';
import { useSettings } from '../context/SettingsContext';
import { matchesFilter } from '../utils/filter';
import page from './Page.module.css';
import styles from './Flashcards.module.css';

// A flashcard drill over any module. Pick a deck, then flip-and-grade each
// card; "Again" re-queues the card so you keep drilling until the deck is
// cleared. The app is a thin viewer over the data files, so the deck is just
// the module's entries filtered by register — no extra content to maintain.

type Direction = 'jp-en' | 'en-jp';
type Phase = 'setup' | 'playing' | 'done';

const ALL_MODULES = '__all__';

function shuffle<T>(items: T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function Flashcards() {
  const { settings } = useSettings();

  // Only modules with content can be drilled.
  const playable = useMemo(() => MODULES.filter((m) => m.entries.length > 0), []);

  const [moduleId, setModuleId] = useState<string>(ALL_MODULES);
  const [filter, setFilter] = useState<NativeFilter>(settings.nativeFilter);
  const [direction, setDirection] = useState<Direction>('jp-en');

  const [phase, setPhase] = useState<Phase>('setup');
  const [queue, setQueue] = useState<Entry[]>([]); // cards still to clear
  const [flipped, setFlipped] = useState(false);
  const [total, setTotal] = useState(0); // unique cards in the round
  const [correct, setCorrect] = useState(0); // cleared cards
  const [missedIds, setMissedIds] = useState<Set<string>>(new Set());

  // The pool of entries matching the current setup — drives the "N cards" hint.
  const pool = useMemo(() => {
    const source =
      moduleId === ALL_MODULES
        ? playable.flatMap((m) => m.entries)
        : (playable.find((m) => m.id === moduleId)?.entries ?? []);
    return source.filter((e) => matchesFilter(e.register, filter));
  }, [playable, moduleId, filter]);

  function start() {
    if (pool.length === 0) return;
    setQueue(shuffle(pool));
    setTotal(pool.length);
    setCorrect(0);
    setMissedIds(new Set());
    setFlipped(false);
    setPhase('playing');
  }

  const current = queue[0];

  function grade(got: boolean) {
    if (!current) return;
    if (got) {
      setCorrect((c) => c + 1);
      const rest = queue.slice(1);
      setQueue(rest);
      if (rest.length === 0) setPhase('done');
    } else {
      // Re-queue near the back so the card comes round again this round.
      setMissedIds((prev) => new Set(prev).add(current.id));
      setQueue((q) => [...q.slice(1), q[0]]);
    }
    setFlipped(false);
  }

  // Keyboard play: Space/Enter flips; 1/← = Again, 2/→ = Got it.
  useEffect(() => {
    if (phase !== 'playing') return;
    function onKey(e: KeyboardEvent) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && (e.key === '1' || e.key === 'ArrowLeft')) {
        grade(false);
      } else if (flipped && (e.key === '2' || e.key === 'ArrowRight')) {
        grade(true);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // grade() is re-created each render but only reads queue/flipped, both listed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, flipped, queue]);

  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>暗記カード</span>
        <h1 className={page.title}>Flashcards</h1>
        <p className={page.lead}>
          Flip-and-grade drill over any module. Cards you miss come back until the deck is
          clear. <Link to="/fun">← back to Fun</Link>
        </p>
      </div>

      {phase === 'setup' && (
        <div className={styles.setup}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>Deck</span>
            <select
              className={styles.select}
              value={moduleId}
              onChange={(e) => setModuleId(e.target.value)}
            >
              <option value={ALL_MODULES}>All modules</option>
              {playable.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.titleJa} · {m.title}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Register</span>
            <select
              className={styles.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value as NativeFilter)}
            >
              <option value="all">All</option>
              <option value="native">Native only (訓)</option>
              <option value="non-native">Non-native (音・外)</option>
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Prompt with</span>
            <select
              className={styles.select}
              value={direction}
              onChange={(e) => setDirection(e.target.value as Direction)}
            >
              <option value="jp-en">Japanese → meaning</option>
              <option value="en-jp">Meaning → Japanese</option>
            </select>
          </label>

          <div className={styles.startRow}>
            <button className={styles.primary} onClick={start} disabled={pool.length === 0}>
              Start · {pool.length} {pool.length === 1 ? 'card' : 'cards'}
            </button>
            {pool.length === 0 && (
              <span className={styles.hint}>No cards match — widen the register.</span>
            )}
          </div>
        </div>
      )}

      {phase === 'playing' && current && (
        <div className={styles.game}>
          <div className={styles.progress}>
            <span>
              {correct} / {total} cleared
            </span>
            <span>{queue.length} left</span>
          </div>

          <button
            className={styles.flashcard}
            onClick={() => setFlipped((f) => !f)}
            aria-label="Flip card"
          >
            {direction === 'jp-en' ? (
              <FrontJp entry={current} flipped={flipped} />
            ) : (
              <FrontEn entry={current} flipped={flipped} />
            )}
            {!flipped && <span className={styles.flipHint}>tap or press Space to flip</span>}
          </button>

          {flipped ? (
            <div className={styles.grades}>
              <button className={styles.again} onClick={() => grade(false)}>
                Again <kbd>1</kbd>
              </button>
              <button className={styles.got} onClick={() => grade(true)}>
                Got it <kbd>2</kbd>
              </button>
            </div>
          ) : (
            <div className={styles.grades}>
              <button className={styles.reveal} onClick={() => setFlipped(true)}>
                Reveal <kbd>Space</kbd>
              </button>
            </div>
          )}
        </div>
      )}

      {phase === 'done' && (
        <div className={styles.summary}>
          <span className={`${styles.summaryJa} jp`}>お疲れさま</span>
          <h2 className={styles.summaryTitle}>Deck cleared</h2>
          <p className={styles.summaryStat}>
            <strong>{total - missedIds.size}</strong> of <strong>{total}</strong> on the first
            try
            <span className={styles.accuracy}>
              {total > 0 ? Math.round(((total - missedIds.size) / total) * 100) : 0}% clean
            </span>
          </p>
          <div className={styles.summaryActions}>
            <button className={styles.primary} onClick={start}>
              Play again
            </button>
            <button className={styles.secondary} onClick={() => setPhase('setup')}>
              Change deck
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FrontJp({ entry, flipped }: { entry: Entry; flipped: boolean }) {
  return (
    <>
      <span className={`${styles.cardKanji} jp`}>{entry.kanji}</span>
      {flipped && (
        <div className={styles.answer}>
          <span className={`${styles.cardKana} jp`}>{entry.kana}</span>
          <span className={styles.cardRomaji}>{entry.romaji}</span>
          <span className={styles.cardMeaning}>{entry.meaning}</span>
          {entry.partOfSpeech && <span className={styles.cardPos}>{entry.partOfSpeech}</span>}
        </div>
      )}
    </>
  );
}

function FrontEn({ entry, flipped }: { entry: Entry; flipped: boolean }) {
  return (
    <>
      <span className={styles.cardPrompt}>{entry.meaning}</span>
      {entry.partOfSpeech && !flipped && (
        <span className={styles.cardPos}>{entry.partOfSpeech}</span>
      )}
      {flipped && (
        <div className={styles.answer}>
          <span className={`${styles.cardKanji} jp`}>{entry.kanji}</span>
          <span className={`${styles.cardKana} jp`}>{entry.kana}</span>
          <span className={styles.cardRomaji}>{entry.romaji}</span>
        </div>
      )}
    </>
  );
}
