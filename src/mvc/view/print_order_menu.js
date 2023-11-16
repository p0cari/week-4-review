import OUTPUT from '../../utils/constant/output.js';
import OutputView from '../../utils/view_type/OutputView.js';

class PrintOrderMenu {
  #expectEventBenefit(visitDate) {
    OutputView.printExpectEventBenefit(visitDate);
    OutputView.printOutput('');
  }

  #orderMenu(orderMenu) {
    OutputView.printOutput(OUTPUT.MENU.ORDER_MENU);
    orderMenu.forEach((order) => OutputView.printOutput(`${order.menu} ${order.cnt}개`));
    OutputView.printOutput('');
  }

  print(visitDate, orderMenu) {
    this.#expectEventBenefit(visitDate);
    this.#orderMenu(orderMenu);
  }
}

export default PrintOrderMenu;
