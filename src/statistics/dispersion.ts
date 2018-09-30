import { arithmeticMean } from './summary';

/**
 * Calcaulte range of data
 * @param data {array} - List of numerical data
 * @returns {number} - Range of data
 */
export function range(data: number[]): number {
  return Math.max(...data) - Math.min(...data);
}

/**
 * Calculate standard deviation from variance
 * @param variance {number} - variance of data
 * @returns {number} - Standard deviation of data
 */
export function standardDeviation(variance: number) {
  return Math.sqrt(variance);
}


export namespace Population {

  /**
   * Calculate variance of population
   * @param data {array} - List of numerical data
   * @returns {number} - Variance of population data
   */
  export function variance(data: number[]): number {
    return (1 / data.length) * data.reduce(
      (previous: number, current: number) => {
        return previous + Math.pow(current - arithmeticMean(data), 2);
      }, 0
    );
  }

}

export namespace Sample {

  /**
   * Calculate variance of sample
   * @param data {number[]} - List of numerical data
   * @returns {number} - Variance of sample data
   */
  export function variance(data: number[]): number {
    return (1 / (data.length - 1)) * data.reduce(
      (previous: number, current: number) => {
        return previous + Math.pow(current - arithmeticMean(data), 2);
      }, 0
    );
  }

}
