'use strict';
const { cookBeanSouffle } = require('./lib/beans_lib');

const hostDinnerParty = async () => {
    try {
        let dinner = await cookBeanSouffle();
        console.log(`${dinner} is served!`)
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}

hostDinnerParty();