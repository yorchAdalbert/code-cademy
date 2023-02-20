// Defining the parent class
function Shape(color) {
    this.color = color;
}

// Shape methods defined as prototype
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


// Circle base inheriting from Shape base
function Circle(radius, color) {
    // Calling the super constructor
    Shape.call(this, color);
    this.radius = radius;
}

// This crate inheritance using prototype -> But the constructor is set to the parent class
// Whenever you reset the prototype as a best practice make sure to reset the constructor as well.
Circle.prototype = Object.create(Shape.prototype);
// Resetting the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

// Square base inheriting from Shape base
function Square(size) {
    this.size = size;
}

// To stop duplicating this section of code everything that a class will inherits
// from a parent class, you can create a function to reuse it every time you create a child
// that inherits from a parent class.
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Creating the function to inherits from a parent class
// This function is called intermediate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Creating a new class that inherits from Shape base using the extend function
function Triangle(angle) {
    this.angle = angle
}

extend(Triangle, Shape);

function Rectangle(size) {
    this.size = size
}

extend(Rectangle, Shape);


// Creating instances
const s = new Shape();
const c = new Circle(5, 'red');
// you can also create a new object like this
new Circle.prototype.constructor(1);

c.draw();
c.duplicate();
console.log(c.color);