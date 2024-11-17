const stringCalculator = require('../src/stringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('should return the number when a single number is provided', () => {
    expect(stringCalculator.add("5")).toBe(5);
});

test('should return the sum of two common-separated numbers',()=>{
    expect(stringCalculator.add("1,5")).toBe(6);
})

test('should return the sum of multiple comma-separated numbers', () => {
    expect(stringCalculator.add("10,20,30")).toBe(60);
});

test('should throw an exception for negative numbers', () => {
    expect(() => stringCalculator.add("1,-5")).toThrow("Negatives not allowed: -5");
});

test('should throw an exception for all negative numbers', () => {
    expect(() => stringCalculator.add("1, -5, -10")).toThrow("Negatives not allowed: -5, -10");
})