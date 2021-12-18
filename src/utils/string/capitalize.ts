/**
 * Capitalizes the first character in the given string.
 * @param {string} str A string.
 * @returns {string} The string with the first character capitalized.
 * @version 1.0.1
 * @author Nicklas Wei <wei.nicklas@gmail.com>
 * @example
 *   // returns 'Hello world'
 *   capitalize('hello world');
 */
export default function capitalize(str: string): string {
  if (typeof str === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return '';
  }
}