import { arithmeticMean } from '../statistics/summary';


/**
 * Calculate covarinace from two data lists
 * @param {number[]} dataA - First data list
 * @param {number[]} dataB - Second data list
 * @return {number}
 */
export function covariance(dataA: number[], dataB: number[]): number {
  if (dataA.length !== dataB.length) {
    throw new RangeError('Data lengths should be equal');
  }
  const avgA = arithmeticMean(dataA);
  const avgB = arithmeticMean(dataB);

  let result = 0;

  for(let i = 0; i <= dataA.length - 1; i += 1) {
    result += (dataA[i] - avgA) * (dataB[i] - avgB);
  }

  return result / (dataA.length - 1);
}

