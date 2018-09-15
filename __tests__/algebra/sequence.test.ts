import * as sequence from '../../src/algebra/sequence';


test('sequnce:arithmetic - return [1, 2, 3] when (start=1, difference=1, n=3)', () => {
  expect([...sequence.arithmetic(1, 1, 3)]).toEqual([1, 2, 3]);
});


test('sequnce:linear - return [1, 2, 3] when (start=1, intercept=1, n=3)', () => {
  expect([...sequence.linear(1, 1, 3)]).toEqual([1, 2, 3]);
});

test('sequnce:linear - return [2, 3, 4] when (start=1, intercept=2, n=3)', () => {
  expect([...sequence.linear(1, 2, 3)]).toEqual([2, 3, 4]);
});


test('sequnce:triangular - return [1, 3, 6, 10, 15] when (n=5)', () => {
  expect([...sequence.triangular(5)]).toEqual([1, 3, 6, 10, 15]);
});


test('sequnce:square - return [1, 4, 9, 16, 25] when (n=5)', () => {
  expect([...sequence.square(5)]).toEqual([1, 4, 9, 16, 25]);
});


test('sequnce:factorial - return [ 1 ] when (n=1)', () => {
  expect([...sequence.factorial(1)]).toEqual([1]);
});

test('sequnce:factorial - return [ 2, 6, 24, 120, 720, 5040, 40320, 362880 ] when (n=10)', () => {
  expect([...sequence.factorial(10)]).toEqual([ 2, 6, 24, 120, 720, 5040, 40320, 362880 ]);
});
