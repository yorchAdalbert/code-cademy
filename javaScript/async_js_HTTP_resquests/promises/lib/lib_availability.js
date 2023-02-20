const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`)

    return new Promise((res, rej) => {
        setTimeout(() => {

            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                res(itemName);
            } else {
                rej(`Error: ${itemName} is unavailable from ${distributorName} at this time.`)
            }
        }, 1000);
    });
};

restockSuccess = () => Math.random() * .2;

module.exports = { checkAvailability };