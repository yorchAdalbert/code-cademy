const cookBeans = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('beans');
        }, 1000)
    })
};

const steamBroccoli = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('broccoli');
        }, 1000)
    })
};

const cookRice = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('rice');
        }, 1000)
    })
};

const bakeChicken = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('chicken');
        }, 1000)
    })
};

module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken };