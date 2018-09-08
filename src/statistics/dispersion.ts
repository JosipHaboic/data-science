/**
 * @param {array} data - List of numerical data
 * @returns {number} - Range of data
 */
export function range(data: number[]): number {
  return Math.max(...data) - Math.min(...data);
}
