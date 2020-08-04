/**
 * @param {string} url
 * @returns {string} refactored url
 */

export function urlRefactor(url) {
  return url.replace(/\.|\/|\?|=|&|:/g, "-");
}
