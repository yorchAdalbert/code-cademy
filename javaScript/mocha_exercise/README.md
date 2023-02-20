# USING MOCHA

Remember to add this script into package.json to make the mocha works correctly
'''
    "test": "mocha 'exercise/**/*.js'"
'''
## Main phases of a test

+ setup
+ execute
+ verify
+ teardown

## Teardown

In most situations you will need to write many test for a particular feature
that get executed in succession. That means that you can use one or more it blocks
within the describe() block. See file file_test.js

Running multiple tests can introduce issues if the tests make changes to the testing
environment, changes to the environment in one test might affect the next test like this ones:

+ Altering files and directory structure
+ Changing read and write permissions on a file
+ editing records in a database

To address this issues, you need to add a *teardown* step to the end of your test.
This *teardown* phase makes your test isolated by resetting the environment before the next test runs.
This provides two key benefits

+ Changes to the environment caused by one test do not affect the other tests.
+ Isolated tests can be executed in any order


## Hooks

The mocha framework provides functions that enable us to reduce repetition, simplify the scope of each
test, and more finely control the execution of our tests.

These functions are referred as *hooks*

+ **beforeEach(callback) - callback** is run before each test
+ **afterEach(callback) - callback** is run after each test
+ **before(callback) - callback** is run before the first test
+ **after(callback) - callback** is run after the last test

Each hook accepts a callback to be executed at various times during a test. The *before...* hooks naturally happen
before tests and are useful for separating out the setup steps of your tests.
The *after...* hooks are executed after tests and are useful for separating out the teardown steps of your tests.