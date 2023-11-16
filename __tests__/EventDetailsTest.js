import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';
import EventManage from '../src/mvc/controller/child/event_manage.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join(LINE_SEPARATOR);

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

test('적용된 이벤트: 없음', () => {
  const expected = [
    '<혜택 내역>',
    '없음',
  ];

  const VISIT_DATE = 1;
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 1 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 크리스마스 디데이 할인', () => {
  const expected = [
    '<혜택 내역>',
    '크리스마스 디데이 할인: -1,000원',
  ];

  const VISIT_DATE = 1;
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 평일 할인', () => {
  const expected = [
    '<혜택 내역>',
    '평일 할인: -20,230원',
  ];

  const VISIT_DATE = 26;
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 주말 할인', () => {
  const expected = [
    '<혜택 내역>',
    '주말 할인: -20,230원',
  ];

  const VISIT_DATE = 29;
  const ORDER_MENU = [{ menu: '티본스테이크', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 특별 할인', () => {
  const expected = [
    '<혜택 내역>',
    '특별 할인: -1,000원',
  ];

  const VISIT_DATE = 31;
  const ORDER_MENU = [{ menu: '아이스크림', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 증정 이벤트', () => {
  const expected = [
    '<증정 메뉴>',
    '샴페인 1개',
    '<혜택 내역>',
    '증정 이벤트: -25,000원',
  ];

  const VISIT_DATE = 31;
  const ORDER_MENU = [{ menu: '티본스테이크', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});

test('적용된 이벤트: 주말 할인 이외 나머지', () => {
  const expected = [
    '<혜택 내역>',
    '크리스마스 디데이 할인: -3,400원', '평일 할인: -20,230원',
    '특별 할인: -1,000원', '증정 이벤트: -25,000원',
  ];

  const VISIT_DATE = 25;
  const ORDER_MENU = [{ menu: '초코케이크', cnt: 10 }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected);
});
