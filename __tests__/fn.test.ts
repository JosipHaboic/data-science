import * as fn from '../src/fn';


test('function sum: returns NaN from list of []', () => {
  expect(fn.sum([])).toBe(NaN);
})

test('function sum: returns 6 from list of [1, 2, 3]', () => {
  expect(fn.sum([1, 2, 3])).toBe(6);
})

test('function mean: returns NaN from list of []', () => {
  expect(fn.mean([])).toBe(NaN);
})

test('function mean: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.mean([1, 2, 3])).toBe(2);
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
