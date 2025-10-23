import { generate } from '../src/functions';

describe('generate', () => {
    it('should create a simple otp code only with numbers', () => {
        const result = generate({ length: 6 })

        expect(result).toMatch(/^\d+$/)
        expect(result).toHaveLength(6)
    })
})