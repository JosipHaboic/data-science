import * as filters from '../../src/transform/filters';


test('filters:filterZero should throw TypeError when not passed any data', () => {
  expect(filters.filterZero).toThrowError(TypeError);
});

test('filters:filterZero should return [-1, 1] when passed data [-1, 0, 1]', () => {
  expect(filters.filterZero([-1, 0, 1])).toEqual([-1, 1]);
});

test('filters:filterZero should return [] when passed data [0, 0, 0]', () => {
  expect(filters.filterZero([0, 0, 0])).toEqual([]);
});

test('filters:filterZero should return [1, 1, 1] when passed data [1, 1, 1]', () => {
  expect(filters.filterZero([1, 1, 1])).toEqual([1, 1, 1]);
});


test('filters:filterNegative should throw TypeError when not passed any data', () => {
  expect(filters.filterNegative).toThrowError(TypeError);
});

test('filters:filterNegative should return [1, 1, 1] when passed data [1, 1, 1]', () => {
  expect(filters.filterNegative([1, 1, 1])).toEqual([1, 1, 1]);
});

test('filters:filterNegative should return [0, 0, 0] when passed data [0, 0, 0]', () => {
  expect(filters.filterNegative([0, 0, 0])).toEqual([0, 0, 0]);
});

test('filters:filterNegative should return [] when passed data [-1, -1, -1]', () => {
  expect(filters.filterNegative([-1, -1, -1])).toEqual([]);
});


test('filters:filterPositive should throw TypeError when not passed any data', () => {
  expect(filters.filterPositive).toThrowError(TypeError);
});

test('filters:filterPositive should return [] when passed data [1, 1, 1]', () => {
  expect(filters.filterPositive([1, 1, 1])).toEqual([]);
});

test('filters:filterPositive should return [0, 0, 0] when passed data [0, 0, 0]', () => {
  expect(filters.filterPositive([0, 0, 0])).toEqual([0, 0, 0]);
});

test('filters:filterPositive should return [-1, -1, -1] when passed data [-1, -1, -1]', () => {
  expect(filters.filterPositive([-1, -1, -1])).toEqual([-1, -1, -1]);
});


test('filters:filterFalse should throw TypeError when not passed any data', () => {
  expect(filters.filterFalse).toThrowError(TypeError);
});

test('filters:filterFalse should return [] when passed data [false, false, false]', () => {
  expect(filters.filterFalse([false, false, false])).toEqual([]);
});

test('filters:filterFalse should return [true, true, true] when passed data [true, true, true]', () => {
  expect(filters.filterFalse([true, true, true])).toEqual([true, true, true]);
});

test('filters:filterFalse should return [false, true] when passed data [false, true]', () => {
  expect(filters.filterFalse([false, true])).toEqual([true]);
});


test('filters:filterTrue should throw TypeError when not passed any data', () => {
  expect(filters.filterTrue).toThrowError(TypeError);
});

test('filters:filterTrue should return [] when passed data [true, true, true]', () => {
  expect(filters.filterTrue([true, true, true])).toEqual([]);
});

test('filters:filterTrue should return [false, false, false] when passed data [false, false, false]', () => {
  expect(filters.filterTrue([false, false, false])).toEqual([false, false, false]);
});

test('filters:filterTrue should return [false, true] when passed data [false, true]', () => {
  expect(filters.filterTrue([false, true])).toEqual([false]);
});
