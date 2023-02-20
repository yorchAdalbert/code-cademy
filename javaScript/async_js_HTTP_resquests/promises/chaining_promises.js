const { checkInventory, processPayment, shipOrder } = require('./lib/lib_object');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftCardBalance: 79.82
}

// This technique is called composition, and is a great way to handle situations
// where asynchronous operations depend on each other or execution order matters.
checkInventory(order)
    .then(resolvedValueArray => processPayment(resolvedValueArray))
    .then(resolvedValueArray => shipOrder(resolvedValueArray))
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.log(errorMessage))