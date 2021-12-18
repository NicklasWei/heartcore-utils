import parseNumber from '../parseNumber';

describe('parseNumber.ts', () => {
  it('Function parseNumber() returns floating point number in string', () => {
    const num: number = parseNumber('3.14');
    expect(num).toBe(3.14);
  });

  it('Function parseNumber() returns NaN if argument contain non-numerical characters', () => {
    const num: number = parseNumber('I contain the number 3.14');
    expect(num).toBe(NaN);
  });
});