/**
 *
 * @param number list
 * @returns number
 */
export function sum(data: number[]): number {
  if (data.length === 0)  { return NaN; }

  return data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);
}

/**
 *
 * @param number list
 * @returns number
 */
export function mean(data: number[]): number {
  if (data.length === 0)  { return NaN; }

  const sumOfData = data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);

  return sumOfData / data.length;
}

/**
 *
 * @param number list
 * @returns number
 */
export function median(data: number[]): number {
  if (data.length === 0)  { return NaN; }
  const length = data.length;
  const isOdd = (length + 1) % 2 === 0;
  if (isOdd) {
    return data[((length + 1) / 2) - 1];
  } else {
    return mean([data[length / 2], data[(length / 2) - 1]]);
  }
}

/**
 *
 * @param number list
 * @returns number or NaN
 */
export function mode(data: number[]): Object {
  if (data.length === 0)  { return NaN; }
  const counter: Object = new Object();

  for (const item of data) {
    if (counter[item]) {
      // tslint:disable-next-line
      counter[item] += 1;
    } else {
      // tslint:disable-next-line
      counter[item] = 1;
    }
  }

  return counter;
}

/**
 *
 * @param number list
 * @returns number
 */
export function midrange(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return mean([Math.min(...data), Math.max(...data)]);
}
