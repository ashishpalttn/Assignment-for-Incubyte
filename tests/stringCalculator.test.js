const stringCalculator = require('../src/stringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('should return the number when a single number is provided', () => {
    expect(stringCalculator.add("5")).toBe(5);
});