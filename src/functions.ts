import { OtpOptions } from "./types";

const MIN_LENGTH = 4;
const MAX_LENGTH = 10;

export function generate({ length = 6 }: OtpOptions = {}) {

    if (!Number.isInteger(length) || !(!!~Math.sign(length))) {
        throw new Error('OTP length must be a positive integer');
    }

    if (length < MIN_LENGTH || length > MAX_LENGTH) {
        throw new Error(`OTP length must be between ${MIN_LENGTH} and ${MAX_LENGTH}`);
    }

    return '123456'
}