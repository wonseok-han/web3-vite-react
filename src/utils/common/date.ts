import type { ManipulateType, OpUnitType, QUnitType } from 'dayjs';

import dayjs from 'dayjs';

import { CONFIG } from './constants';

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 제시된 Format의 형태로 변환된 값을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @param {string} format - 변환할 날짜 형식
 * @returns {string} 변환된 날짜 문자열
 */
const convertDateFormat = (date: Date | string, format?: string) => {
  if (!format) {
    return dayjs(date).format(CONFIG.DATE.DEFAULT_FORMAT);
  } else {
    return dayjs(date).format(format);
  }
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 연도를 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 연도
 */
const getYear = (date: Date | string) => {
  return dayjs(date).year();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 월을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 월
 */
const getMonth = (date: Date | string) => {
  return dayjs(date).month();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 일자를 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 일자
 */
const getDate = (date: Date | string) => {
  return dayjs(date).date();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 요일을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 요일
 */
const getDay = (date: Date | string) => {
  return dayjs(date).day();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 시간을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 시간
 */
const getHour = (date: Date | string) => {
  return dayjs(date).hour();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 분을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 분
 */
const getMinute = (date: Date | string) => {
  return dayjs(date).minute();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 초를 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @returns {number} 초
 */
const getSecond = (date: Date | string) => {
  return dayjs(date).second();
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 더한 값을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @param {number} addValue - 더할 값
 * @param {ManipulateType} unit - 더할 시간 단위
 * @returns {Dayjs} 결과 날짜
 */
const add = (date: Date | string, addValue: number, unit?: ManipulateType) => {
  return dayjs(date).add(addValue, unit);
};

/**
 * Date 형식의 날짜 또는 날짜 형식의 문자열을 받아 뺀 값을 반환합니다.
 *
 * @param {Date | string} date - 날짜 또는 날짜 문자열
 * @param {number} subtractValue - 뺄 값
 * @param {ManipulateType} unit - 뺄 시간 단위
 * @returns {Dayjs} 결과 날짜
 */
const subtract = (
  date: Date | string,
  subValue: number,
  unit?: ManipulateType
) => {
  return dayjs(date).subtract(subValue, unit);
};

/**
 * 두 날짜 사이의 차이를 반환합니다.
 *
 * @param {Date | string} date1 - 첫 번째 날짜 또는 날짜 문자열
 * @param {Date | string} date2 - 두 번째 날짜 또는 날짜 문자열
 * @param {UnitType} unit - 차이를 계산할 시간 단위
 * @param {boolean} float - 소수점을 포함할지 여부
 * @returns {number} 두 날짜 사이의 차이
 */
const diff = (
  date1: Date | string,
  date2: Date | string,
  unit?: QUnitType | OpUnitType,
  isFloat: boolean = false
) => {
  dayjs(date1).diff(date2, unit, isFloat);
};

export {
  dayjs,
  convertDateFormat,
  getYear,
  getMonth,
  getDate,
  getDay,
  getHour,
  getMinute,
  getSecond,
  add,
  subtract,
  diff,
};
