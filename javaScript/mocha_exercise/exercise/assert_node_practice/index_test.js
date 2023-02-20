const assert = require('assert');

describe('-', () => {
    it('returns the difference of two values', () => {
        const bigNum = 100;
        const smallNum = 4;
        const expected = 96;

        const result = bigNum - smallNum;


        // assert.ok(result === expected);
        // Using assert.equal() To get the same result
        // assert.equal(result, expected); - Replacing with .strictEqual()
        assert.strictEqual(result, expected);
    })
})