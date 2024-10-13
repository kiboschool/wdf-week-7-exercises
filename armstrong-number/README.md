# Three-digit Armstrong

In this exercise, you will write a program to determine if a given number is an Armstrong number. You will also need to check if the given input is a three-digit number in the first place.

In recreational number theory, an Armstrong number
(named after Michael F. Armstrong) is a
number that is the sum of its own digits each raised to the power of the number of digits. 

Our focus here, however, is on three-digit numbers only. This means, given a three-digit number, the sum of the cubes of the individual digits must equal to the number itself.
For example, 153 = 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup>; 153 is an armstrong number.
167 on the other hand is not an armstrong number because 1<sup>3</sup> + 6<sup>3</sup> + 7<sup>3</sup> equals 343, not 167. Other examples of armstrong numbrs are: 370, 371 and 407.


## Instructions
1. In this task, you are given a JavaScript file `armstrong-number.js` which contains an incomplete function, `checkArmstrong()`. This function takes one argument `userInput`.


2. Complete the function to determine if a given input is an armstrong number or not:
- the function will return a specific string as appropriate:
    - where the user input is an armstrong number,  return `X is is an Armstrong number.`
         - where `X` stands for the user input
    - if it is not a number  return `X is not a number.`
    - if it is not an armstrong number return `X is not Armstrong!!!`     
    - if the input is not a three-digit positive number, return `X is not a three-digit number.`
- 

## Expected Output
- Given `153` as the input. Output: `153 is an Armstrong number.`
- Given `0` as input. Output: `0 is not a three-digit number.`
- Given `-5` as input. Output: `-5 is not a three-digit number.`

