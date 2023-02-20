const assert = require('assert');
const { describe, it } = require('mocha');

describe('Array', () => {
    describe('.indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
    })
})

describe('+', () => {
    it('returns the sum of its arguments', () => {
        assert.ok(3 + 4 === 8)
    })
})