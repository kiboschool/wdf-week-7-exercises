const w = require('jest-autograding-reporter').weight
const checkArmstrong = require('./armstrong-number');

describe('checkArmstrong', () => {
    it(w(2, 'checking armstrong numbers'), () => {
        expect(checkArmstrong(153)).toBe('153 is an Armstrong number.');
        expect(checkArmstrong(370)).toBe('370 is an Armstrong number.');
        expect(checkArmstrong(371)).toBe('371 is an Armstrong number.');
        expect(checkArmstrong(407)).toBe('407 is an Armstrong number.');
    })

    it(w(2, 'checking  numbers'), () => {
        expect(checkArmstrong("Arm")).toBe('Arm is not a number.');
        expect(checkArmstrong("number")).toBe('number is not a number.');


    })

    it(w(2, 'checking  non armstrong numbers'), () => {
        expect(checkArmstrong(163)).toBe('163 is not Armstrong!!!');
        expect(checkArmstrong(237)).toBe('237 is not Armstrong!!!');
        expect(checkArmstrong(555)).toBe('555 is not Armstrong!!!');


    })

    it(w(2, 'checking  non three digit numbers'), () => {
        expect(checkArmstrong(68)).toBe('68 is not a three-digit number.');
        expect(checkArmstrong(99)).toBe('99 is not a three-digit number.');
        expect(checkArmstrong(10)).toBe('10 is not a three-digit number.');


    })
})