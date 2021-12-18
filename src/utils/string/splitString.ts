/**
 * Splits a string into an array at the beginning and end of 
 * every occurrence of the designated (case insensitive) characters.
 * @param {string} str The string to split.
 * @param {string} chars The characters to split at in the string.
 * @returns {string[]} The complete string split into an array at designated characters.
 * @version 1.0.0
 * @author Nicklas Wei <wei.nicklas@gmail.com>
 * @example
 *   // returns [ 'I\'m a little teapot. ', 'Short', ' and stout.' ]
 *   splitStringAtChars('I\'m a little teapot. Short and stout.', 'short')
 */
export default function splitString(str: string, chars: string): string[] {
  const query: string = chars.toLowerCase();
  const hasMatch: boolean = str.toLowerCase().includes(query);

  if (query && hasMatch) {
    let strArr: string[] = [];
    let matchIndices: number[] = [];
    let strIndex: number = 0;

    // Search string for all occurences of matching characters. 
    while (strIndex < str.length) {
      const matchIndex: number = str.toLowerCase().indexOf(query, strIndex);

      if (matchIndex >= 0) { matchIndices.push(matchIndex); }
      strIndex = matchIndex >= 0 ? matchIndex + query.length : str.length;
    }

    // Slice out each occurence of matching characters.
    for (let i = 0; i < matchIndices.length; i++) {
      const matchIndex: number = matchIndices[i];
      const nextMatchIndex: number = matchIndices[i + 1];

      if (i === 0 && matchIndex !== 0) {
        strArr.push(str.slice(0, matchIndex));
      }

      strArr.push(str.slice(matchIndex, matchIndex + query.length));

      strArr.push(str.slice(
        matchIndex + query.length,
        nextMatchIndex > 0 ? nextMatchIndex : str.length
      ));
    }

    return strArr;
  } else {
    return [str];
  }
}