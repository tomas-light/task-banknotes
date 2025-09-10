import { describe, test, expect } from 'vitest';
import { takeBanknotes } from './takeBanknotes';

describe('[function] takeBanknotes', () => {
  test('8000 = 5000 + 2000 + 500x2', () => {
    expect(
      takeBanknotes({
        limits: {
          5000: 2,
          2000: 4,
          500: 20,
          200: 40,
        },
        amount: 3420,
      })
    ).toEqual({
      5000: 1,
      2000: 1,
      500: 2,
    });
  });

  test('3440 = 2000 + 1000 + 200x2 + 10x4', () => {
    expect(
      takeBanknotes({
        limits: {
          5000: 1,
          2000: 2,
          1000: 5,
          500: 8,
          200: 10,
          100: 10,
          50: 10,
          10: 10,
        },
        amount: 3420,
      })
    ).toEqual({
      2000: 1,
      1000: 1,
      200: 2,
      10: 4,
    });
  });
});
