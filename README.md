`mr-text` is a random text generator which can generate random letters, words, sentences and paragraphs with your desired length.

### How to start

- First, Simply install the package ⇒ `npm i mr-text`
- Import the desired generator from the root of the package ⇒ `import { generateWord } from "mr-text";`
- Call the generator ⇒ `console.log(generateWord());`

### Example

```javascript
import { generateWord, generateSentence, generateParagraph } from "mr-text";

const word = generateWord(3, 7); // minimum length 3, maximum length 7
const sentence = generateSentence(5, 15, 3, 7); // minimum words 5, maximum words 15
const paragraph = generateParagraph(15, 30, 5, 15, 3, 7); // minimum sentences 15, maximum sentences 30

console.log(word);
console.log(sentence);
console.log(paragraph);

// note: generated texts are not valid English words.
```

### Available Imports

```javascript
import {
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
} from "mr-text";
```
