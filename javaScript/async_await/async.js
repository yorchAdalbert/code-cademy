'use strict';

const withAsync = async num => num === 0 ? 'zero' : 'not zero';

withAsync(100)
    .then(res => console.log(`withAsync(100) returned a promise which resolved to: ${res}`))