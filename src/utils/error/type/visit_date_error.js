class VisitDateError {
  #notInputDate(visitDate) {
    if (visitDate.length === 0) {
      throw new Error('[ERROR] 방문 날짜를 입력해 주세요.');
    }
  }

  #dateNotNum(visitDate) {
    if (
      Number.isNaN(Number(visitDate)) ||
      Number.isInteger(Number(visitDate)) === false ||
      visitDate.includes('.')
    ) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  #dateNotInRange(visitDate) {
    if (Number(visitDate) < 1 || Number(visitDate) > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  valid(visitDate) {
    this.#notInputDate(visitDate);
    this.#dateNotNum(visitDate);
    this.#dateNotInRange(visitDate);
  }
}

export default VisitDateError;
