import * as correlation from '../../src/statistics/correlation';


test('function covariance: throws TypeError when not passed any data', () => {
  expect(correlation.covariance).toThrowError(TypeError);
})

test('function covariance: throws RangeError when passed non equal size data lists', () => {
  expect(() => correlation.covariance([1, 2], [1, 2, 3])).toThrowError(RangeError);
})

test('function covariance: returns 0 from lists [0, 0, 0] and [0, 0, 0]', () => {
  expect(correlation.covariance([0, 0, 0], [0, 0, 0])).toBe(0);
})

test('function covariance: returns 2.85 from lists [2, 3, 2.7, 3.2, 4.1] and [10, 14, 12, 15, 20]', () => {
  expect(correlation.covariance([2, 3, 2.7, 3.2, 4.1], [10, 14, 12, 15, 20])).toBeCloseTo(2.85);
})


test('function correlation: throws TypeError when not passed any data', () => {
  expect(correlation.correlation).toThrowError(TypeError);
})

test('function correlation: throws RangeError when passed non equal size data lists', () => {
  expect(() => correlation.correlation([1, 2], [1, 2, 3])).toThrowError(RangeError);
})

test('function correlation: returns 0 from lists [0, 0, 0] and [0, 0, 0]', () => {
  expect(correlation.correlation([0, 0, 0], [0, 0, 0])).toBe(NaN);
})

test('function correlation: returns 1 from lists [1, 2, 3, 4, 5, 6] and [1, 2, 3, 4, 5, 6]', () => {
  expect(correlation.correlation([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(1);
})

test('function correlation: returns 1 from lists [6, 5, 4, 3, 2, 1] and [1, 2, 3, 4, 5, 6]', () => {
  expect(correlation.correlation([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6])).toBe(-1);
})
