# Week 7 Exercises

This week, the mandatory exercises are:

1. **Prime Checker**: In this exercise, you will write a program to determine if a given number is a prime number. You will also need to check if the given input is a number.

1. **Palindrome Checker**: In this exercise, you will write a program to determine if a given input is a palindrome. 

1. **Three-digit Armstrong**: In this exercise, you will write a program to determine if a given number is an Armstrong number. You will also need to check if the given input is a three-digit number.

<!-- 1. **Math Helper**:In this exercise you will write a program to help calculate different math functions. This exercise combines the other three exercises in this week, namely, the Prime  Checker, Palindrome Checker and the Three-digit Armstrong. Given a single interface, a user can specify which of the three math functions to be computed and the appropriate answer will be generated. -->



## Testing

1. Navigate your terminal to the parent exercise folder for the week (not the individual exercise).

1. Install the project dependencies by running `npm install`

1. To run all tests for the week, run `npm run test`

1. To run the test for a specific exercise, you need to specify the path to the exercise folder, run `npm run test exercise-folder`. For example, run `npm run test chicken-peanut-stew`

<!-- To check that your solution meets the criteria, run `npm run test` in the console. (If you haven't already, you'll need to run `npm install` to install the packages required for testing). -->

**Running all tests for the week**: If your solutions have all the required elements it should say something like:


```txt
> test
> jest

 PASS  armstrong-number/armstrong-number.test.js
 PASS  prime-check/prime-check.test.js
 PASS  palindrome-check/palindrome-check.test.js

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.909 s, estimated 1 s
Ran all test suites.
```

**Running an individual test**: If your solution for a given exercise has all the required elements it should say something like:

```txt
> test
> jest prime-check

 PASS  prime-check/prime-check.test.js
  primeCheck
    ✓ checking prime numbers (4 ms)
    ✓ checking  zeros  and negatives
    ✓ checking  non-numbers (1 ms)
    ✓ checking  non-primes (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.371 s, estimated 1 s
Ran all test suites matching /prime-check/i.
```


If it does not pass one of the tests, you should get some feedback about what is wrong or missing in your solution.


## Submission
In order to get credit for your project, you must:
- push your code to Github Classroom
- submit your work in Gradescope
- submit your project in Woolf

Note that this assignment is automatically graded and you will see your grade shortly after submitting to Gradescope. You have unlimited number of attempts, therefore you are enouraged to modify your work and resubmit as much as possible, before the due date.



