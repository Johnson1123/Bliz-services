/**
 * Splits a sentence into an array of words separated by spaces
 * @param sentence - The sentence string to split
 * @returns Array of words
 */
export const splitIntoWords = (sentence: string): string[] => {
  if (!sentence) return [];

  // Split by spaces and filter out empty strings
  return sentence
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
};

/**
 * Example usage:
 * splitIntoWords("degree program") returns ["degree", "program"]
 * splitIntoWords("  multiple   spaces  ") returns ["multiple", "spaces"]
 * splitIntoWords("camelCaseWords") returns ["camelCaseWords"]
 */
