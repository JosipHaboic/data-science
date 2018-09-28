import * as correlation from '../../src/statistics/correlation';


test('function covariance: throws TypeError when not passed any data', () => {
  expect(correlation.covariance).toThrowError(TypeError);
})

test('function covariance: throws RangeError when passed non equal size data lists', () => {
  expect(() => correlation.covariance([1, 2], [1, 2, 3])).toThrowError(RangeError);
})

test('function covariance: returns 0 from list of [0, 0, 0]', () => {
  expect(correlation.covariance([0, 0, 0], [0, 0, 0])).toBe(0);
})

test('function covariance: returns 2.85 from lists [2, 3, 2.7, 3.2, 4.1] and [10, 14, 12, 15, 20]', () => {
  expect(correlation.covariance([2, 3, 2.7, 3.2, 4.1], [10, 14, 12, 15, 20])).toBeCloseTo(2.85);
})

