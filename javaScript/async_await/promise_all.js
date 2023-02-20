const { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./lib/cooking');

const serveDinnerAgain = async () => {
    const promises = [steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]
    const foodArray = await Promise.all(promises);

    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)

}

serveDinnerAgain();