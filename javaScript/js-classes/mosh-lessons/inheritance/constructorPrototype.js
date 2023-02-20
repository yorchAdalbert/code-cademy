'use strict';

// This is the proper way to get the prototype from an object, It needs an object as an argument
// Object.getPrototypeOf(myObj);

function Circle(radius) {
    // Instance members
    this.radius = radius;

    // You can reference a prototype method 
    this.move = function () {
        this.expand();
        console.log('move');
    }
}

/**
 * With this implementation, you create a function on the baseObject ( prototype )
 * This is helpful when you make a lot of instances from your object, this function
 * will not be create in all the instances, this function will only exits on the baseObject
 */
// prototype method members
Circle.prototype.draw = function () {
    // You can reference an instance method from the circle class
    this.move();
    console.log('draw');
}
Circle.prototype.expand = function () {
    console.log('expanding');
}

// Over writing the toString method
Circle.prototype.toString = function () {
    return `Circle with radius ${this.radius}`;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

circle1.draw();
circle2.draw();

console.log(circle1.toString())
console.log(circle2.toString())