'use strict';

class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(str) {
        let encryptedStr = '';

        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
                encryptedStr += String.fromCharCode(str.charCodeAt(i) + this.shift);
                continue;
            }

            encryptedStr += str[i];
        }

        return encryptedStr.toUpperCase();
    }

    decrypt(str) {
        let lowerStr = str.toLowerCase();
        let decryptedStr = '';

        for (let i = 0; i < lowerStr.length; i++) {
            if (lowerStr.charCodeAt(i) > 96 && lowerStr.charCodeAt(i) < 123) {
                let charCode = lowerStr.charCodeAt(i) - this.shift;
                decryptedStr += String.fromCharCode(charCode);
                continue;
            }

            decryptedStr += lowerStr[i];
        }

        return decryptedStr;
    }
}

const cipher = new ShiftCipher(2);
let str = 'i love to code!';
let encryptedStr = cipher.encrypt(str);

console.log(encryptedStr);
console.log(cipher.decrypt(encryptedStr));