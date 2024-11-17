const stringCalculator = {
    add: (numbers) => {
        if(numbers === ""){
            return 0;
        }
        const numbersArray = numbers.split(",").map(Number);
        const negativeNumbers = numbersArray.filter((number) =>number < 0);
        if(negativeNumbers.length >0){
            throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
        }
        return numbersArray.reduce((sum, number) => sum + number, 0)
    }
};

module.exports = stringCalculator;