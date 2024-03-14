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

const getCookie = (key: string) => {
  return cookies.get(key);
};

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

const removeCookie = (key: string, options?: CookieSetOptionsType) => {
  cookies.remove(key, {
    path: '/',
    ...options,
  });
};

export { getCookie, setCookie, removeCookie };
