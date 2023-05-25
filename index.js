const { vowels, consonants, letters } = require("./utils/letters");
const {
  randomInt,
  randomLetter,
  randomConsonant,
  randomVowel,
} = require("./utils/random-values");
const { generateWord } = require("./generators/generate-word");
const { generateSentence } = require("./generators/generate-sentence");
const { generateParagraph } = require("./generators/generate-paragraph");

module.exports = {
  vowels,
  consonants,
  letters,
  randomInt,
  randomLetter,
  randomConsonant,
  randomVowel,
  generateWord,
  generateSentence,
  generateParagraph,
};
