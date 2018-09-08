import * as fn from '../src/statistics';


test('function sum: returns NaN from list of []', () => {
  expect(fn.sum([])).toBe(NaN);
})

test('function sum: returns 6 from list of [1, 2, 3]', () => {
  expect(fn.sum([1, 2, 3])).toBe(6);
})

test('function arithmeticMean: returns NaN from list of []', () => {
  expect(fn.arithmeticMean([])).toBe(NaN);
})

test('function arithmeticMean: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.arithmeticMean([1, 2, 3])).toBe(2);
})

test('function median: returns NaN from list of []', () => {
  expect(fn.median([])).toBe(NaN);
})

test('function median: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.median([1, 2, 3])).toBe(2);
})

test('function median: returns 2 from list of [1, 2, 3, 4]', () => {
  expect(fn.median([1, 2, 3, 4])).toBe(2.5);
})

test('function mode: returns NaN from list of []', () => {
  expect(fn.mode([])).toBe(NaN);
})

test('function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]', () => {
  expect(fn.mode([1, 2, 2])).toEqual({"1": 1, "2": 2});
})

test('function midrange: returns NaN from list of []', () => {
  expect(fn.midrange([])).toBe(NaN);
})

test('function midrange: returns NaN from list of [1, 2, 3]', () => {
  expect(fn.midrange([1, 2, 3])).toBe(2);
})

test('function geometricMean: returns NaN from list of []', () => {
  expect(fn.geometricMean([])).toBe(NaN);
})

test('function geometricMean: returns 1.8171205928321 from list of [1, 2, 3]', () => {
  expect(fn.geometricMean([1, 2, 3])).toBeCloseTo(1.8171205928321);
})

test('function harmonicMean: returns NaN from list of []', () => {
  expect(fn.harmonicMean([])).toBe(NaN);
})

test('function harmonicMean: returns NaN from list of [1, 2, 3]', () => {
  expect(fn.harmonicMean([1, 2, 3])).toBeCloseTo(1.6363636363636);
})

test('function range: returns NaN from list of []', () => {
  expect(fn.range([])).toBe(NaN);
})

test('function range: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.range([1, 2, 3])).toBe(2);
})
