import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Settings } from '../types';
import { DEFAULT_HOME_MODULE_IDS } from '../data/modules';

const STORAGE_KEY = 'nihongo.settings.v1';

const DEFAULT_SETTINGS: Settings = {
  homeModuleIds: DEFAULT_HOME_MODULE_IDS,
  readingDisplay: 'toggle',
  nativeFilter: 'all',
};

interface SettingsContextValue {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
  toggleHomeModule: (id: string) => void;
  reset: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

function load(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<Settings>;
    // Merge so new fields added in future versions get their defaults.
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage unavailable (private mode, etc.) — settings stay in-memory.
    }
  }, [settings]);

  const update = (patch: Partial<Settings>) => setSettings((s) => ({ ...s, ...patch }));

  const toggleHomeModule = (id: string) =>
    setSettings((s) => ({
      ...s,
      homeModuleIds: s.homeModuleIds.includes(id)
        ? s.homeModuleIds.filter((m) => m !== id)
        : [...s.homeModuleIds, id],
    }));

  const reset = () => setSettings(DEFAULT_SETTINGS);

  return (
    <SettingsContext.Provider value={{ settings, update, toggleHomeModule, reset }}>
      {children}
    </SettingsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within a SettingsProvider');
  return ctx;
}
