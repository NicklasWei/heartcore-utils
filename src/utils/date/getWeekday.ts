/**
 * Get the day of the week in English using local time.
 * @param {number | Date} timestamp A timestamp/date in UNIX time or as a Date object.
 * @returns {string} The day of the week.
 * @version 1.0.0
 * @author Nicklas Wei <wei.nicklas@gmail.com>
 * @example
 *   // returns 'friday' (in UTC time)
 *   getWeekday(1639174813403);
 */
export default function getWeekday(timestamp: number | Date): string {
  const date: Date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;

  const weekdays: string[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return weekdays[date.getDay()];
}