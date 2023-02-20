const { checkAvailability } = require('./lib/lib_availability')

const onFulfill = items => {
    console.log(`Items checked: ${items}`);
    console.log(`Every item was available from the distributor. Placing order now.`)
};

const onReject = rejReason => console.log(rejReason);


const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// We use the Promise.all() when dealing with multiple promises, 
// but the execution order does not matter. This method accepts an array of promises as its argument
// and returns a single promise. It could return a resolved value if all of the promises resolve in success
// and returns a rejection is one of the promises fail. This is called a failing fast.
Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject)