import * as arange from '../../src/transform/arange';


test('arange:sort should throw TypeError when not passed any data', () => {
  expect(arange.sort).toThrowError(TypeError);
});

test('arange:sort should return [1, 2, 3] when passed data [3, 2, 1] and in ascending direction 1', () => {
  expect(arange.sort([3, 2, 1], 1)).toEqual([1, 2, 3]);
});

test('arange:sort should return [3, 2, 1] when passed data [1, 2, 3] and in ascending direction -1', () => {
  expect(arange.sort([1, 2, 3], -1)).toEqual([3, 2, 1]);
});
