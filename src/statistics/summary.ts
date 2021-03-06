/**
 * Calculates the sum of a number list
 * @param data {number[]} - List of numbers
 * @returns {number} - Sum of data
 */
export function sum(data: number[]): number {
  return data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);
}

/**
 * Calculates the arithmetic mean from a number list
 * @param data {number[]} - List of numbers
 * @returns {number} - Arithmetic mean
 */
export function arithmeticMean(data: number[]): number {
  return data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0) / data.length;
}

/**
 * Calculates the median of numeric sorted list
 * @param data {number[]} - Sorted list of numbers
 * @returns {number} - Median of numeric values
 */
export function median(data: number[]): number {
  // avoid to many instance gets.
  const length = data.length;
  const isOdd = (length + 1) % 2 === 0;
  if (isOdd) {
    return data[((length + 1) / 2) - 1];
  } else {
    return arithmeticMean([data[length / 2], data[(length / 2) - 1]]);
  }
}

/**
 * Calculates the mode of the numeric list
 * @param data {number[]} - List of numbers
 * @returns {Object} - Object with modes
 */
export function mode(data: number[]): Object {
  const counter = {};

  for (const item of data) {
    if (counter[item]) {
      // tslint:disable-next-line
      counter[item] += 1;
    } else {
      // tslint:disable-next-line
      counter[item] = 1;
    }
  }

  return Object.keys(counter).map(
    (key: string) => {
      return [key, counter[key]];
    })
    .sort((a: number[], b: number[]) => {
      if (a[1] > b[1]) {
        return -1;
      } else {
        return 1;
      }
    }
  );

}

/**
 * Calculates the midrange of numeric sorted values
 * @param data {number[]} - Sortred list of numbers
 * @returns {number} - Midrange of numeric values
 */
export function midrange(data: number[]): number {
  return arithmeticMean([Math.min(...data), Math.max(...data)]);
}

/**
 * Caluclates geometric mean of numeric values
 * @param data {number[]} - List of numeric values
 * @returns {number} - Geometric mean
 */
export function geometricMean(data: number[]): number {
  return Math.pow(data.reduce((previous: number, current: number) => {
      return previous * current;
  }), 1 / data.length);
}

/**
 * Calculates harmonic mean of numeric values
 * @param data {number[]} - List of numeric values
 * @returns {number} - Harmonic mean
 */
export function harmonicMean(data: number[]): number {
  return data.length / (data.reduce(
    (previous: number, current: number) => {
      return previous + (1 / current);
  }));
}

/**
 * Calculate magnitude of data
 * @param data {number[]} - number list
 * @returns {number}
 */
export function magnitude(data: number[]) {
  const sumOfSquares = data.reduce((previousValue: number, currentValue: number) => {
    return previousValue + Math.pow(currentValue, 2);
  });

  return Math.sqrt(sumOfSquares);
}

/**
 * Calculates common summary for data
 * @param data {number[]} - List of numeric values
 * @returns {Object} - Object containing common summary for data
 */
export function summary(data: number[]): {} {
  return {
    sum: sum(data),
    magnitude: magnitude(data),
    min: Math.min(...data),
    max: Math.max(...data),
    arithmeticMean: arithmeticMean(data),
    median: median(data),
    mode: mode(data),
    midrange: midrange(data),
    geometricMean: geometricMean(data),
    harmonicMean: harmonicMean(data)
  }
}
