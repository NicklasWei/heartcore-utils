/**
 * Parses passed value for non-numerical characters).
 * @param {any} value The value to parse.
 * @returns {number} The number or NaN if value has non-numerical characters.
 * @version 1.0.0
 * @author Nicklas Wei <wei.nicklas@gmail.com>
 * @example
 *   // returns 3.14
 *   parseNumber('3.14');
 */
export default function parseNumber(value: any): number {
  if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value)) {
    return parseFloat(value);
  } else {
    return NaN;
  }
}