import getWeekday from '../getWeekday';
import getMonth from '../getMonth';

describe('getWeekday.ts', () => {
  it('Function getWeekday() returns correct weekday', () => {
    const weekday: string = getWeekday(1639174813403);
    expect(weekday).toBe('friday');
  });
});

describe('getMonth.ts', () => {
  it('Function getMonth() returns correct month', () => {
    const weekday: string = getMonth(1639174813403);
    expect(weekday).toBe('december');
  });
});