// importing the assert from node.js
const assert = require('assert');
const { describe, it } = require('mocha');

describe('+', () => {
    it('returns the sum of its arguments', () => {
        // Code assertion here
        assert.ok(4 + 4 === 8);
    })
})