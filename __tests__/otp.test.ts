import { generate } from '../src/functions';

describe('generate', () => {
    it('should create a simple otp code only with numbers', () => {
        const result = generate()

        expect(typeof result).toBe('string')
        expect(result).toMatch(/^\d+$/)
        expect(result).toHaveLength(6)
    })
})