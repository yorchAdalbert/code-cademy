// You can call a static method directly form  a class without the need of an instance

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    // The static keyword is used to create a static method
    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random() * names.length);

        return names[randomNumber];
    }
}

const name = Animal.generateName();

console.log(name);