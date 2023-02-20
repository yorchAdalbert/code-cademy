const { shopForBeans, soakTheBeans, cookTheBeans } = require('./lib/beans_lib');

const makeBeans = async () => {
    const beanType = await shopForBeans();
    const isBeanSoftened = await soakTheBeans(beanType);
    const dinner = await cookTheBeans(isBeanSoftened);

    console.log(dinner)
}

makeBeans();