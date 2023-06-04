import { randomInt } from "../utils/random-values";
import { generateWord } from "./generate-word";

const generateSentence = (
  minWords = 7,
  maxWords = 20,
  wordMinLength = 3,
  wordMaxLength = 10
) => {
  const length = randomInt(minWords, maxWords);
  const words = [];
  for (let i = 0; i < length; i++) {
    words.push(generateWord(wordMinLength, wordMaxLength));
  }
  return words.join(" ");
};

export { generateSentence };
