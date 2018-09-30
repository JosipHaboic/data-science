/**
 * Generates arithmetic sequence
 * @param start {number} - Start of sequence
 * @param difference {number} - Difference between each item in sequence
 * @param n {number} - Number of items in sequence
 * @returns {number[]}
 */
export function * arithmetic(start: number, difference: number, n: number) {
  let i = 0;
  while (i < n) {
    yield start + (difference * i);
    i += 1;
  }
}

/**
 * Generates linear sequence
 * @param start {number} - Start of sequence
 * @param intercept {number} - Intercept
 * @param n {number} - Number of items in sequence
 * @return {number[]}
 */
export function * linear(start: number, intercept: number, n: number) {
  let x = 0;
  while (x < n) {
    yield start * x + intercept;
    x += 1;
  }
}

/**
 * Generates triangular sequence
 * @param n {number} - Number of items in sequence
 * @returns {number[]}
 */
export function * triangular(n: number) {
  let i = 1;
  while (i <= n) {
    yield (i * (i + 1)) / 2;
    i += 1
  }
}

/**
 * Generates square sequence
 * @param n {number} - Number of items in sequence
 * @returns {number[]}
 */
export function * square(n: number) {
  let i = 1;
  while (i <= n) {
    yield Math.pow(i, 2);
    i += 1
  }
}

/**
 * Generates factorial sequence
 * @param n {number} - Number of items in sequence
 * @returns {number[]}
 */
export function * factorial(n: number) {
  let result = 1;
  if (n > 1) {
    for(let k = 2; k < n; k += 1) {
      result *= k;
      yield result;
    }
  } else {
    yield result;
  }

}
