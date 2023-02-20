// Intermediate Function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Parent class
function Shape() { }

Shape.prototype.duplicate = function () {
    console.log('duplicate')
}

// Child class
function Circle() { }

// Circle inheriting from Shape base
extend(Circle, Shape);

/* Overriding the parent class method
   It is very important to override the parent method after inherits from it.
   At the beginning of the parent method change it to the child class. 
*/
Circle.prototype.duplicate = function () {
    console.log('duplicate circle')
}

function Square() { }

extend(Square, Shape);


const c = new Circle();
const sq = new Square();

c.duplicate();
sq.duplicate();