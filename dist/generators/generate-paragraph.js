"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParagraph = void 0;
const random_values_1 = require("../utils/random-values");
const generate_sentence_1 = require("./generate-sentence");
const generateParagraph = (minSentences = 10, maxSentences = 25, minWordsInSentence = 7, maxWordsInSentence = 20, wordMinLength = 3, wordMaxLength = 10) => {
    const length = (0, random_values_1.randomInt)(minSentences, maxSentences);
    const sentences = [];
    for (let i = 0; i < length; i++) {
        sentences.push((0, generate_sentence_1.generateSentence)(minWordsInSentence, maxWordsInSentence, wordMinLength, wordMaxLength));
    }
    return sentences.join(". ");
};
exports.generateParagraph = generateParagraph;
//# sourceMappingURL=generate-paragraph.js.map