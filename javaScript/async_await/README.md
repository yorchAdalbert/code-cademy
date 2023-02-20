# ASYNC AWAIT

## The async keyword

async functions always return a promise. You can use traditional promise syntax,
like *.then()* and *.catch()* .
async function returns one of three possible values...

+ If not return -> it'll return a **undefined** promise
+ If non-promise value returned -> It'll return a promise resolved value
+ If promise returned from the function -> It'll simply return that promise.

## async syntax

+ Function declaration
'''
    async function myFunc() {};
'''

+ Function expression
'''
    const myFunc = async () => {}
'''

## The await operator

The **await** keyword can only be used inside the body of an async function.
**await** is an operator, it returns the resolved value of a promise.
The purpose of **await** is to halts the execution of the async function until a given promise
is resolved.

## Handling Errors

With **async...await** we use **try...catch** statements for error handling, with this you're gonna be
able to handle errors to both asynchronous and synchronous code. This is use mainly on long chain async statements.

You can also use **.catch** with any async function since it returns a promise.

## Concurrency

Within an async function, you can make that two or more promises returned from another functions, can run simultaneously.
This is called concurrency, the ability ro perform asynchronous actions at the same time.

'''
    const concurrent = async () => {
        const firstPromise = firstAsyncThing();
        const secondPromise = secondAsyncThing();

        console.log(await firstPromise, await secondPromise);
    }
'''

## Await Promise.all()

This is another way to take advantage of concurrency on multiple promises which can be executed simultaneously.

**Promise.all()** takes an array of promises as argument and returns an array of resolved values.
This method also has the benefit of falling fast.
**Promise.all()** is a good choice if multiple asynchronous tasks are all required, but none must wait for any
other before executing.