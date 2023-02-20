# JavaScript Promises

## What is a Promise?

Promises are objects that represent the eventual outcome of an asynchronous operation.
Promise states:

+ Pending
    The initial state operation
+ Fulfilled
    The operation has completed successfully.
+ Rejected
    The operation has failed


we refer to a promise as settled if it is no longer pending.

## Consuming Promises

The initial state of an asynchronous promise is *pending*, but after that the promise will 
settle, meaning that the promise has some data to work on!. 

When the promise is settled we use the **.then()** function, this function is a higher-order function
that takes two callback functions as arguments also called as handlers.

+ First-handler
    Also called *onFulfilled* is a success handler.
+ Second-handler
    Also called *onRejected* is a failure handler.

You can invoke .then() with one, both, or neither handler!
If the .then() is invoked with no handlers, this will return a promise with the same settled
values as the promise it was called on.

