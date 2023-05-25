const {
  randomConsonant,
  randomInt,
  randomVowel,
} = require("../utils/random-values");

const generateWord = (minLength = 3, maxLength = 7) => {
  const length = randomInt(minLength, maxLength);
  let word = "";
  for (let i = 0; i < length; i++) {
    if (word.length % 2) {
      word += randomVowel();
    } else {
      word += randomConsonant();
    }
  }
  return word;
};

module.exports = { generateWord };
