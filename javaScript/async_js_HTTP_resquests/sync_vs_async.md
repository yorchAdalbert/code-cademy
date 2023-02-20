# General Asynchronous Programming concepts

## What is Synchronous code?

Synchronous code executes in sequential order - it starts with the code at the top
of the file and executes line by line until it gets to the end of the file.
This is also known as **blocking or blocking code**

## What is Asynchronous code?

Asynchronous code can be executed in parallel to other code that is already running.
Without the need to wait for other code to finish before executing.
This is also known as **non-blocking** code.


## Asynchronous code in with javaScript

JavaScript is a single-threaded language.
JavaScript uses the event loop to accomplishes asynchronous code.

## Asynchronous Callbacks

JavaScript accomplishes asynchronicity using this type of callback functions (web API's) that executes after
a specific condition is met. such as addEventListener, 

'''
    easterEgg.addEventListener('click', () => {
         console.log('Up, Up, Down, Down, Left, Right, Left, Right, B, A');
    });
'''

JavaScript can also accomplishes asynchronicity with this functions (Web API's):

+ setTimeout(() => {}, milliseconds)
    it takes a callback function, the code to execute after a given time - in milliseconds
+ setInterval(() => {}, milliseconds)
    it takes a callback function, the code to execute and the given time in which the execution code
    will be executed again.
