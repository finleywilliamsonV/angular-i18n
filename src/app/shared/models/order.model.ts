/**
 * A single transaction
 */
export type Transaction = {
  date: string;
  amount: number;
  description: string;
  price: number;
};

/**
 * A collection of transactions
 */
export type Order = Transaction[];
