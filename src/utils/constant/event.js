const EVENT_NAMES = ['크리스마스 디데이 할인', '평일 할인', '주말 할인', '특별 할인', '증정 이벤트'];

const WEEKDAY_DISCOUNT_DATE = [
  3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17,
  18, 19, 20, 21, 24, 25, 26, 27, 28, 31,
];

const WEEKEND_DISCOUNT_DATE = [
  1, 2, 8, 9, 15, 16, 22, 23, 29, 30,
];

const SPECIAL_DISCOUNT_DATE = [
  3, 10, 17, 24, 25, 31,
];

Object.freeze(
  EVENT_NAMES,
  WEEKDAY_DISCOUNT_DATE,
  WEEKEND_DISCOUNT_DATE,
  SPECIAL_DISCOUNT_DATE,
);

export {
  EVENT_NAMES,
  WEEKDAY_DISCOUNT_DATE,
  WEEKEND_DISCOUNT_DATE,
  SPECIAL_DISCOUNT_DATE,
};
