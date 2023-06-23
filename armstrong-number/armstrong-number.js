/**
 * checkArmstrong - A function that determines if a given number is three-digit armstrong number.
 *
 * @param {number} num - The number to be checked
 * 
 *
 */

function checkArmstrong(userInput){
    let sumOfNumbers = 0;


    if (isNaN(userInput)){
        // alert("got yours");
        return `${userInput} is not a number.`;
    } 
    else if((/^\d{3}$/).test(userInput)) {
        // create a temporary variable
        let temp = userInput;
        while (temp > 0) {
            // finding the each digit
            let remainder = temp % 10;

            sumOfNumbers += remainder * remainder * remainder;

            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }
        if(sumOfNumbers == parseInt(userInput)){
            return`${userInput} is an Armstrong number.`;
        }
        else{
            return `${userInput} is not Armstrong!!!`;
        }

    }
    else {
        return `${userInput} is not a three-digit number.`;
    }   
    
}

module.exports = checkArmstrong