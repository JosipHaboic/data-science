import * as map from '../../src/transform/map';


test('map:round should throw TypeError when not passed any data', () => {
  expect(map.round).toThrowError(TypeError);
});

test('map:round should return [1, 2, 2] when passed data [1.25, 1.5, 1.75]', () => {
  expect(map.round([1.25, 1.5, 1.75])).toEqual([1, 2, 2]);
});


test('map:normalize should throw TypeError when not passed any data', () => {
  expect(map.normalize).toThrowError(TypeError);
});

test('map:normalize should return [1, 2, 3] when passed data [0.2672612419124244, 0.5345224838248488, 0.8017837257372732]', () => {
  const normalizedData = map.normalize([1, 2, 3]);
  expect(normalizedData[0]).toBeCloseTo(0.2672612419124244);
  expect(normalizedData[1]).toBeCloseTo(0.5345224838248488);
  expect(normalizedData[2]).toBeCloseTo(0.8017837257372732);
});
