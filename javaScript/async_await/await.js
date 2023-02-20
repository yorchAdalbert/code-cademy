const brainStormDinner = require('./lib/brainstorm');

const announceDinner = async () => {
    let meal = await brainStormDinner()

    console.log(`I'm going to make ${meal} for dinner.`)
};

announceDinner();