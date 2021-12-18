import capitalize from '../capitalize';
import splitString from '../splitString';

describe('capitalize.ts', () => {
  it('Function capitalize() correctly capitalizes string', () => {
    const str: string = capitalize('hello world');
    expect(str).toBe('Hello world');
  });
});

describe('splitString.ts', () => {
  it('Function splitStringAtChars() returns correct array', () => {
    const arr: string[] = splitString('I\'m a little teapot. Short and stout.', 'short');
    expect(arr).toStrictEqual(['I\'m a little teapot. ', 'Short', ' and stout.']);
  });
});