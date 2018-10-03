// Quantitative data is numerical information (numbers)
// It can be in these forms:
//    Discrete data can only take certain values (like whole numbers)
//    Continuous data can take any value (within a range)
export type QuantitativeData = {[key: string]: number | number[]};
// example
// const myDog: QuantitativeData = {
//   'legs': 4, // discrete
//   'weight': 25.5, // continous
//   'height': 565 // continous
// };
