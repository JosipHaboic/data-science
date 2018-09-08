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
export function arithmeticMean(data: number[]): number {
  if (data.length === 0)  { return NaN; }

  const sumOfData = data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);

  return sumOfData / data.length;
}

/**
 *
 * @param number sorted list
 * @returns number
 */
export function median(data: number[]): number {
  if (data.length === 0)  { return NaN; }
  const length = data.length;
  const isOdd = (length + 1) % 2 === 0;
  if (isOdd) {
    return data[((length + 1) / 2) - 1];
  } else {
    return arithmeticMean([data[length / 2], data[(length / 2) - 1]]);
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
 * @param number sortred list
 * @returns number
 */
export function midrange(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return arithmeticMean([Math.min(...data), Math.max(...data)]);
}

/**
 *
 * @param number list
 * @returns number
 */
export function geometricMean(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return Math.pow(data.reduce((previous: number, current: number) => {
      return previous * current;
  }), 1 / data.length);
}

/**
 *
 * @param number list
 * @returns number
 */
export function harmonicMean(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return data.length / (data.reduce(
    (previous: number, current: number) => {
      return previous + (1 / current);
  }));
}

/**
 *
 * @param number sorted list
 * @returns number
 */
export function range(data: number[]): number {
  if (data.length === 0) { return NaN; }

  return Math.max(...data) - Math.min(...data);
}
