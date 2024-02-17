import { Replacements } from '../config/words-to-replace';

export const replaceWords = (words: string, wordsToReplace: Replacements) => {
  let modifiedWords = words;

  Object.entries(wordsToReplace).forEach(([key, replacements]) => {
    // Matches the key if it's followed by a non-word character (like space, punctuation) or the end of the string
    // Adjusted the regex to consider case-insensitive matching and whole words/phrases
    const regex = new RegExp(`\\b${key}\\b(?=\\W|$)`, 'gi');
    modifiedWords = modifiedWords.replace(regex, () => {
      const randomIndex = Math.floor(Math.random() * replacements.length);
      return replacements[randomIndex];
    });
  });

  return modifiedWords;
};
