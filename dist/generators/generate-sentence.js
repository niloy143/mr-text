"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSentence = void 0;
const random_values_1 = require("../utils/random-values");
const generate_word_1 = require("./generate-word");
const generateSentence = (minWords = 7, maxWords = 20, wordMinLength = 3, wordMaxLength = 10) => {
    const length = (0, random_values_1.randomInt)(minWords, maxWords);
    const words = [];
    for (let i = 0; i < length; i++) {
        words.push((0, generate_word_1.generateWord)(wordMinLength, wordMaxLength));
    }
    return words.join(" ");
};
exports.generateSentence = generateSentence;
//# sourceMappingURL=generate-sentence.js.map