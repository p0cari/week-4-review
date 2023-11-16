import { MENU_NAMES, MENUS } from '../../constant/menu.js';

class OrderMenuError {
  #orderNotInput(orderMenu) {
    if (
      orderMenu.length === 1 &&
      orderMenu[0].menu.trim() === ''
    ) {
      throw new Error('[ERROR] 주문하실 메뉴와 개수를 입력해 주세요.');
    }
  }

  #orderWrongInput(orderMenu) {
    if (!orderMenu
      .every((order) => Number.isNaN(order.cnt) === false &&
                        Number.isInteger(order.cnt) &&
                        order.cnt > 0)
    ) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #orderNotExistMenu(orderMenu) {
    if (!orderMenu.every((order) => MENU_NAMES.includes(order.menu))) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #orderDuplication(orderMenu) {
    const originOrderMenu = orderMenu.map((order) => order.menu);
    const setOrderMenu = new Set(originOrderMenu);
    if (originOrderMenu.length !== setOrderMenu.size) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #orderTypeOnlyDrink(orderMenu) {
    const DRINK = Object.keys(MENUS.Drink);
    if (orderMenu.every((order) => DRINK.includes(order.menu))) {
      throw new Error('[ERROR] 음료만 주문하실 수 없습니다. 다시 입력해 주세요.');
    }
  }

  #totalOrderCntOverRange(orderMenu) {
    const totalMenuCnt = orderMenu.reduce((acc, order) => acc + order.cnt, 0);
    if (totalMenuCnt > 20) {
      throw new Error('[ERROR] 메뉴는 최대 20개 까지 주문 가능합니다. 다시 입력해 주세요.');
    }
  }

  valid(orderMenu) {
    this.#orderNotInput(orderMenu);
    this.#orderWrongInput(orderMenu);
    this.#orderNotExistMenu(orderMenu);
    this.#orderTypeOnlyDrink(orderMenu);
    this.#orderDuplication(orderMenu);
    this.#totalOrderCntOverRange(orderMenu);
  }
}

export default OrderMenuError;
