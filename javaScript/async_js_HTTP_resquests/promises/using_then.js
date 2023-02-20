const { checkInventory } = require('./lib/lib');

const order = [['sunglasses', 1], ['bags', 2]];
const order2 = [['sunglasses', 1], ['pants', 2]]

const handleSuccess = resValue => console.log(resValue);
const handleFailure = rejValue => console.log(rejValue);

// This is the normal use of the settled promise,
checkInventory(order).then(handleSuccess, handleFailure);

// Using the .catch() with this you get the same result as the previous promise
// This is the cleaner way and follows the principle of separation of concerns. 
checkInventory(order2)
    .then(handleSuccess)
    .catch(handleFailure);

