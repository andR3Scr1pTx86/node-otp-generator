import { generate } from '../src/functions';

import { MIN_LENGTH, MAX_LENGTH } from '../src/constants'

describe('generate', () => {
    it('should be able to generate all types of characters', () => {
        const otp = generate({
            length: 10,
            numeric: true,
            lowerAlphabet: true,
            upperAlphabet: true,
            specialChar: true,
        })

        expect(otp).toMatch(/[a-z]/);
        expect(otp).toMatch(/[A-Z]/);
        expect(otp).toMatch(/\d/);
        expect(otp).toMatch(/[!@#$%&*]/);
    })

    it('should be able to generate only upper alphabet and numbers characters', () => {
        const otp = generate({
            length: 10,
            numeric: false,
            lowerAlphabet: false,
            upperAlphabet: false,
            specialChar: false,
        })

        expect(otp).toMatch(/^[0-9A-Z]+$/)
    })

    it('should be able to generate only numbers characters', () => {
        const otp = generate({
            length: 10,
            numeric: true,
            lowerAlphabet: false,
            upperAlphabet: false,
            specialChar: false,
        })

        expect(otp).toMatch(/^[0-9]+$/)
    })

    it('should throw an error if the length is a decimal number', () => {
        expect(() => generate({ length: 4.2 })).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is zero', () => {
        expect(() => generate({ length: 0 })).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is a negative number.', () => {
        expect(() => generate({ length: -10 })).toThrow('OTP length must be a positive integer');
    });

    it('should throw an error if the length is less than the minimum allowed', () => {
        expect(() => generate({ length: MIN_LENGTH - 1 })).toThrow(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    });

    it('should throw an error if the length is greater than the maximum allowed', () => {
        expect(() => generate({ length: MAX_LENGTH + 1 })).toThrow(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    });
})