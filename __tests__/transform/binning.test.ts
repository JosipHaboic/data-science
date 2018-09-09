import * as binning from '../../src/transform/binning';

const unsupervised = binning.Unsupervised;

const dataEvenSize = [1, 2, 3, 4];
const dataOddSize = [1, 2, 3, 4, 5];


test('function unsupervised:interval: throws TypeError when not passed any param', () => {
  expect(unsupervised.interval).toThrow(TypeError);
})

test(`function unsupervised:interval: returns [[1, 2], [3, 4]] when passed data=${dataEvenSize}, k=2 `, () => {
  expect(unsupervised.interval(dataEvenSize, 2)).toEqual([[1, 2], [3, 4]]);
})

test(`function unsupervised:interval: returns [[1, 2], [3, 4, 5]] when passed data=${dataOddSize}, k=2 `, () => {
  expect(unsupervised.interval(dataOddSize, 2)).toEqual([[1, 2, 3], [4, 5]]);
})

test(`function unsupervised:interval: returns [[1, 2],[3], [4]] when passed data=${dataEvenSize}, k=3 `, () => {
  expect(unsupervised.interval(dataEvenSize, 3)).toEqual([[1, 2], [3, 4], []]);
})

test(`function unsupervised:interval: returns [[1, 2], [3, 4], [5]] when passed data=${dataOddSize}, k=3 `, () => {
  expect(unsupervised.interval(dataOddSize, 3)).toEqual([[1, 2], [3, 4], [5]]);
})
