'use strict';

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }

    set schoolName(schoolName) {
        this._name = schoolName;
    }
    set schoolLevel(schoolLevel) {
        this._level = schoolLevel;
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number')
            this._numberOfStudents = newNumberOfStudents;
        else
            console.log('Invalid input: newNumberOfStudents must be set to a Number');
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomNum = Math.floor(Math.random() * substituteTeachers.length);

        return substituteTeachers[randomNum];
    }
}


class PrimarySchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = `Students must be picked up by a parent, guardian, 
                              or family member over the age of 13. `;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

    set pickupPolicy(policy) {
        this._pickupPolicy = policy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'highschool', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineSchool = new PrimarySchool('Lorraine Hansbury', 514);
const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

lorraineSchool.quickFacts();
console.log(School.pickSubstituteTeacher(substituteTeachers));

const alSmithHighSchool = new HighSchool('Al E. Smith', 415, ['basketball', 'Volleyball', 'Track and Field']);

console.log(alSmithHighSchool.sportsTeams);