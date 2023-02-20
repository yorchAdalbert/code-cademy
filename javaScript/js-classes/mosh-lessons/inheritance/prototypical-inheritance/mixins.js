// Creating the mixin function  
// ... rest operator
function mixin(target, ...sources) {
    // ... spread operator is to spread an array into multiple elements
    Object.assign(target, ...sources);
}

// Crating objects as features
const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
}

// The assign is used to copy the properties and methods from one object ot another
// It needs an empty object as the target, and then past one or more source objects.
// Then you need to assign it to a new object
const person = Object.assign({}, canEat, canWalk);

// Using the constructor method
function Animal() { }
Object.assign(Animal.prototype, canEat, canWalk);


// Now with the mixin function 
function GoldFish() { }
mixin(GoldFish.prototype, canEat, canSwim);



const dog = new Animal();
const goldFish = new GoldFish();

console.log(person);
console.log(dog);
console.log(goldFish);
dog.canEat();
dog.canWalk();