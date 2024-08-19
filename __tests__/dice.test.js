'use strict';

const Dice = require('../dice');

describe('testing the constructor', () => {
    const dice = new Dice();

    test('maximumValue is 6', () => {
        expect(dice.maximumValue).toBe(6);
    });

    test('minimumValue is 1', () => {
        expect(dice.minimumValue).toBe(1);
    });

    test("dots is 0", () => {
      expect(dice.dots).toBe(0);
    });
})
