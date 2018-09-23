/**
 * Round number array
 * @param data {number[]} - Number array
 */
export function round(data: number[]): number[] {
  return data.map((item: number) => {
    return Math.round(item);
  })
}

