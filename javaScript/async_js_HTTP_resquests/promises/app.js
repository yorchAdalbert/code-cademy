const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}

// The executor function takes two functions as argument
const myExecutor = (res, rej) => {
    if (inventory.sunglasses > 0)
        res('Sunglasses order processed.')
    else
        rej('That item is sold out.')
}

// The Promise object takes as argument a function parameter called the executor function
const orderSunglasses = () => new Promise(myExecutor);

const orderPromise = orderSunglasses();

console.log(orderPromise);