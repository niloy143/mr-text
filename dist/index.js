"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParagraph = exports.generateSentence = exports.generateWord = exports.randomVowel = exports.randomConsonant = exports.randomLetter = exports.randomInt = exports.letters = exports.consonants = exports.vowels = void 0;
const letters_1 = require("./utils/letters");
Object.defineProperty(exports, "vowels", { enumerable: true, get: function () { return letters_1.vowels; } });
Object.defineProperty(exports, "consonants", { enumerable: true, get: function () { return letters_1.consonants; } });
Object.defineProperty(exports, "letters", { enumerable: true, get: function () { return letters_1.letters; } });
const random_values_1 = require("./utils/random-values");
Object.defineProperty(exports, "randomInt", { enumerable: true, get: function () { return random_values_1.randomInt; } });
Object.defineProperty(exports, "randomLetter", { enumerable: true, get: function () { return random_values_1.randomLetter; } });
Object.defineProperty(exports, "randomConsonant", { enumerable: true, get: function () { return random_values_1.randomConsonant; } });
Object.defineProperty(exports, "randomVowel", { enumerable: true, get: function () { return random_values_1.randomVowel; } });
const generate_word_1 = require("./generators/generate-word");
Object.defineProperty(exports, "generateWord", { enumerable: true, get: function () { return generate_word_1.generateWord; } });
const generate_sentence_1 = require("./generators/generate-sentence");
Object.defineProperty(exports, "generateSentence", { enumerable: true, get: function () { return generate_sentence_1.generateSentence; } });
const generate_paragraph_1 = require("./generators/generate-paragraph");
Object.defineProperty(exports, "generateParagraph", { enumerable: true, get: function () { return generate_paragraph_1.generateParagraph; } });
//# sourceMappingURL=index.js.map