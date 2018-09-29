import { arithmeticMean, sum } from './summary';


/**
 * Calculate covarinace from two data lists
 * @param {number[]} x - First data list
 * @param {number[]} y - Second data list
 * @return {number}
 */
export function covariance(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new RangeError('Data lengths should be equal');
  }
  const avgA = arithmeticMean(x);
  const avgB = arithmeticMean(y);

  let result = 0;

  for(let i = 0; i <= x.length - 1; i += 1) {
    result += (x[i] - avgA) * (y[i] - avgB);
  }

  return result / (x.length - 1);
}

/**
 * Calculate correlation between the two data lists
 * @param {number} x - Number list
 * @param {number} y - Number list
 */
export function correlation(x: number[], y: number[]) {
  if (x.length !== y.length) {
    throw new RangeError('Data lengths should be equal');
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
