import { randomInt } from "crypto";

import { OtpOptions } from "./types";

const MIN_LENGTH = 4;
const MAX_LENGTH = 10;

function onlyNumericOTP(length: number): string {
    const [min, max] = [Number(10n ** BigInt(length - 1)), Number(10n ** BigInt(length) - 1n)]
    return randomInt(min, max + 1).toString()
}

export function generate(options: OtpOptions = {}) {
    const { length = 6, numeric = true } = options

    if (!Number.isInteger(length) || !(!!~Math.sign(length))) {
        throw new Error('OTP length must be a positive integer');
    }

    if (length < MIN_LENGTH || length > MAX_LENGTH) {
        throw new Error(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    }

    if (numeric) return onlyNumericOTP(length)
}

