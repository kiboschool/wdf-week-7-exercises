/**
 * checkPalindrome - A function that determines if a given input is a palindrome 
 * 
 *
 */




function checkPalindrome(userInput){

    userInputLower =userInput.toLowerCase();
    splitInput = userInputLower.split('');
    reverseInput = splitInput.reverse().join('');
    if (reverseInput === userInputLower ){
        return `${userInput} is a palindrome.`;
        

    }
    else{
        return `${userInput} is not a palindrome.`;
    }
    
   
}

module.exports = checkPalindrome