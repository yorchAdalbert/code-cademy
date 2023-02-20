'use strict';
// This is an example of a class

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    // Method
    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog('Halley'); // This crate a new dog instance

console.log(halley.name);
console.log(halley.behavior);

halley.incrementBehavior();
console.log(halley.behavior);

// Using the constructor method

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    // Adding getters
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Adding methods
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

}

// Creating instances from a class

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Calling class methods

console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);