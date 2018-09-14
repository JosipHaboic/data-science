import * as maps from '../../src/transform/maps';


test('maps:round should throw TypeError when not passed any data', () => {
  expect(maps.round).toThrowError(TypeError);
});

test('maps:round should return [1, 2, 2] when passed data [1.25, 1.5, 1.75]', () => {
  expect(maps.round([1.25, 1.5, 1.75])).toEqual([1, 2, 2]);
});


test('maps:sort should throw TypeError when not passed any data', () => {
  expect(maps.sort).toThrowError(TypeError);
});

test('maps:sort should return [1, 2, 3] when passed data [3, 2, 1] and in ascending direction 1', () => {
  expect(maps.sort([3, 2, 1], 1)).toEqual([1, 2, 3]);
});

test('maps:sort should return [3, 2, 1] when passed data [1, 2, 3] and in ascending direction -1', () => {
  expect(maps.sort([1, 2, 3], -1)).toEqual([3, 2, 1]);
});
