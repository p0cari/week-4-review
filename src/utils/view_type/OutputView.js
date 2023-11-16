import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printOutput(output) {
    Console.print(output);
  },
  printExpectEventBenefit(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },
};

export default OutputView;
