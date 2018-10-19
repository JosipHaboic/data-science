import { arithmeticMean, sum } from './summary';


/**
 * Calculate covarinace from two data lists
 * @param x {number[]} - First data list
 * @param y {number[]} - Second data list
 * @return {number}
 */
export function covariance(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new RangeError('x and y should have same lengths');
  }
  const avgX = arithmeticMean(x);
  const avgY = arithmeticMean(y);

  let result = 0;

  for(let i = 0; i <= x.length - 1; i += 1) {
    result += (x[i] - avgX) * (y[i] - avgY);
  }

  return result / (x.length - 1);
}

/**
 * Calculate correlation between the two data lists
 * @param x {number[]} - Number list
 * @param y {number[]} - Number list
 * @returns {number}
 */
export function correlation(x: number[], y: number[]) {
  if (x.length !== y.length) {
    throw new RangeError('x and y should have same lengths');
  }

  const meanX = arithmeticMean(x);
  const meanY = arithmeticMean(y);

  let xy = 0;
  for (let i = 0; i <= x.length - 1; i += 1) {
    xy += (x[i] - meanX) * (y[i] - meanY);
  }


  const a = sum(x.map((item: number) => Math.pow(item - meanX, 2)));
  const b = sum(y.map((item: number) => Math.pow(item - meanY, 2)));

  return xy / Math.sqrt(a * b);
}
