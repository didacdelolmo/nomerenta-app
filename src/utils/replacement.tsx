import Replacement from '../store/types/replacement-interface';

export function replace(text: string, replacements: Replacement[]): string {
  let updatedText = text;

  replacements.forEach((replacement) => {
    const escapedOriginalText = replacement.originalText.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&'
    );
    const regex = new RegExp(escapedOriginalText, 'gi');
    updatedText = updatedText.replace(regex, replacement.replacement);
  });

  return updatedText;
}