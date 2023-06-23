/**
 * primeCheck - A function that determines if a given number is a prime Number.
 *
 * @param {number} num - The number to be checked
 * 
 *
 */

function primeCheck(userInput){
    const number = parseInt(userInput);

    if (isNaN(number)){
        return `${userInput} is not a number.`;
    }      
    else if (number == 1){
        return`${number} is a prime number.`;
    }
    else if (number > 1){
        for (var i = 2; i< number/2; i++){
            if (number % i == 0){
                return `${number} is not a prime number.`;
            }
            
        }return `${number} is a prime number.`;
    }
    else{
        return "Zeros and negatives are not prime numbers."
    }

}

module.exports = primeCheck