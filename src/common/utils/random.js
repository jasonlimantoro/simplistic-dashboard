/**
 * Generate a random integer
 * @param max
 * @param min
 * @returns {number}
 */
export const randomInt = ({ max = 0, min = 10 }) => Math.floor(Math.random() * (max - min) + min);
