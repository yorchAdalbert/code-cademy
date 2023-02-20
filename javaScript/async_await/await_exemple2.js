const { shopForBeans } = require('./lib/beans_lib');

// This function in not using async await it gonna print 1, 3, 2
const getBeansNoAwait = () => {
    console.log('1. Heading to the store to buy beans...');

    let value = shopForBeans();

    console.log(`3. Great I'm making ${value} beans for dinner tonight!`)

}

// This function is using await... printing 1, 2, 3
const getBeansAwait = async () => {
    console.log('1. Heading to the store to buy beans...');

    let value = await shopForBeans();

    console.log(`3. Great I'm making ${value} beans for dinner tonight!`)

}

// getBeansNoAwait();
getBeansAwait();