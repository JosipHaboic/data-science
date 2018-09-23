import * as map from '../../src/transform/map';


test('map:round should throw TypeError when not passed any data', () => {
  expect(map.round).toThrowError(TypeError);
});

test('map:round should return [1, 2, 2] when passed data [1.25, 1.5, 1.75]', () => {
  expect(map.round([1.25, 1.5, 1.75])).toEqual([1, 2, 2]);
});
