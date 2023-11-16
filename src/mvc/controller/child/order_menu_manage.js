import CalculateOrderMenu from '../../model/calculate_order_menu.js';
import PrintOrderMenu from '../../view/print_order_menu.js';
import OrderMenuError from '../../../utils/error/type/order_menu_error.js';
import printError from '../../../utils/error/print_error.js';
import INPUT_QUESTION from '../../../utils/constant/input_question.js';
import InputView from '../../../utils/view_type/InputView.js';

class OrderMenuManage {
  #orderMenu = null;

  get getOrderMenu() {
    return this.#orderMenu;
  }

  async inputOrderMenu(visitDate) {
    while (true) {
      this.#orderMenu = await InputView.userInput(INPUT_QUESTION.ORDER_MENU);
      this.#orderMenu = this.#calculateOrderMenu();
      if (this.#isValidOrderMenu()) {
        break;
      }
    }
    this.#print(visitDate);
  }

  #calculateOrderMenu() {
    const calculateOrderMenu = new CalculateOrderMenu();
    return calculateOrderMenu.calculate(this.#orderMenu);
  }

  #isValidOrderMenu() {
    const ERROR = new OrderMenuError();
    try {
      ERROR.valid(this.#orderMenu);
      return true;
    } catch (error) {
      printError(error);
      return false;
    }
  }

  #print(visitDate) {
    const printOrderMenu = new PrintOrderMenu();
    printOrderMenu.print(visitDate, this.#orderMenu);
  }
}

export default OrderMenuManage;
