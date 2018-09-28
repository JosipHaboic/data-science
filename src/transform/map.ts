import { magnitude } from '../statistics/summary';


/**
 * Round number array
 * @param data {number[]} - Number array
 */
export function round(data: number[]): number[] {
  return data.map((item: number) => {
    return Math.round(item);
  })
}

/**
 * Normalize values from number array to values in range 0 >= 1
 * @param data {number[]} - Number array
 */
export function normalize(data: number[]) {
  const magnitudeOfData = magnitude(data);

  return data.map((item: number) => {
    return item / magnitudeOfData;
  });
}
