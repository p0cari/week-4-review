import { MENUS } from '../../utils/constant/menu.js';

class CalculateTotalOrderAmount {
  #calculate(order) {
    let amount = 0;
    const MENU_ARY = Object.entries(MENUS);
    MENU_ARY
      .some((category) => {
        if (MENUS[category[0]][order.menu]) {
          amount += MENUS[category[0]][order.menu] * order.cnt;
          return true;
        }
        return false;
      });
    return amount;
  }

  result(orderMenu) {
    let totalAmount = 0;
    orderMenu.forEach((order) => { totalAmount += this.#calculate(order); });
    return totalAmount;
  }
}

export default CalculateTotalOrderAmount;
