import CalculateTotalOrderAmount from '../../model/calculate_total_order_amount.js';
import CalculateEventDetails from '../../model/calculate_event_details.js';
import PrintEventResult from '../../view/print_event_result.js';

class EventManage {
  #visitDate;
  #orderMenu;

  constructor(visitDate, orderMenu) {
    this.#visitDate = Number(visitDate);
    this.#orderMenu = orderMenu;
  }

  totalOrderAmount() {
    const TOTAL_AMOUNT = this.#calculateTotalOrderAmount();
    if (TOTAL_AMOUNT < 10000) {
      return this.#printEventResult(TOTAL_AMOUNT, 0, null);
    }
    return this.#eventBenefit(TOTAL_AMOUNT);
  }

  #eventBenefit(TOTAL_AMOUNT) {
    const EVENT_DETAILS = this.#calculateEventDetails();
    EVENT_DETAILS.giveaway = TOTAL_AMOUNT >= 120000 ? 25000 : 0;
    const BENEFIT_AMOUNT = Object.values(EVENT_DETAILS).reduce((acc, cur) => acc + cur, 0);
    this.#printEventResult(TOTAL_AMOUNT, BENEFIT_AMOUNT, EVENT_DETAILS);
  }

  #calculateTotalOrderAmount() {
    const calculateTotalOrderAmount = new CalculateTotalOrderAmount();
    return calculateTotalOrderAmount.result(this.#orderMenu);
  }

  #calculateEventDetails() {
    const calculateEventDetails = new CalculateEventDetails();
    return calculateEventDetails.result(this.#visitDate, this.#orderMenu);
  }

  #eventBadgeResult(BENEFIT_AMOUNT) {
    if (BENEFIT_AMOUNT < 5000) {
      return '없음';
    }
    if (BENEFIT_AMOUNT < 10000) {
      return '별';
    }
    if (BENEFIT_AMOUNT < 20000) {
      return '트리';
    }
    return '산타';
  }

  #printEventResult(TOTAL_AMOUNT, BENEFIT_AMOUNT, EVENT_DETAILS) {
    const GIVEAWAY_MENU = TOTAL_AMOUNT >= 120000 ? '샴페인 1개' : '없음';
    const EVENT_DETAILS_RESULT = EVENT_DETAILS === null ? '없음' : EVENT_DETAILS;
    const BENEFIT_AMOUNT_RESULT = BENEFIT_AMOUNT === 0 ? '없음' : BENEFIT_AMOUNT;
    const DISCOUNT_AMOUNT = TOTAL_AMOUNT >= 120000 ? BENEFIT_AMOUNT - 25000 : BENEFIT_AMOUNT;
    const EXPECT_PAYMENT_AMOUNT = TOTAL_AMOUNT - DISCOUNT_AMOUNT;
    const BADGE = this.#eventBadgeResult(BENEFIT_AMOUNT);

    const AMOUNT_RESULT = { TOTAL_AMOUNT, BENEFIT_AMOUNT_RESULT, EXPECT_PAYMENT_AMOUNT };
    const BENEFIT_RESULT = { GIVEAWAY_MENU, EVENT_DETAILS_RESULT, BADGE };
    const printEventResult = new PrintEventResult();
    printEventResult.print(AMOUNT_RESULT, BENEFIT_RESULT);
  }
}

export default EventManage;
