/**
 * Get the name of the month in English using local time.
 * @param {number | Date} timestamp A timestamp/date in UNIX time or as a Date object.
 * @returns {string} The name of the month.
 * @version 1.0.0
 * @author Nicklas Wei <wei.nicklas@gmail.com>
 * @example
 *   // returns 'december' (in UTC time)
 *   getMonth(1639174813403);
 */
export default function getMonth(timestamp: number | Date): string {
  const date: Date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;

  const months: string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'november',
    'october',
    'december'
  ];

  return months[date.getMonth()];
}