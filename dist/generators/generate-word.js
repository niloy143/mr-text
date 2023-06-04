"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWord = void 0;
const random_values_1 = require("../utils/random-values");
const generateWord = (minLength = 3, maxLength = 7) => {
    const length = (0, random_values_1.randomInt)(minLength, maxLength);
    let word = "";
    for (let i = 0; i < length; i++) {
        if (word.length % 2) {
            word += (0, random_values_1.randomVowel)();
        }
        else {
            word += (0, random_values_1.randomConsonant)();
        }
    }
    return word;
};
exports.generateWord = generateWord;
//# sourceMappingURL=generate-word.js.map