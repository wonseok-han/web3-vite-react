import { Cookies } from 'react-cookie';

const cookies = new Cookies();

interface CookieSetOptionsType {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
  partitioned?: boolean;
}

/**
 * 주어진 키에 해당하는 쿠키 값을 반환합니다.
 *
 * @param {string} key - 쿠키 키
 * @returns {string | undefined} 쿠키 값
 */
const getCookie = (key: string) => {
  return cookies.get(key);
};

/**
 * 주어진 키와 값으로 쿠키를 설정합니다.
 *
 * @param {string} key - 쿠키 키
 * @param {string} value - 쿠키 값
 * @param {CookieSetOptionsType} options - 쿠키 설정 옵션
 */
const setCookie = (
  key: string,
  value: string,
  options?: CookieSetOptionsType
) => {
  cookies.set(key, value, {
    path: '/',
    ...options,
  });
};

/**
 * 주어진 키에 해당하는 쿠키를 제거합니다.
 *
 * @param {string} key - 쿠키 키
 * @param {CookieSetOptionsType} options - 쿠키 설정 옵션
 */
const removeCookie = (key: string, options?: CookieSetOptionsType) => {
  cookies.remove(key, {
    path: '/',
    ...options,
  });
};

export { getCookie, setCookie, removeCookie };
