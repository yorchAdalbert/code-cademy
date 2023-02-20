// Parent class or super class
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    // Creating a static  method
    static generatePassword() {
        const randomPassword = Math.floor(Math.random() * 10000);
        return randomPassword;
    }

}

// Child class or subclass
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name); // calls the constructor of the parent class
        this._certifications = certifications;
    }

    // Child classes can contain their own properties, getters, setters and methods
    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

// Creating a new instance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// Accessing getters and method from the inherited class
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

// Accessing child class's getter and method
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);