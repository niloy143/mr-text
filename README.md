`mr-text` is a random text generator which can generate random letters, words, sentences and paragraphs with your desired length.

### How to start

- First, Simply install the package ⇒ `npm i mr-text`
- Import the desired generator from the root of the package ⇒ `const { generateWord } = require("mr-text");`
- Call the generator ⇒ `console.log(generateWord());`

### Example

```javascript
const { generateWord, generateSentence } = require("mr-text");

const randomWord = generateWord(3, 7); // minimum length 3, maximum length 7
const randomSentence = generateSentence(5, 15, 3, 7); // minimum words 5, maximum 15
console.log(randomWord);
console.log(randomSentence);

// note: generated texts are not valid English words.
```

### Available Imports

```javascript
const {
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
} = require("mr-text");
```
