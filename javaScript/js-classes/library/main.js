'use strict';

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkItem) {
        this._isCheckedOut = checkItem;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        return this._ratings.reduce((acc, curr) => acc + curr, 0) / this._ratings.length;
    }
    addRating(rating) {
        if (typeof rating === 'number')
            if (rating >= 0 && rating <= 5)
                this._ratings.push(rating)
            else
                console.log('Enter a number between 1 to 5');
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this.pages;
    }

}

class Movie extends Media {
    constructor(title, director, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }
    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating('hello');
historyOfEverything.addRating(-10);
historyOfEverything.addRating(10);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.isCheckedOut);

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());