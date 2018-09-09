import * as labeled from '../../src/models';


test('model:LabeledData should throw TypeError when not passed any params', () => {
  expect(labeled.LabeledData).toThrow(TypeError);
});

test('model:LabeledData should set label = "age" and value = 36', () => {
  const age = new labeled.LabeledData('age', 36);
  expect(age.label).toBe('age');
  expect(age.value).toBe(36);
});

test('model:LabeledData should set label = "is-online" and value = false', () => {
  const age = new labeled.LabeledData('is-online', false);
  expect(age.label).toBe('is-online');
  expect(age.value).toBe(false);
});

test('model:LabeledData should set label = "is-online" and value = true', () => {
  const age = new labeled.LabeledData('is-online', true);
  expect(age.label).toBe('is-online');
  expect(age.value).toBe(true);
});

test('model:LabeledData should set label = "name" and value = "Joe"', () => {
  const age = new labeled.LabeledData('name', 'Joe');
  expect(age.label).toBe('name');
  expect(age.value).toBe('Joe');
});
