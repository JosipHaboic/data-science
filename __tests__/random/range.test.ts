import * as range from '../../src/random/range';



test('function range: returns 10 random numbers in range [0 ... 1]', () => {
  expect(range.range()).toHaveLength(10);
})

test('function range: returns 5 random numbers in range [1 ... 10]', () => {
  expect(range.range(1, 10, 5)).toHaveLength(5);
})

test('function range: returns 1 random number in range [1 ... 10]', () => {
  expect(range.range(1, 10, 1)[0]).toBeGreaterThan(0);
})

test('function range: returns 1 random numbers in range [10 ... 20]', () => {
  expect(range.range(10, 20, 1)[0]).toBeGreaterThan(9);
})
