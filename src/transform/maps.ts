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
 * Sort number array in descending or ascending order
 * @param data {number[]} - Number array
 */
export function sort(data: number[], direction: number = 1): number[] {
  return data.sort((a: number, b: number) => {
    if(a > b) {
      return direction;
    } else {
      return direction * -1;
    }
  });
}
