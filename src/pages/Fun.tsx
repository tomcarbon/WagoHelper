import { Link } from 'react-router-dom';
import page from './Page.module.css';
import styles from './Fun.module.css';

// The games hub. Each game is a thin layer over the same data the Research
// pages read, so adding one means adding a route + a card here.
const GAMES = [
  {
    to: '/fun/flashcards',
    titleJa: '暗記カード',
    title: 'Flashcards',
    blurb:
      'Flip-and-grade drill over any module. Choose a deck and direction; missed cards come back until you clear them.',
    ready: true,
  },
  {
    titleJa: '神経衰弱',
    title: 'Pair Match',
    blurb: 'Match the two halves of each opposite pair against the clock.',
    ready: false,
  },
  {
    titleJa: '聞き取り',
    title: 'Listening',
    blurb: 'Hear a word, pick its meaning — once audio lands.',
    ready: false,
  },
];

export default function Fun() {
  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>遊び</span>
        <h1 className={page.title}>Fun</h1>
        <p className={page.lead}>
          The playground — quizzes and games built on top of your collection, to turn
          reading into speaking and hearing.
        </p>
      </div>

      <div className={styles.grid}>
        {GAMES.map((g) =>
          g.ready && g.to ? (
            <Link key={g.title} to={g.to} className={styles.card}>
              <span className={`${styles.cardJa} jp`}>{g.titleJa}</span>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardBlurb}>{g.blurb}</p>
              <span className={styles.play}>Play →</span>
            </Link>
          ) : (
            <div key={g.title} className={`${styles.card} ${styles.disabled}`}>
              <span className={`${styles.cardJa} jp`}>{g.titleJa}</span>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardBlurb}>{g.blurb}</p>
              <span className={styles.soon}>Coming soon</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
