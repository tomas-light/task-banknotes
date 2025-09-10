type BanknotesDictionary = Record<number, number>;

type Options = {
  /** available banknotes in the ATM */
  limits: BanknotesDictionary;

  /** how much money should be taken */
  amount: number;
};

export function takeBanknotes(options: Options): BanknotesDictionary {
  const { limits, amount } = options;

  const result: BanknotesDictionary = {};

  // todo:

  return result;
}
