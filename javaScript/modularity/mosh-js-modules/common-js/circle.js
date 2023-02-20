// Implementation Detail - you are not exporting this code.
const _radius = new WeakMap();

// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`);
    }
}

// This is exporting an object with more than one property
// module.exports.Circle = Circle;
// module.exports.Square = Square;

// To export only one property you use this
module.exports = Circle;