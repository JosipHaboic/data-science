/**
 * Sort number array in descending or ascending order
 * @param data {number[]} - Number array
 * @return {number}
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
