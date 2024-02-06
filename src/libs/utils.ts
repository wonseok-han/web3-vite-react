/**
 * convertToKebabCase
 * @param {string} str 변환할 문자열
 * @returns kebab-case로 변환된 문자열
 * @description 문자열을 kebab-case로 변환하는 함수.
 */
export const convertToKebabCase = (str: string) => {
  return str
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 0 ? '-' + char : char
    )
    .replace(/[^a-zA-Z0-9]+(.)(\/)/g, (_, char: string) => '-' + char)
    .toLowerCase()
    .trim();
};

/**
 * convertToKebabCaseUrl
 * @param {string} str 변환할 URL 문자열
 * @returns kebab-case로 변환된 URL 문자열
 * @description URL 문자열을 kebab-case로 변환하는 함수.
 */
export const convertToKebabCaseUrl = (str: string) => {
  return str.split('/').reduce((acc, cur, index) => {
    return index === 0
      ? acc + convertToKebabCase(cur)
      : acc + '/' + convertToKebabCase(cur);
  }, '');
};
