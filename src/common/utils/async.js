/**
 * A promise after a time (in milliseconds)
 * @param time
 * @returns {Promise<any>}
 */
export const wait = time => new Promise(resolve => setTimeout(resolve, time));
