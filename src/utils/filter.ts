import type { NativeFilter } from '../types';

/** Shared predicate so list views filter entries consistently by register. */
export function matchesFilter(register: string, filter: NativeFilter): boolean {
  if (filter === 'all') return true;
  if (filter === 'native') return register === 'native';
  return register !== 'native';
}
