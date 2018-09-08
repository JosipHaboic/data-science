/**
 *
 * @param data - holds numeric data in a list
 * @returns largest number in list
 */
export function max(data: number[]): number {
  if (data.length === 0)  { return undefined; }

  return data.reduce((previous: number, next: number) => {
    return previous >= next ? previous : next;
  });
}

/**
 *
 * @param data - holds numeric data in a list
 * @returns smallest number in list
 */
export function min(data: number[]): number {
  if (data.length === 0)  { return undefined; }

  return data.reduce((previous: number, next: number) => {
    return previous <= next ? previous : next;
  });
}
