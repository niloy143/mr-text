const { consonants, vowels, letters } = require("./letters");

const randomInt = (min = 0, max = 25) =>
  Math.round(Math.random() * (max - min)) + min;

const randomLetter = () => letters[randomInt(0, 25)];
const randomVowel = () => vowels[randomInt(0, 4)];
const randomConsonant = () => consonants[randomInt(0, 20)];

module.exports = { randomInt, randomLetter, randomVowel, randomConsonant };
