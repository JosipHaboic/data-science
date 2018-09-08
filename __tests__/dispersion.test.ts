import * as dispersion from '../src/statistics/dispersion';


test('function range: throws an TypeError when not passed any data', () => {
  expect(dispersion.range).toThrowError(TypeError);
})

test('function range: return -Infinity when passed empty list', () => {
  expect(dispersion.range([])).toBe(-Infinity);
})

test('function range: returns 2 from list of [1, 2, 3]', () => {
  expect(dispersion.range([1, 2, 3])).toBe(2);
})
