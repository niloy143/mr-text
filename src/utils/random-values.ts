import { consonants, vowels, letters } from "./letters";

const randomInt = (min = 0, max = 25) =>
  Math.round(Math.random() * (max - min)) + min;

const randomLetter = () => letters[randomInt(0, 25)];
const randomVowel = () => vowels[randomInt(0, 4)];
const randomConsonant = () => consonants[randomInt(0, 20)];

export { randomInt, randomLetter, randomVowel, randomConsonant };
