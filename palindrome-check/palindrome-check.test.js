const w = require('jest-autograding-reporter').weight
const checkPalindrome = require('./palindrome-check');

describe('checkPalindrome', () => {
    it(w(1, 'checking palindromes 1'), () => {
        expect(checkPalindrome("madam")).toBe('madam is a palindrome.');
        expect(checkPalindrome("civic")).toBe('civic is a palindrome.');
    })

    it(w(1, 'checking palindromes 2'), () => {
        expect(checkPalindrome("noon")).toBe('noon is a palindrome.');
        expect(checkPalindrome("racecar")).toBe('racecar is a palindrome.');
        expect(checkPalindrome("Ward Draw")).toBe('Ward Draw is a palindrome.');
        expect(checkPalindrome("mom")).toBe('mom is a palindrome.');

    })

    it(w(1, 'checking non palindromes'), () => {
        expect(checkPalindrome("ate")).toBe('ate is not a palindrome.');
        expect(checkPalindrome("race")).toBe('race is not a palindrome.');
        expect(checkPalindrome("Ward")).toBe('Ward is not a palindrome.');
        expect(checkPalindrome("mommy")).toBe('mommy is not a palindrome.');

    })
})