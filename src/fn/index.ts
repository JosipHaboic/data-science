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

/**
 *
 * @param data - holds numeric ordered data in a list
 * @returns true if data lenght is even false otherwise
 */
export function median(data: number[]): number {
  if (data.length === 0)  { return undefined; }
  const length = data.length;
  const isOdd = (length + 1) % 2 === 0;
  if (isOdd) {
    return data[((length + 1) / 2) - 1];
  } else {
    return mean([data[length / 2], data[(length / 2) - 1]]);
  }
}
