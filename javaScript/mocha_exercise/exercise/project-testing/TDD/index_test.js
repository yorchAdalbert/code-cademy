const assert = require('assert');
const Calculate = require('./index');

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of an array of numbers', () => {
            // Setup
            const inputArray = [1, 2, 3];
            const expected = 6;

            // Exercise
            const result = Calculate.sum(inputArray);

            // Verify
            assert.strictEqual(result, expected);
        })

        it('returns the sum of a four-item list', () => {
            // Setup
            const inputArray = [4, 5, 6, 7];
            const expected = 22;

            // Exercise
            const result = Calculate.sum(inputArray);

            // Verify
            assert.strictEqual(result, expected);
        })

        it('returns zero for an empty array', () => {
            // Setup
            const expected = 0;
            const inputArray = [];

            // Exercise
            const result = Calculate.sum(inputArray);

            // Verify
            assert.strictEqual(result, expected);
        })
    })
})