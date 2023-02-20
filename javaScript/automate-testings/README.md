# AUTOMATE AND ORGANIZE TESTS

## Install Mocha

To install mocha we need node.js and npm
> JavaScript project is a directory of files.

+ npm init -y
+ npm install mocha -D

After installing mocha as a dependency you can run it in two ways.

+ Call it directly from  **node_modules** This the most tedious way
+ Add a script to **package.json** This is the most recommended
+ Add this line in the script to get the script works, it needs the
  dir's name in which the test is located and the file extension.

'''
    "scripts": {
        "test": "mocha 'dirname/**/*.js'"
    }
'''

+ Now you can call mocha with the following command
'''
    npm test
'''

## describe and it blocks

In Mocha we group tests using the **describe** function and define tests
using the **it** function

These two functions can be used to make your test suite complete.

+ Structure your test suite: you can organize tests into nested groups that reflect the
                             structure of your implementation code.
+ Provide informative messages: you can define your tests using human-readable strings.

You can this in action in the file index_test.js 