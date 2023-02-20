# NODE assert functions

The functions in the **assert** library compare values and throw errors as needed
using one function call.

## assert.ok()

'''
    assert.ok(6 - 1 === 5);
'''
If the argument passed to the function evaluates to *false*, an **AssertionError**
is thrown. The error communicates to mocha, and mocha logs the error to the console. 
See this function in action on the file index_test.js

## assert.equal()

You can use the **.equal()** function for comparison. With this function you can achieve
a more expressive line of code. this method uses loose equality(==).

'''
    assert.equal(landAnimal[2], waterAnimal[2]);
'''

## assert.strictEqual()

If you need to be strict in evaluating equality, you most use this method. The recommendation
is to use always *.strictEqual()* to avoid unexpected results.

'''
    const a = 3;
    const b = '3';
    assert.strictEqual(a, b);
    This will throw an error.
'''

## assert.deepEqual()

If you try to compare the values from objects with the *.equal()* and *.strictEqual()* functions,
you will get an error, because distinct objects are not considered equal.

If you need to compare objects you most need to use the **.deepEqual()** method, this method compares
the values of each object using loose equality (==)

'''
    const a = {relation: 'twin', age: '17'};
    const b = {relation: 'twin', age: '17'};
    assert.deepEqual(a, b);
'''

You can use this method with array as well, though arrays are also objects

'''
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, '3'];
    assert.deepEqual(arr1, arr2);
'''

This will not throw an error, though you are using loose equality within this method

## assert.notEqual()

This method is the same as:
    ( 1 != 1 )

if you need to see more assert method visit this node documentation

[see more assert methods](https://nodejs.org/api/assert.html)