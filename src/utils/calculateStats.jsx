export const calculateStats = (transactions) => {

  if (!Array.isArray(transactions)) {
    return { total: 0, totalDebit: 0, pendingSavings: 0 };
  }
  
  const totalDebit = transactions.reduce(
    (sum, txn) => sum + (txn.debit || 0),
    0
  );

  const totalCredit = transactions.reduce(
    (sum, txn) => sum + (txn.credit || 0),
    0
  );

  const total = totalDebit + totalCredit;
  const pendingSavings = totalCredit - totalDebit;

  return {
    total: total.toFixed(2),
    totalDebit: totalDebit.toFixed(2),
    pendingSavings: pendingSavings.toFixed(2),
  };
};
