import * as bin from '../../src/transform/bin';


const dataEvenSize = [1, 2, 3, 4];
const dataOddSize = [1, 2, 3, 4, 5];


test('function bin.Unsupervised throws TypeError when not passed any param', () => {
  expect(bin.Unsupervised.interval).toThrow(TypeError);
})

test(`function bin.Unsupervised returns [[1, 2], [3, 4]] when passed data=${dataEvenSize}, k=2 `, () => {
  expect(bin.Unsupervised.interval(dataEvenSize, 2)).toEqual([[1, 2], [3, 4]]);
})

test(`function bin.Unsupervised returns [[1, 2], [3, 4, 5]] when passed data=${dataOddSize}, k=2 `, () => {
  expect(bin.Unsupervised.interval(dataOddSize, 2)).toEqual([[1, 2, 3], [4, 5]]);
})

test(`function bin.Unsupervised returns [[1, 2],[3], [4]] when passed data=${dataEvenSize}, k=3 `, () => {
  expect(bin.Unsupervised.interval(dataEvenSize, 3)).toEqual([[1, 2], [3, 4], []]);
})

test(`function bin.Unsupervised returns [[1, 2], [3, 4], [5]] when passed data=${dataOddSize}, k=3 `, () => {
  expect(bin.Unsupervised.interval(dataOddSize, 3)).toEqual([[1, 2], [3, 4], [5]]);
})
