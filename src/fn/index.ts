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

/**
 *
 * @param data - holds numeric data in a list
 * @returns sum of data
 */
export function sum(data: number[]): number {
  if (data.length === 0)  { return undefined; }

  return data.reduce((previous: number, next: number) => {
    return previous + next;
  }, 0);
}

/**
 *
 * @param data - holds numeric data in a list
 * @returns arithmetic mean of data
 */
export function mean(data: number[]): number {
  if (data.length === 0)  { return undefined; }

  const sumOfData = data.reduce((previous: number, next: number) => {
    return previous + next;
  }, 0);

  return sumOfData / data.length;
}
