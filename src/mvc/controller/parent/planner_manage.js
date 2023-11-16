import VisitDateManage from '../child/visit_date_manage.js';
import OrderMenuManage from '../child/order_menu_manage.js';
import EventManage from '../child/event_manage.js';

class PlannerManage {
  #VISIT_DATE = null;
  #ORDER_MENU = null;

  async visitDate() {
    const visitDateManage = new VisitDateManage();
    await visitDateManage.firstGreeting();
    this.#VISIT_DATE = visitDateManage.getVisitDate;
    await this.#orderMenu();
  }

  async #orderMenu() {
    const orderMenuManage = new OrderMenuManage();
    await orderMenuManage.inputOrderMenu(this.#VISIT_DATE);
    this.#ORDER_MENU = orderMenuManage.getOrderMenu;
    await this.#eventDetails();
  }

  async #eventDetails() {
    const eventManage = new EventManage(this.#VISIT_DATE, this.#ORDER_MENU);
    eventManage.totalOrderAmount();
  }
}

export default PlannerManage;
