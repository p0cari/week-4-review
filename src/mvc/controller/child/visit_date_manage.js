import VisitDateError from '../../../utils/error/type/visit_date_error.js';
import printError from '../../../utils/error/print_error.js';
import INPUT_QUESTION from '../../../utils/constant/input_question.js';
import OUTPUT from '../../../utils/constant/output.js';
import InputView from '../../../utils/view_type/InputView.js';
import OutputView from '../../../utils/view_type/OutputView.js';

class VisitDateManage {
  #visitDate = null;

  get getVisitDate() {
    return this.#visitDate;
  }

  async firstGreeting() {
    OutputView.printOutput(OUTPUT.FIRST_GREETING);
    await this.#inputVisitDate();
  }

  async #inputVisitDate() {
    while (true) {
      this.#visitDate = await InputView.userInput(INPUT_QUESTION.VISIT_DATE);
      if (this.#isValidDate()) {
        break;
      }
    }
  }

  #isValidDate() {
    const ERROR = new VisitDateError();
    try {
      ERROR.valid(this.#visitDate);
      return true;
    } catch (error) {
      printError(error);
      return false;
    }
  }
}

export default VisitDateManage;
