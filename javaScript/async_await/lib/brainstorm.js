const brainStormDinner = () => {
    return new Promise((res, rej) => {
        console.log('I have to decide what\'s for dinner...')

        setTimeout(() => {
            console.log('Should I make salad...?')
            setTimeout(() => {
                console.log('Should I make ramen...?')
                setTimeout(() => {
                    console.log('Should I make eggs...?')
                    setTimeout(() => {
                        console.log('Should I make chicken...?')
                        res('beans')
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    })
}

module.exports = brainStormDinner;