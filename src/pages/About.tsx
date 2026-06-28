import page from './Page.module.css';
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>このサイトについて</span>
        <h1 className={page.title}>About</h1>
        <p className={page.lead}>
          A personal, kunyomi-first way into Japanese — built around the original native
          layer of the language.
        </p>
      </div>

      <section className={styles.prose}>
        <h2>The idea: learn the native layer first</h2>
        <p>
          Japanese vocabulary comes in three registers, and this site is organised around
          them. The distinction is the whole point of the <strong>native filter</strong>.
        </p>

        <div className={styles.cards}>
          <div className={`${styles.regCard} ${styles.native}`}>
            <span className={`${styles.regJa} jp`}>和語</span>
            <h3>Native — wago</h3>
            <p>
              The original words of the islands, read with <strong>kun’yomi</strong>.
              <span className="jp"> 高い (takai), 山 (yama), 行く (iku).</span> This is the
              site’s focus.
            </p>
          </div>
          <div className={`${styles.regCard} ${styles.sino}`}>
            <span className={`${styles.regJa} jp`}>漢語</span>
            <h3>Sino — kango</h3>
            <p>
              Borrowed from Chinese over centuries, read with <strong>on’yomi</strong>.
              <span className="jp"> 高校 (kōkō), 山脈 (sanmyaku).</span> Your “non-native”.
            </p>
          </div>
          <div className={`${styles.regCard} ${styles.loan}`}>
            <span className={`${styles.regJa} jp`}>外来語</span>
            <h3>Loan — gairaigo</h3>
            <p>
              Modern loanwords, usually written in katakana.
              <span className="jp"> テレビ, コーヒー.</span> Also “non-native”.
            </p>
          </div>
        </div>

        <p className={styles.note}>
          One small clarification: <em>hiragana</em> is a writing <em>script</em>, not the
          native language itself. Native words are simply <em>written</em> in hiragana when
          not in kanji. The real native/non-native line is <strong>kun vs. on</strong> —
          which is exactly what the filter toggles.
        </p>

        <h2>How big is the kunyomi system?</h2>
        <p>Honestly answered in three tiers, smallest to largest:</p>
        <ol>
          <li>
            <strong>Core readings:</strong> the 2,136 everyday-use (jōyō) kanji carry
            roughly <strong>~2,000 distinct kun readings</strong>. Bounded and learnable.
          </li>
          <li>
            <strong>Word-forms:</strong> those readings inflect with okurigana
            (<span className="jp">高い・高さ・高まる</span>) and cluster into a few thousand
            forms — but they group into <em>families</em>, which is the cheap way to learn
            them.
          </li>
          <li>
            <strong>The full native lexicon:</strong> open-ended, tens of thousands. Nobody
            “finishes” it; you absorb it.
          </li>
        </ol>
        <p>
          For the goal here — ~100 opposite pairs plus common native words at around N5 —
          that’s only a few hundred high-frequency words. Very doable.
        </p>

        <h2>Built for retention</h2>
        <p>
          Each entry can carry its <strong>etymology and roots</strong>, a shared{' '}
          <strong>family</strong> key that links relatives
          (<span className="jp">上がる・上げる</span>), a memory <strong>hook</strong>, and
          example sentences — the connective tissue that makes a word stick well enough to
          eventually <em>say</em> and <em>hear</em> it.
        </p>
      </section>
    </div>
  );
}
