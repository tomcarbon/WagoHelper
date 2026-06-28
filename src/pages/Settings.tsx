import type { NativeFilter, ReadingDisplay } from '../types';
import { useSettings } from '../context/SettingsContext';
import { MODULES } from '../data/modules';
import page from './Page.module.css';
import styles from './Settings.module.css';

const READING_OPTIONS: { value: ReadingDisplay; label: string; note: string; ready: boolean }[] = [
  {
    value: 'toggle',
    label: 'Toggle per card',
    note: 'Show kana; reveal rōmaji on tap. Best for active recall.',
    ready: true,
  },
  {
    value: 'kana-romaji',
    label: 'Kana + rōmaji always',
    note: 'Both shown together — easiest while starting out.',
    ready: true,
  },
  {
    value: 'kana-only',
    label: 'Kana only',
    note: 'No rōmaji crutch (basic stub for now — full mode coming).',
    ready: false,
  },
];

const FILTER_OPTIONS: { value: NativeFilter; label: string }[] = [
  { value: 'all', label: 'All registers' },
  { value: 'native', label: 'Native only (訓 / 和語)' },
  { value: 'non-native', label: 'Non-native only (音 / 外来語)' },
];

export default function Settings() {
  const { settings, update, toggleHomeModule, reset } = useSettings();

  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>設定</span>
        <h1 className={page.title}>Settings</h1>
        <p className={page.lead}>
          Preferences are saved in your browser. Default Home shows 3 modules — pin as
          many as you like.
        </p>
      </div>

      <section className={styles.block}>
        <h2 className={styles.h2}>Home modules</h2>
        <p className={styles.help}>
          {settings.homeModuleIds.length} pinned. These appear on the Home page.
        </p>
        <div className={styles.modules}>
          {MODULES.map((m) => {
            const checked = settings.homeModuleIds.includes(m.id);
            return (
              <label key={m.id} className={`${styles.modOpt} ${checked ? styles.modOn : ''}`}>
                <input type="checkbox" checked={checked} onChange={() => toggleHomeModule(m.id)} />
                <span className={`${styles.modJa} jp`}>{m.titleJa}</span>
                <span className={styles.modEn}>{m.title}</span>
              </label>
            );
          })}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>Reading display</h2>
        <p className={styles.help}>How readings show on each card.</p>
        <div className={styles.radios}>
          {READING_OPTIONS.map((opt) => (
            <label key={opt.value} className={styles.radio}>
              <input
                type="radio"
                name="readingDisplay"
                checked={settings.readingDisplay === opt.value}
                onChange={() => update({ readingDisplay: opt.value })}
              />
              <span>
                <span className={styles.radioLabel}>
                  {opt.label}
                  {!opt.ready && <em className={styles.stub}>stub</em>}
                </span>
                <span className={styles.radioNote}>{opt.note}</span>
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>Default native filter</h2>
        <p className={styles.help}>
          The starting filter when you open a module (you can still override it per module).
        </p>
        <div className={styles.radios}>
          {FILTER_OPTIONS.map((opt) => (
            <label key={opt.value} className={styles.radio}>
              <input
                type="radio"
                name="nativeFilter"
                checked={settings.nativeFilter === opt.value}
                onChange={() => update({ nativeFilter: opt.value })}
              />
              <span className={styles.radioLabel}>{opt.label}</span>
            </label>
          ))}
        </div>
      </section>

      <button className={styles.reset} onClick={reset}>
        Reset to defaults
      </button>
    </div>
  );
}
