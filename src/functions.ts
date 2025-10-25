import { randomInt, randomBytes } from "crypto";

import {
    MIN_LENGTH,
    MAX_LENGTH,
    NUMERIC,
    LOWER_ALPHABET,
    UPPER_ALPHABET,
    SPECIAL_CHARS
} from './constants'

import type { OtpOptions } from "./types";

export function generate(options: OtpOptions = {}): string {
    const { length = 6, numeric, lowerAlphabet, upperAlphabet, specialChar } = options

    if (!Number.isInteger(length) || length <= 0) {
        throw new Error('OTP length must be a positive integer');
    }

    if (length < MIN_LENGTH || length > MAX_LENGTH) {
        throw new Error(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    }

    if (!numeric && !lowerAlphabet && !upperAlphabet && !specialChar) {
        return generateString(length, NUMERIC + UPPER_ALPHABET)
    }

    if (numeric && !lowerAlphabet && !upperAlphabet && !specialChar) {
        return generateNumeric(length)
    }

    let characterPoll: string = ''

    if (numeric) characterPoll += NUMERIC
    if (lowerAlphabet) characterPoll += LOWER_ALPHABET
    if (upperAlphabet) characterPoll += UPPER_ALPHABET
    if (specialChar) characterPoll += SPECIAL_CHARS

    return generateString(length, characterPoll)
}

function generateNumeric(length: number): string {
    const [min, max]: [number, number] = [Number(10n ** BigInt(length - 1)), Number(10n ** BigInt(length) - 1n)]
    return randomInt(min, max + 1).toString()
}

function generateString(length: number, pool: string): string {
    let otp: string = '';

    const bytesLimit: number = 256 - (256 % pool.length);
    const bufferSize: number = length * 2

    let bufferIndex: number = 0
    let buffer: Buffer = randomBytes(bufferSize)

    while (otp.length < length) {

        if (bufferIndex >= buffer.length) {
            bufferIndex = 0
            buffer = randomBytes(bufferSize)
        }

        const randomNumber: number = buffer[bufferIndex++];

        if (randomNumber < bytesLimit) {
            otp += pool[randomNumber % pool.length];
        }

    }

    return otp;
}

