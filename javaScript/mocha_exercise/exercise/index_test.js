const assert = require('assert');
const { describe, it } = require('mocha');

// Naive approach
describe('.pop', () => {
    it('returns the last element in the array [naive]', () => {
        const arr = ['padawan', 'knight'];
        assert.ok(arr.pop() === 'knight');
    })
})


// 3 phase approach
describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
        // Set up
        const knightString = 'knight';
        const jediPath = ['padawn', knightString];

        // Exercise
        const popped = jediPath.pop();

        // Verify
        assert.ok(popped === knightString);
    })
})