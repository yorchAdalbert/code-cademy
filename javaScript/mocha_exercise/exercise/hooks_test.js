const assert = require('assert');
const fs = require('fs');
let path, str;

describe('appendFileSync', () => {

    before(() => {
        // Setup
        path = './hook_message.txt';
    });

    afterEach(() => {
        // Teardown: restore file
        fs.unlinkSync(path);
    });

    it('creates a new file with a string of text', () => {

        // Set up
        str = 'Hello Node.js'

        // Exercise: write to file
        fs.appendFileSync(path, str);

        // Verify: compare file contents to string
        const content = fs.readFileSync(path);
        assert.equal(content.toString(), str);

    });

    // Verifies that we can do the same but with an empty string
    it('creates a new file with a string of text', () => {

        // Setup
        str = '';

        // Exercise: write to file
        fs.appendFileSync(path, str);

        // Verify: compare file contents to string
        const contents = fs.readFileSync(path);
        assert.equal(contents.toString(), str);

    });
});