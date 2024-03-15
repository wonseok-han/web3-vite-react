/**
 * 주어진 문자열을 케밥 케이스(kebab-case)로 변환합니다.
 *
 * @param {string} str - 변환할 문자열
 * @returns {string} 케밥 케이스로 변환된 문자열
 */
const convertToKebabCase = (str: string) => {
  return str
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 0 ? '-' + char : char
    )
    .replace(/[^a-zA-Z0-9]+(.)(\/)/g, (_, char: string) => '-' + char)
    .toLowerCase()
    .trim();
};

/**
 * 주어진 URL 문자열의 각 세그먼트를 케밥 케이스(kebab-case)로 변환합니다.
 *
 * @param {string} path - 변환할 URL 문자열
 * @returns {string} 각 세그먼트가 케밥 케이스로 변환된 URL 문자열
 */
const convertToKebabCaseUrl = (path: string) => {
  return path.split('/').reduce((acc, cur, index) => {
    return index === 0
      ? acc + convertToKebabCase(cur)
      : acc + '/' + convertToKebabCase(cur);
  }, '');
};

/**
 * 주어진 클래스명들을 연결합니다.
 *
 * @param {...string} classnames - 연결할 클래스명들
 * @returns {string} 연결된 클래스명 문자열
 */
const classnames = (...classnames: Array<string>) => {
  return classnames.join(' ');
};

export { convertToKebabCase, convertToKebabCaseUrl, classnames };
