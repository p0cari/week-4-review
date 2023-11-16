import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async userInput(inputQuestion) {
    const input = await Console.readLineAsync(inputQuestion);
    return input;
  },
};

export default InputView;
