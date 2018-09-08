/**
 *
 * @param number sorted list
 * @returns number
 */
export function range(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return Math.max(...data) - Math.min(...data);
}
