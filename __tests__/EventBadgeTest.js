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

const expected = [
  ['<12월 이벤트 배지>', '없음'],
  ['<12월 이벤트 배지>', '별'],
  ['<12월 이벤트 배지>', '트리'],
  ['<12월 이벤트 배지>', '산타'],
];

test.each([
  ['아이스크림', 1, 0],
  ['아이스크림', 3, 1],
  ['아이스크림', 5, 2],
  ['아이스크림', 10, 3],
])('이벤트 배지 테스트', (menuName, menuCnt, cnt) => {
  const VISIT_DATE = 26;
  const ORDER_MENU = [{ menu: menuName, cnt: menuCnt }];
  const logSpy = getLogSpy();
  const eventManage = new EventManage(VISIT_DATE, ORDER_MENU);
  eventManage.totalOrderAmount();
  expectLogContains(getOutput(logSpy), expected[cnt]);
});
