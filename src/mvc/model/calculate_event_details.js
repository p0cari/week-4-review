import { WEEKDAY_DISCOUNT_DATE, WEEKEND_DISCOUNT_DATE, SPECIAL_DISCOUNT_DATE } from '../../utils/constant/event.js';
import { MENUS } from '../../utils/constant/menu.js';

class CalculateEventBenefit {
  #event = {
    christmas: 0,
    weekday: 0,
    weekend: 0,
    special: 0,
    giveaway: 0,
  };

  #christmasEvent(visitDate) {
    if (visitDate > 0 && visitDate < 26) {
      this.#event.christmas = 1000 + (visitDate - 1) * 100;
    }
  }

  #specialEvent(visitDate) {
    if (SPECIAL_DISCOUNT_DATE.includes(visitDate)) {
      this.#event.special = 1000;
    }
  }

  #weekdayEvent(order, DESSERT, visitDate) {
    if (
      WEEKDAY_DISCOUNT_DATE.includes(visitDate) &&
      DESSERT.includes(order.menu)
    ) {
      this.#event.weekday += 2023 * order.cnt;
    }
  }

  #weekendEvent(order, MAIN, visitDate) {
    if (
      WEEKEND_DISCOUNT_DATE.includes(visitDate) &&
      MAIN.includes(order.menu)
    ) {
      this.#event.weekend += 2023 * order.cnt;
    }
  }

  result(visitDate, orderMenu) {
    const DESSERT = Object.keys(MENUS.Dessert);
    const MAIN = Object.keys(MENUS.Main);
    this.#christmasEvent(visitDate);
    this.#specialEvent(visitDate);
    orderMenu.forEach((order) => {
      this.#weekdayEvent(order, DESSERT, visitDate);
      this.#weekendEvent(order, MAIN, visitDate);
    });
    return this.#event;
  }
}

export default CalculateEventBenefit;
