import * as dispersion from '../src/statistics/dispersion';


test('function range: returns NaN from list of []', () => {
  expect(dispersion.range([])).toThrowError('Data is empty list');
})

test('function range: returns 2 from list of [1, 2, 3]', () => {
  expect(dispersion.range([1, 2, 3])).toBe(2);
})
