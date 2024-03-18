import type {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import type { StringifiableRecord } from 'query-string';

import axios from 'axios';
import queryString from 'query-string';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_POSTFIX_URL}`,
});

/**
 * Axios 요청 인터셉터를 설정하여, 모든 요청에 대해 필요한 헤더를 추가합니다.
 *
 * - 모든 요청에 'Content-Type': 'application/json' 헤더를 기본적으로 추가합니다.
 * - 사용 가능한 경우, 'authorization' 헤더에 액세스 토큰을 추가합니다.
 * - '/auth/refresh-token' URL에 대한 요청인 경우, 'refresh' 헤더에 리프레시 토큰을 추가합니다.
 *
 * @param {InternalAxiosRequestConfig} config - Axios 요청 설정 객체입니다.
 * @returns {InternalAxiosRequestConfig} 수정된 요청 설정 객체를 반환합니다.
 * @throws {AxiosError} 요청 설정 과정에서 오류가 발생하면, AxiosError를 reject하는 Promise를 반환합니다.
 */
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = Object.assign(
      { 'Content-Type': 'application/json' },
      config.headers
    ) as AxiosRequestHeaders;

    // NOTE: Access 토큰 사용시 주석 해제
    // const token = getCookie($config.COOKIE_TOKEN_KEY);
    // if (token) {
    //   (config.headers as Record<string, string>)['authorization'] = `${token}`;
    // }

    // NOTE: Refresh 토큰 사용시 주석 해제
    // if (config.url === '/auth/refresh-token') {
    //   const refresh = getCookie($config.COOKIE_REFRESH_TOKEN_KEY);
    //   if (refresh) {
    //     (config.headers as Record<string, string>)['refresh'] = `${refresh}`;
    //   }
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 주어진 url로 GET 요청을 보냅니다.
 *
 * @param {string} url - 요청 url
 * @param {AxiosRequestConfig} options - 요청 옵션
 * @returns {Promise<AxiosResponse<T>>} 응답 데이터
 */
const axiosFetch = async <T = unknown>(
  url: string,
  query?: StringifiableRecord,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return await instance.get(
    queryString.stringifyUrl({
      url,
      query,
    }),
    { ...options }
  );
};

/**
 * 주어진 URI로 POST 요청을 보냅니다.
 *
 * @param {string} uri - 요청 URI
 * @param {object} body - 요청 본문
 * @param {AxiosRequestConfig} options - 요청 옵션
 * @returns {Promise<AxiosResponse<T>>} 응답 데이터
 */
const axiosPost = async <T = unknown>(
  uri: string,
  body?: unknown,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return await instance.post(uri, body, { ...options });
};

/**
 * 주어진 URI로 PUT 요청을 보냅니다.
 *
 * @param {string} uri - 요청 URI
 * @param {object} body - 요청 본문
 * @param {AxiosRequestConfig} options - 요청 옵션
 * @returns {Promise<AxiosResponse<T>>} 응답 데이터
 */
const axiosPut = async <T = unknown>(
  uri: string,
  body?: unknown,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return await instance.put(uri, body, { ...options });
};

/**
 * 주어진 URI로 DELETE 요청을 보냅니다.
 *
 * @param {string} uri - 요청 URI
 * @param {AxiosRequestConfig} options - 요청 옵션
 * @returns {Promise<AxiosResponse<T>>} 응답 데이터
 */
const axiosDelete = async <T = unknown>(
  uri: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return await instance.delete(uri, { ...options });
};

export { axiosFetch, axiosPost, axiosPut, axiosDelete };
