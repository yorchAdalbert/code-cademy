const Calculate = {
    sum(arrNumbers) {
        if (arrNumbers.length === 0) return 0;
        return arrNumbers.reduce((acc, cur) => acc + cur);
    }
}

module.exports = Calculate;