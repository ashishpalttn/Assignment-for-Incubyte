const stringCalculator = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});