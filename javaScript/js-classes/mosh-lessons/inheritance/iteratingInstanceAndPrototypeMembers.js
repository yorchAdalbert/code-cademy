'use strict';

function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);

// Returns instance members form the object
console.log(Object.keys(c1));

// To get all the instance and prototype members from an object
for (let key in c1) console.log(key);

// Own is the same as instance
console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));