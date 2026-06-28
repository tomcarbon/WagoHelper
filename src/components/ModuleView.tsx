import { useState } from 'react';
import type { Module, NativeFilter } from '../types';
import { groupBySubmodule } from '../data/modules';
import { useSettings } from '../context/SettingsContext';
import EntryCard from './EntryCard';
import FilterBar from './FilterBar';
import { matchesFilter } from '../utils/filter';
import styles from './ModuleView.module.css';

export default function ModuleView({ module }: { module: Module }) {
  const { settings } = useSettings();
  // Seed the per-module filter from the global default, then allow overriding.
  const [filter, setFilter] = useState<NativeFilter>(settings.nativeFilter);

  const groups = groupBySubmodule(module).map((g) => ({
    ...g,
    entries: g.entries.filter((e) => matchesFilter(e.register, filter)),
  }));

  const totalShown = groups.reduce((n, g) => n + g.entries.length, 0);
  const isEmpty = module.entries.length === 0;

  return (
    <div>
      <div className={styles.toolbar}>
        <FilterBar value={filter} onChange={setFilter} />
        {!isEmpty && (
          <span className={styles.count}>
            {totalShown} {totalShown === 1 ? 'entry' : 'entries'}
          </span>
        )}
      </div>

      {isEmpty ? (
        <div className={styles.placeholder}>
          <strong>Coming soon.</strong> This module is scaffolded with its submodules
          ready — add entries to <code>src/data/{module.id}.ts</code> to bring it to life.
          <ul className={styles.subList}>
            {module.submodules.map((s) => (
              <li key={s.id}>
                <span className="jp">{s.titleJa}</span> · {s.title}
                {s.description ? ` — ${s.description}` : ''}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        groups.map((g) => (
          <section key={g.submoduleId} className={styles.group}>
            <h3 className={styles.groupHead}>
              <span className="jp">{g.titleJa}</span> {g.title}
            </h3>
            {g.description && <p className={styles.groupDesc}>{g.description}</p>}
            {g.entries.length === 0 ? (
              <p className={styles.emptyGroup}>No entries match the current filter.</p>
            ) : (
              <div className={styles.grid}>
                {g.entries.map((e) => (
                  <EntryCard key={e.id} entry={e} />
                ))}
              </div>
            )}
          </section>
        ))
      )}
    </div>
  );
}
