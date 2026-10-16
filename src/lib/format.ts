const monthFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

/** Formats a `YYYY-MM` string as e.g. "Mar 2022". */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  return monthFormat.format(new Date(year, month - 1, 1));
}

export function formatDate(value: Date): string {
  return monthFormat.format(value);
}
