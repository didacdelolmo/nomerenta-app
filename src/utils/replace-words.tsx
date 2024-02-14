const replaceWords = (text: string, replacements: Record<string, string[]>) => {
  Object.entries(replacements).forEach(([key, [replacement]]) => {
    // Define a regex that includes optional context around the key for checking
    // The context is captured in groups for later examination
    const regex = new RegExp(`(\\b\\w+\\s)?\\b${key}\\b(\\s\\w+\\b)?`, 'gi');

    text = text.replace(regex, (match, before, after) => {
      // Split the replacement to check its first and last parts
      const parts = replacement.split(' ');
      const firstPart = parts[0];
      const lastPart = parts[parts.length - 1];

      // Check for redundancy before and after the key
      if (before && before.trim().endsWith(firstPart)) {
        return match.replace(key, replacement.replace(firstPart, '').trim());
      }
      if (after && after.trim().startsWith(lastPart)) {
        return match.replace(key, replacement.replace(lastPart, '').trim());
      }

      // If no redundancy, replace normally
      return match.replace(key, replacement);
    });
  });

  return text;
};

export default replaceWords;
