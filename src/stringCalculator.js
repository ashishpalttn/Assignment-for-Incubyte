const stringCalculator = {
    add: (numbers) => {
        if(numbers === ""){
            return 0;
        }
        const numbersArray = numbers.split(",").map(Number);
        return numbersArray.reduce((sum, number) => sum + number, 0)
    }
};

module.exports = stringCalculator;