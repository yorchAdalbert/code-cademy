const assert = require('assert');

describe('messing around with hooks', () => {
    // variable used in both tests
    let testValue;

    beforeEach(() => {
        testValue = 5;
    })

    it('Should add', () => {
        testValue += 5;
        assert.equal(testValue, 10)
    })

    it('it should multiply', () => {
        testValue *= 5;
        assert.equal(testValue, 25);
    })
})