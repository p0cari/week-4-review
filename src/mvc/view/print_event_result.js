import OUTPUT from '../../utils/constant/output.js';
import OutputView from '../../utils/view_type/OutputView.js';
import { EVENT_NAMES } from '../../utils/constant/event.js';

class PrintEventResult {
  #totalOrderAmount(TOTAL_AMOUNT) {
    OutputView.printOutput(`${OUTPUT.TOTAL_AMOUNT.BEFORE_DISCOUNT}`);
    OutputView.printOutput(`${TOTAL_AMOUNT.toLocaleString()}원`);
    OutputView.printOutput('');
  }

  #giveawayMenu(GIVEAWAY_MENU) {
    OutputView.printOutput(`${OUTPUT.MENU.GIVEAWAY_MENU}`);
    OutputView.printOutput(`${GIVEAWAY_MENU}`);
    OutputView.printOutput('');
  }

  #eventDetails(EVENT_DETAILS_RESULT) {
    if (EVENT_DETAILS_RESULT === '없음') {
      OutputView.printOutput(`${OUTPUT.BENEFIT.LIST}`);
      OutputView.printOutput(`${EVENT_DETAILS_RESULT}`);
      OutputView.printOutput('');
      return;
    }
    this.#validEventDetails(EVENT_DETAILS_RESULT);
  }

  #validEventDetails(EVENT_DETAILS_RESULT) {
    OutputView.printOutput(OUTPUT.BENEFIT.LIST);
    Object.keys(EVENT_DETAILS_RESULT).forEach((event, idx) => {
      if (EVENT_DETAILS_RESULT[event] > 0) {
        OutputView.printOutput(`${EVENT_NAMES[idx]}: -${EVENT_DETAILS_RESULT[event].toLocaleString()}원`);
      }
    });
    OutputView.printOutput('');
  }

  #totalBenefitAmount(BENEFIT_AMOUNT_RESULT) {
    OutputView.printOutput(`${OUTPUT.BENEFIT.TOTAL_BENEFIT_AMOUNT}`);
    OutputView.printOutput(`-${BENEFIT_AMOUNT_RESULT.toLocaleString()}원`);
    OutputView.printOutput('');
  }

  #expectPaymentAmount(EXPEXT_PAYMENT_AMOUNT) {
    OutputView.printOutput(`${OUTPUT.TOTAL_AMOUNT.AFTER_DISCOUNT}`);
    OutputView.printOutput(`${EXPEXT_PAYMENT_AMOUNT.toLocaleString()}원`);
    OutputView.printOutput('');
  }

  #evnetBadge(BADGE) {
    OutputView.printOutput(`${OUTPUT.EVENT.BADGE}`);
    OutputView.printOutput(`${BADGE}`);
    OutputView.printOutput('');
  }

  print(AMOUNT_RESULT, BENEFIT_RESULT) {
    this.#totalOrderAmount(AMOUNT_RESULT.TOTAL_AMOUNT);
    this.#giveawayMenu(BENEFIT_RESULT.GIVEAWAY_MENU);
    this.#eventDetails(BENEFIT_RESULT.EVENT_DETAILS_RESULT);
    this.#totalBenefitAmount(AMOUNT_RESULT.BENEFIT_AMOUNT_RESULT);
    this.#expectPaymentAmount(AMOUNT_RESULT.EXPECT_PAYMENT_AMOUNT);
    this.#evnetBadge(BENEFIT_RESULT.BADGE);
  }
}

export default PrintEventResult;
