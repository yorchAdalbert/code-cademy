'use strict';
const { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./lib/cooking');

const severDinner = async () => {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

severDinner();