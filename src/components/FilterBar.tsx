import type { NativeFilter } from '../types';
import styles from './FilterBar.module.css';

const OPTIONS: { value: NativeFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'native', label: 'Native (訓)' },
  { value: 'non-native', label: 'Non-native (音/外)' },
];

export default function FilterBar({
  value,
  onChange,
}: {
  value: NativeFilter;
  onChange: (v: NativeFilter) => void;
}) {
  return (
    <div className={styles.bar} role="group" aria-label="Native filter">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          className={`${styles.btn} ${value === opt.value ? styles.active : ''}`}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
