const assert = require('assert');
const Calculate = require('./index');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('test if the output of 5! is equal to 120', () => {
            // Setup
            const expected = 120;
            const input = 5;

            // Exercise
            const result = Calculate.factorial(input)

            // Verify
            assert.equal(result, expected);
        })

        it('test if the output of 3! is equal to 6', () => {
            // Setup
            const expected = 6;
            const input = 3;

            // Exercise
            const result = Calculate.factorial(input)

            // Verify
            assert.equal(result, expected);
        })

        it('test if the output of 0! returns 1', () => {
            // Setup
            const expected = 1;
            const input = 0;

            // Exercise
            const result = Calculate.factorial(input)

            // Verify
            assert.equal(result, expected);
        })
    })
})