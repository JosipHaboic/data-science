import * as fn from '../../src/statistics/summary';


test('function sum: throws TypeError when not passed any data', () => {
  expect(fn.sum).toThrowError(TypeError);
})

test('function sum: returns 6 from list of [1, 2, 3]', () => {
  expect(fn.sum([1, 2, 3])).toBe(6);
})

test('function arithmeticMean: throws TypeError when not passed any data', () => {
  expect(fn.arithmeticMean).toThrowError(TypeError);
})

test('function arithmeticMean: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.arithmeticMean([1, 2, 3])).toBe(2);
})

test('function median: throws TypeError when not passed any data', () => {
  expect(fn.median).toThrowError(TypeError);
})

test('function median: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.median([1, 2, 3])).toBe(2);
})

test('function median: returns 2.5 from list of [1, 2, 3, 4]', () => {
  expect(fn.median([1, 2, 3, 4])).toBe(2.5);
})

test('function mode: throws TypeError when not passed any data', () => {
  expect(fn.mode).toThrowError(TypeError);
})

test('function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]', () => {
  expect(fn.mode([1, 2, 2])).toEqual([["2", 2], ["1", 1]]);
})

test('function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]', () => {
  expect(fn.mode([2, 2, 1])).toEqual([["2", 2], ["1", 1]]);
})

test('function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]', () => {
  expect(fn.mode([1, 1, 2])).toEqual([["1", 2], ["2", 1]]);
})

test('function midrange: throws TypeError when not passed any data', () => {
  expect(fn.midrange).toThrowError(TypeError);
})

test('function midrange: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.midrange([1, 2, 3])).toBe(2);
})

test('function geometricMean: throws TypeError when not passed any data', () => {
  expect(fn.geometricMean).toThrowError(TypeError);
})

test('function geometricMean: returns 1.8171205928321 from list of [1, 2, 3]', () => {
  expect(fn.geometricMean([1, 2, 3])).toBeCloseTo(1.8171205928321);
})

test('function harmonicMean: throws TypeError when not passed any data', () => {
  expect(fn.harmonicMean).toThrowError(TypeError);
})

test('function harmonicMean: returns 1.6363636363636 from list of [1, 2, 3]', () => {
  expect(fn.harmonicMean([1, 2, 3])).toBeCloseTo(1.6363636363636);
})


test('function summary: throws TypeError when not passed any data', () => {
  expect(fn.summary).toThrowError(TypeError);
})

test('function summary: returns string when passed date [1, 2, 3]', () => {
  expect(fn.summary([1, 2, 3])).toBeInstanceOf(Object);
})

test('function magnitude: throws TypeError when not passed any data', () => {
  expect(fn.magnitude).toThrowError(TypeError);
})

test('function magnitude: returns 3.7416573867739413 from list of [1, 2, 3]', () => {
  expect(fn.magnitude([1, 2, 3])).toBeCloseTo(3.7416573867739413);
})

test('function magnitude: returns 0 from list of [0, 0, 0]', () => {
  expect(fn.magnitude([0, 0, 0])).toBe(0);
})
