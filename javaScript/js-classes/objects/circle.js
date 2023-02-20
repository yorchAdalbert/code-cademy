'use strict';

function Circle(radius) {
    this.radius = radius;

    // With this implementation you can create private properties and methods 
    let defaultLocation = { x: 0, y: 0 };

    this.draw = function () {
        console.log('draw');
    };

    /*  Getters and setters using Object class, this methods needs
        1 - this            the new object reference
        2 - property name   the name for your getter
        3 - object          with a get function */
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.')

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);

circle.defaultLocation = { x: 1, y: 5 }
console.log(circle.defaultLocation);