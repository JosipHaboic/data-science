import * as filter from '../../src/transform/filter';


test('filter:filterZeros should throw TypeError when not passed any data', () => {
  expect(filter.filterZeros).toThrowError(TypeError);
});

test('filter:filterZeros should return [-1, 1] when passed data [-1, 0, 1]', () => {
  expect(filter.filterZeros([-1, 0, 1])).toEqual([-1, 1]);
});

test('filter:filterZeros should return [] when passed data [0, 0, 0]', () => {
  expect(filter.filterZeros([0, 0, 0])).toEqual([]);
});

test('filter:filterZeros should return [1, 1, 1] when passed data [1, 1, 1]', () => {
  expect(filter.filterZeros([1, 1, 1])).toEqual([1, 1, 1]);
});


test('filter:filterNegative should throw TypeError when not passed any data', () => {
  expect(filter.filterNegative).toThrowError(TypeError);
});

test('filter:filterNegative should return [1, 1, 1] when passed data [1, 1, 1]', () => {
  expect(filter.filterNegative([1, 1, 1])).toEqual([1, 1, 1]);
});

test('filter:filterNegative should return [0, 0, 0] when passed data [0, 0, 0]', () => {
  expect(filter.filterNegative([0, 0, 0])).toEqual([0, 0, 0]);
});

test('filter:filterNegative should return [] when passed data [-1, -1, -1]', () => {
  expect(filter.filterNegative([-1, -1, -1])).toEqual([]);
});


test('filter:filterPositive should throw TypeError when not passed any data', () => {
  expect(filter.filterPositive).toThrowError(TypeError);
});

test('filter:filterPositive should return [] when passed data [1, 1, 1]', () => {
  expect(filter.filterPositive([1, 1, 1])).toEqual([]);
});

test('filter:filterPositive should return [0, 0, 0] when passed data []', () => {
  expect(filter.filterPositive([0, 0, 0])).toEqual([]);
});

test('filter:filterPositive should return [-1, -1, -1] when passed data [-1, -1, -1]', () => {
  expect(filter.filterPositive([-1, -1, -1])).toEqual([-1, -1, -1]);
});


test('filter:filterFalse should throw TypeError when not passed any data', () => {
  expect(filter.filterFalse).toThrowError(TypeError);
});

test('filter:filterFalse should return [] when passed data [false, false, false]', () => {
  expect(filter.filterFalse([false, false, false])).toEqual([]);
});

test('filter:filterFalse should return [true, true, true] when passed data [true, true, true]', () => {
  expect(filter.filterFalse([true, true, true])).toEqual([true, true, true]);
});

test('filter:filterFalse should return [false, true] when passed data [false, true]', () => {
  expect(filter.filterFalse([false, true])).toEqual([true]);
});


test('filter:filterTrue should throw TypeError when not passed any data', () => {
  expect(filter.filterTrue).toThrowError(TypeError);
});

test('filter:filterTrue should return [] when passed data [true, true, true]', () => {
  expect(filter.filterTrue([true, true, true])).toEqual([]);
});

test('filter:filterTrue should return [false, false, false] when passed data [false, false, false]', () => {
  expect(filter.filterTrue([false, false, false])).toEqual([false, false, false]);
});

test('filter:filterTrue should return [false, true] when passed data [false, true]', () => {
  expect(filter.filterTrue([false, true])).toEqual([false]);
});
