import { max, min } from '../src/fn';


test('returns undefined when data is empty list', () => {
  expect(max([])).toBe(undefined);
})

test('returns 3 from list of [1, 2, 3]', () => {
  expect(max([1, 2, 3])).toBe(3);
})

test('returns 3 from list of [3, 2, 1]', () => {
  expect(max([3, 2, 1])).toBe(3);
})

test('function max: returns undefined when data is empty list', () => {
  expect(min([])).toBe(undefined);
})

test('function min: returns 1 from list of [1, 2, 3]', () => {
  expect(min([1, 2, 3])).toBe(1);
})

test('function min: returns 1 from list of [3, 2, 1]', () => {
  expect(min([3, 2, 1])).toBe(1);
})
