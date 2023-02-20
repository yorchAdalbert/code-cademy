'use strict';

const shopForBeans = () => {
    return new Promise((res, rej) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];

        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * beanTypes.length);
            let beanType = beanTypes[randomIndex];

            console.log(`2. I bought ${beanType} beans because they were on sale.`);

            res(beanType);
        }, 1000)
    })
}

const soakTheBeans = beanType => {
    return new Promise((res, rej) => {
        console.log('Time to cook the beans.')

        setTimeout(() => {
            console.log(`...The ${beanType} beans are softened.`)

            res(true)
        }, 1000)
    })
}

const cookTheBeans = isSoftened => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (isSoftened) console.log('...the beans are cooked!')

            res('\n\nDinner is served!')
        }, 1000)
    })
}

const cookBeanSouffle = () => {
    return new Promise((res, rej) => {
        console.log('Fingers crossed... Putting the Bean Souffle in the oven.');
        setTimeout(() => {
            let success = randomSuccess();

            if (success) res('Bean Souffle');
            else rej('Dinner is ruined');

        }, 1000)
    })
}

let randomSuccess = () => {
    let num = Math.random();

    return num < .5 ? true : false;
}

module.exports = { shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle };