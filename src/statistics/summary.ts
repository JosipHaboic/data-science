/**
 * Calculates the sum of a number list
 * @param {array} data - List of numbers
 * @returns {number} - Sum of data
 */
export function sum(data: number[]): number {
  return data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);
}

/**
 * Calculates the arithmetic mean from a number list
 * @param {array} data - List of numbers
 * @returns {number} - Arithmetic mean
 */
export function arithmeticMean(data: number[]): number {
  const sumOfData = data.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);

  return sumOfData / data.length;
}

/**
 * Calculates the median of numeric sorted list
 * @param {array} data - Sorted list of numbers
 * @returns {number} - Median of numeric values
 */
export function median(data: number[]): number {
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
 * @param {array} data - List of numbers
 * @returns {Object} - Object with modes
 */
export function mode(data: number[]): Object {
  let counter = {};

  for (const item of data) {
    if (counter[item]) {
      // tslint:disable-next-line
      counter[item] += 1;
    } else {
      // tslint:disable-next-line
      counter[item] = 1;
    }
  }
  counter = Object.keys(counter).map((key: string) => {
    return [key, counter[key]];
  }).sort((a: number[], b: number[]) => {
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });

  return counter;
}

/**
 * Calculates the midrange of numeric sorted values
 * @param {array} - Sortred list of numbers
 * @returns {number} - Midrange of numeric values
 */
export function midrange(data: number[]): number {
  return arithmeticMean([Math.min(...data), Math.max(...data)]);
}

/**
 * Caluclates geometric mean of numeric values
 * @param {array} data - List of numeric values
 * @returns {number} - Geometric mean
 */
export function geometricMean(data: number[]): number {
  return Math.pow(data.reduce((previous: number, current: number) => {
      return previous * current;
  }), 1 / data.length);
}

/**
 * Calculates harmonic mean of numeric values
 * @param {array} - List of numeric values
 * @returns {number} - Harmonic mean
 */
export function harmonicMean(data: number[]): number {
  return data.length / (data.reduce(
    (previous: number, current: number) => {
      return previous + (1 / current);
  }));
}

/**
 * Calculates common summary for data
 * @param {array} - List of numeric values
 * @returns {Object} - Object containing common summary for data
 */
export function summary(data: number[]): {} {
  return {
    sum: sum(data),
    arithmeticMean: arithmeticMean(data),
    median: median(data),
    mode: mode(data),
    midrange: midrange(data),
    geometricMean: geometricMean(data),
    harmonicMean: harmonicMean(data)
  }
}
