import * as dispersion from '../../src/statistics/dispersion';


test('function range: throws an TypeError when not passed any data', () => {
  expect(dispersion.range).toThrowError(TypeError);
})

test('function range: returns -Infinity when passed empty list', () => {
  expect(dispersion.range([])).toBe(-Infinity);
})

test('function range: returns 2 from list of [1, 2, 3]', () => {
  expect(dispersion.range([1, 2, 3])).toBe(2);
})



test('function standardDeviation: returns 0 when passed 0', () => {
  expect(dispersion.standardDeviation(0)).toBe(0);
})

test('function standardDeviation: returns 2 from list of [1, 2, 3]', () => {
  expect(dispersion.standardDeviation(35/12)).toBeCloseTo(1.708);
})


test('function Population:variance throws an TypeError when not passed any data', () => {
  expect(dispersion.Population.variance).toThrowError(TypeError);
})

test('function Population:variance returns ~ 2.917 when passed [1, 2, 3, 4, 5, 6]', () => {
  expect(dispersion.Population.variance([1, 2, 3, 4, 5, 6])).toBeCloseTo(2.917);
})


test('function Sample:variance throws an TypeError when not passed any data', () => {
  expect(dispersion.Sample.variance).toThrowError(TypeError);
})

test('function Sample:variance returns ~ 2.917 when passed [1, 2, 3, 4, 5, 6]', () => {
  expect(dispersion.Sample.variance([1, 2, 3, 4, 5, 6])).toBeCloseTo(3.5);
})
