import type { ManipulateType, OpUnitType, QUnitType } from 'dayjs';

import dayjs from 'dayjs';

import { CONFIG } from './constants';

const convertDateFormat = (date: Date | string, format?: string) => {
  if (!format) {
    return dayjs(date).format(CONFIG.DATE.DEFAULT_FORMAT);
  } else {
    return dayjs(date).format(format);
  }
};

const getYear = (date: Date | string) => {
  return dayjs(date).year();
};

const getMonth = (date: Date | string) => {
  return dayjs(date).month();
};

const getDate = (date: Date | string) => {
  return dayjs(date).date();
};

const getDay = (date: Date | string) => {
  return dayjs(date).day();
};

const getHour = (date: Date | string) => {
  return dayjs(date).hour();
};

const getMinute = (date: Date | string) => {
  return dayjs(date).minute();
};

const getSecond = (date: Date | string) => {
  return dayjs(date).second();
};

const add = (date: Date | string, addValue: number, unit?: ManipulateType) => {
  return dayjs(date).add(addValue, unit);
};

const diff = (
  date1: Date | string,
  date2: Date | string,
  unit?: QUnitType | OpUnitType,
  isFloat: boolean = false
) => {
  dayjs(date1).diff(date2, unit, isFloat);
};

const subtract = (
  date: Date | string,
  subValue: number,
  unit?: ManipulateType
) => {
  return dayjs(date).subtract(subValue, unit);
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
