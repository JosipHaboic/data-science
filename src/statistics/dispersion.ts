/**
 * @param {array} data - List of numerical data
 * @returns {number} - Range of data
 */
export function range(data: number[]): number {
  if (data.length === 0) {
    throw new Error('Data is empty list');
  }

  return Math.max(...data) - Math.min(...data);
}
