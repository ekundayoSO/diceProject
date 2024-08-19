'use strict';

module.exports = class Dice {
  #upperBound;
  #minimum;
  #dotCount;

  constructor(ubound=6) {
    this.#upperBound = ubound;
    this.#minimum = 1;
    this.#dotCount = 0;
  }
  // getters
  get minimumValue() {
    return this.#minimum;
  }

  get maximumValue() {
    return this.#upperBound;
  }

  get dots() {
    return this.#dotCount;
  }
};