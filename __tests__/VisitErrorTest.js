import VisitDateError from '../src/utils/error/type/visit_date_error.js';

test('방문 날짜를 입력하지 않으면 에러가 발생한다.', () => {
  const VISIT_DATE = '';
  const ERROR = new VisitDateError();
  expect(() => {
    ERROR.valid(VISIT_DATE);
  }).toThrow('[ERROR]');
});

test.each([
  ['안녕'],
  ['1.1'],
  ['1.0'],
  ['0'],
  ['32'],
])('유효하지 않는 방문 날짜를 입력하면 에러가 발생한다', (input) => {
  const VISIT_DATE = input;
  const ERROR = new VisitDateError();
  expect(() => {
    ERROR.valid(VISIT_DATE);
  }).toThrow('[ERROR]');
});

test('테스트 통과 예제', () => {
  const VISIT_DATE = '13';
  const ERROR = new VisitDateError();
  expect(ERROR.valid(VISIT_DATE)).toEqual(undefined);
});
