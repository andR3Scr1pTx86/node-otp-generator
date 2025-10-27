import { generate } from '../src/functions';

import { MIN_LENGTH, MAX_LENGTH } from '../src/constants'

describe('generate', () => {

    it('should be able of generating all requested character types over multiple attempts', () => {
        let foundNumeric: boolean = false;
        let foundLowerAlphabet: boolean = false;
        let foundUpperAlphabet: boolean = false;
        let foundSpecialChar: boolean = false;

        for (let i = 0; i < 20; i++) {
            const otp = generate(10, {
                numeric: true,
                lowerAlphabet: true,
                upperAlphabet: true,
                specialChar: true,
            });

            if (otp.match(/\d/)) foundNumeric = true;
            if (otp.match(/[a-z]/)) foundLowerAlphabet = true;
            if (otp.match(/[A-Z]/)) foundUpperAlphabet = true;
            if (otp.match(/[!@#$%&*]/)) foundSpecialChar = true;

            if (foundNumeric && foundLowerAlphabet && foundUpperAlphabet && foundSpecialChar) {
                break
            }
        }

        expect(foundNumeric).toBe(true);
        expect(foundLowerAlphabet).toBe(true);
        expect(foundUpperAlphabet).toBe(true);
        expect(foundSpecialChar).toBe(true);
    });

    it('should be able to generate only upper alphabet and numbers characters', () => {
        expect(generate(10, {
            numeric: false,
            lowerAlphabet: false,
            upperAlphabet: false,
            specialChar: false,
        })).toMatch(/^[0-9A-Z]+$/)
    })

    it('should be able to generate only numbers characters', () => {
        expect(generate(10, {
            numeric: true,
            lowerAlphabet: false,
            upperAlphabet: false,
            specialChar: false,
        })).toMatch(/^[0-9]+$/)
    })

    it('should throw an error if the length is a decimal number', () => {
        expect(() => generate(4.2)).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is zero', () => {
        expect(() => generate(0)).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is a negative number.', () => {
        expect(() => generate(-10)).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is less than the minimum allowed', () => {
        expect(() => generate(MIN_LENGTH - 1)).toThrow(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    });

    it('should throw an error if the length is greater than the maximum allowed', () => {
        expect(() => generate(MAX_LENGTH + 1)).toThrow(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    });
})