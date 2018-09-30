/**
 * Filter zeroes from list
 * @param data {number[]} - List with numeric values
 * @returns {number[]} - List with filtered values
 */
export function filterZeros(data: number[]) {
  return data.filter((item: number) => {
    if (item !== 0) {
      return true;
    }

    return false;
  });
}

/**
 * Filter negative values from list
 * @param data {number[]} - List with numeric values
 * @returns {number[]} - List with filtered values
 */
export function filterNegative(data: number[]) {
  return data.filter((item: number) => {
    if (item >= 0) {
      return true;
    }

    return false;
  });
}

/**
 * Filter positive values from list
 * @param data {number[]} - List with numeric values
 * @returns {number[]} - List with filtered values
 */
export function filterPositive(data: number[]) {
  return data.filter((item: number) => {
    if (item < 0) {
      return true;
    }

    return false;
  });
}

/**
 * Filter false values from list
 * @param data {number[]} - List with numeric values
 * @returns {number[]} - List with filtered values
 */
export function filterFalse(data: boolean[]) {
  return data.filter((item: boolean) => {
    if (item) {
      return true;
    }

    return false;
  });
}

/**
 * Filter true values from list
 * @param data {number[]} - List with numeric values
 * @returns {number[]} - List with filtered values
 */
export function filterTrue(data: boolean[]) {
  return data.filter((item: boolean) => {
    if (item) {
      return false;
    }

    return true;
  });
}
