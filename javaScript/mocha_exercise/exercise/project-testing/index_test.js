const assert = require('assert');
const Rooster = require('./index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooter call', () => {
            // Setup
            const expected = 'cock-a-doodle-doo!';

            // exercise
            const result = Rooster.announceDawn();

            // Verify
            assert.equal(expected, result);
        })
    });

    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            // Setup
            const expected = '5';

            // Exercise
            const result = Rooster.timeAtDawn(5);

            // Verify
            assert.strictEqual(expected, result);

        })

        it('returns its argument as a string', () => {
            assert.throws(
                () => {
                    Rooster.timeAtDawn(-1);
                },
                {
                    name: 'TypeError',
                    message: 'Wrong value'
                }
            )
        })

        it('returns its argument as a string', () => {
            assert.throws(
                () => {
                    Rooster.timeAtDawn(25);
                },
                {
                    name: 'TypeError',
                    message: 'Wrong value'
                }
            )
        })
    })
})