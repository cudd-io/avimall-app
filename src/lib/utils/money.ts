export const formatMoney = (amount: number, currency = 'JPY'): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
};
