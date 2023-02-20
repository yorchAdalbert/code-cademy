# Error Handling

## Runtime Errors

When you execute code and a line of code throws an error that stops the program,
that error is referred to as runtime error.

'''
        Error Location
              |
        -------------------
        /documents/app.js:1
                  ------- -
                      |   |_ Line number
                  File name

        ReferenceError: myVariable is not defined
        --------------  -------------------------
                |                   |
            error name      error message
'''

+ **ReferenceError**
        When a variable or function cannot be found
+ **TypeError**
        When a value is not a valid type

> JavaScript errors are objects that have a name and message property.

## The throw keyword

Creating an error does not cause our program to stop, remember, an error must be thrown
for it to halt the program.

'''
    throw Error('Something wrong happened');
    console.log('This will never run');
'''
The console.log() will never be printed cause the throw error will stop the program

## The try...catch statement

We use try and catch to anticipate and handle errors.

