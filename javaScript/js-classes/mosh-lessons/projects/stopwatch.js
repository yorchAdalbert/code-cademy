'use strict';

// Constructor function, creating ( class )
function Stopwatch() {
    // private properties
    let startTime, endTime, running, duration = 0;

    // methods
    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    // Getters 
    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    });
}

const watch = new Stopwatch();

console.log(watch.duration);