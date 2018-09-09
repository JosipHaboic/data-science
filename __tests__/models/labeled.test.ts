import * as labeled from '../../src/models';


test('model:LabeledData should throw TypeError when not passed any params', () => {
  expect(labeled.LabeledData).toThrow(TypeError);
});

test('model:LabeledData should set label = "age" and value = 36', () => {
  const age = new labeled.LabeledData('age', 36);
  expect(age.label).toBe('age');
  expect(age.value).toBe(36);
});
