"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomConsonant = exports.randomVowel = exports.randomLetter = exports.randomInt = void 0;
const letters_1 = require("./letters");
const randomInt = (min = 0, max = 25) => Math.round(Math.random() * (max - min)) + min;
exports.randomInt = randomInt;
const randomLetter = () => letters_1.letters[randomInt(0, 25)];
exports.randomLetter = randomLetter;
const randomVowel = () => letters_1.vowels[randomInt(0, 4)];
exports.randomVowel = randomVowel;
const randomConsonant = () => letters_1.consonants[randomInt(0, 20)];
exports.randomConsonant = randomConsonant;
//# sourceMappingURL=random-values.js.map