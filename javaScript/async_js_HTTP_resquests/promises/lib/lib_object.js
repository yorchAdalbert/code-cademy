const store = {
    sunglasses: {
        inventory: 817,
        cost: 9.99
    },
    pants: {
        inventory: 236,
        cost: 7.99
    },
    bags: {
        inventory: 17,
        cost: 12.99
    }
};

const checkInventory = order => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const items = order.items;
            let inStock = items.every(item => store[item[0]].inventory >= item[1])

            if (inStock) {
                let total = 0;

                items.forEach(item => {
                    total += item[1] * store[item[0]].cost;
                });

                console.log(`All of the items are in stock. The total cost of the order is ${total}`);
                res([order, total]);

            } else {
                rej('We\'re sorry. Your order could not be completed because some items are sold out.')

            }

        }, generateRandomDelay());
    });
};

const processPayment = responseArray => {
    const order = responseArray[0];
    const total = responseArray[1];

    return new Promise((res, rej) => {
        setTimeout(() => {
            let hasEnoughMoney = order.giftCardBalance >= total;

            if (hasEnoughMoney) {
                console.log('Payment processed with gift card. Generating shipping label.')

                let trackingNum = generateTrackingNumber();

                res([order, trackingNum]);
            } else {
                rej('Cannot process order: gift card balance was insufficient.');
            }
        }, generateRandomDelay());
    });
};

const shipOrder = responseArray => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`The order has been shipped. The tracking number is: ${trackingNum}`);
        }, generateRandomDelay());
    });
};

generateRandomDelay = () => Math.floor(Math.random() * 2000);
generateTrackingNumber = () => Math.floor(Math.random() * 1000000);


module.exports = { checkInventory, processPayment, shipOrder };