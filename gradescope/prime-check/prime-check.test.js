const w = require('jest-autograding-reporter').weight
const primeCheck = require('./prime-check');

describe('primeCheck', () => {
    it(w(2, 'checking prime numbers'), () => {
        expect(primeCheck(1)).toBe('1 is a prime number.');
        expect(primeCheck(3)).toBe('3 is a prime number.');
        expect(primeCheck(97)).toBe('97 is a prime number.');
        expect(primeCheck(787)).toBe('787 is a prime number.');
        expect(primeCheck("97")).toBe('97 is a prime number.');

    })

    it(w(2, 'checking  zeros  and negatives'), () => {
        expect(primeCheck(-5)).toBe('Zeros and negatives are not prime numbers.');
        expect(primeCheck("0")).toBe('Zeros and negatives are not prime numbers.');
        expect(primeCheck(0)).toBe('Zeros and negatives are not prime numbers.');


    })

    it(w(2, 'checking  non-numbers'), () => {
        expect(primeCheck("Zero")).toBe('Zero is not a number.');
        expect(primeCheck("five")).toBe('five is not a number.');
        expect(primeCheck("%")).toBe('% is not a number.');


    })

    it(w(2, 'checking  non-primes'), () => {
        expect(primeCheck(68)).toBe('68 is not a prime number.');
        expect(primeCheck(99)).toBe('99 is not a prime number.');
        expect(primeCheck(105)).toBe('105 is not a prime number.');
        expect(primeCheck("1477")).toBe('1477 is not a prime number.');


    })
})