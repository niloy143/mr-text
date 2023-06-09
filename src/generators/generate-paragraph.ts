import { randomInt } from "../utils/random-values";
import { generateSentence } from "./generate-sentence";

const generateParagraph = (
  minSentences = 10,
  maxSentences = 25,
  minWordsInSentence = 7,
  maxWordsInSentence = 20,
  wordMinLength = 3,
  wordMaxLength = 10
) => {
  const length = randomInt(minSentences, maxSentences);
  const sentences = [];
  for (let i = 0; i < length; i++) {
    sentences.push(
      generateSentence(
        minWordsInSentence,
        maxWordsInSentence,
        wordMinLength,
        wordMaxLength
      )
    );
  }
  return sentences.join(". ");
};

export { generateParagraph };
