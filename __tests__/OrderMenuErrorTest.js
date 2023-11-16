import OrderMenuError from '../src/utils/error/type/order_menu_error.js';

test('주문 메뉴를 입력하지 않으면 에러가 발생한다.', () => {
  const ORDER_MENU = [];
  const ERROR = new OrderMenuError();
  expect(() => {
    ERROR.valid(ORDER_MENU);
  }).toThrow('[ERROR]');
});

test.each([
  [[{ menu: '아이스크림', cnt: NaN }]],
  [[{ menu: '아이스크림', cnt: 1.1 }]],
  [[{ menu: '아이스크림', cnt: -1 }]],
  [[{ menu: '사이다', cnt: 1 }]],
  [[{ menu: '아이스크림', cnt: 1 }, { menu: '아이스크림', cnt: 1 }]],
])('유효하지 않은 주문을 입력하면 에러가 발생한다.', (input) => {
  const ORDER_MENU = input;
  const ERROR = new OrderMenuError();
  expect(() => {
    ERROR.valid(ORDER_MENU);
  }).toThrow('[ERROR]');
});

test('음료만 주문하면 에러가 발생한다.', () => {
  const ORDER_MENU = [{ menu: '제로콜라', cnt: 1 }];
  const ERROR = new OrderMenuError();
  expect(() => {
    ERROR.valid(ORDER_MENU);
  }).toThrow('[ERROR]');
});

test('주문 개수가 20 초과면 에러가 발생한다.', () => {
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 21 }];
  const ERROR = new OrderMenuError();
  expect(() => {
    ERROR.valid(ORDER_MENU);
  }).toThrow('[ERROR]');
});

test('테스트 통과 예제', () => {
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 10 }];
  const ERROR = new OrderMenuError();
  expect(ERROR.valid(ORDER_MENU)).toEqual(undefined);
});
