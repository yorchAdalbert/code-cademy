'use strict';

//Constructing an Error

// Error function takes an argument of a string which become the value of
// error's message property. you can call the error message with keyword new or alone.
console.log(Error('Your password is too weak'));
console.log(new Error('Your password is too weak'));

// Try and Catch

try {
    throw Error('This error will get caught');
} catch (e) {
    console.log(e);
}

console.log('The thrown error that was caught in the try...catch statement!');