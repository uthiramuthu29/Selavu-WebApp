

import { useTransactions } from "../context/TransactionProvider";

import { bankLogos } from "../constants/bankLogo";

export default function TransactionTable() {
const { transactions, loading } = useTransactions();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="table-wrapper h-[80vh] overflow-y-scroll ">
      <table className="table-auto border-t border-t-[#F5F5F5] w-full ">
        <thead>
          <tr className="text-[#929EAE] text-[12px] font-semibold text-left ">
            <th className="py-[25px]">NAME/BUSINESS</th>
            <th className="py-[25px]">TYPE</th>
            <th className="py-[25px]">AMOUNT</th>
            <th className="py-[25px]">DATE</th>
            <th className="py-[25px]">TRANSACTION ID</th>
            <th className="py-[25px]">UPDATED BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr
              key={index}
              className="pb-[21px] border-b-[#F5F5F5] text-[14px]"
            >
              <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium flex gap-[14px] ">
                <div className="w-[50px] h-[40px] flex items-center justify-center">
                  <img
                    className="max-h-full max-w-full object-contain"
                    src={bankLogos[txn.bank] || bankLogos.defaultBankLogo}
                    alt={txn.bank}
                  />
                </div>
                <div className="name-upiid">
                  <p>{txn.name}</p>
                  <span className="block text-[13px] font-normal text-[#78778B] ">
                    @{txn.upi_id}
                  </span>
                </div>
              </td>
              <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
                {txn.payment_method}
              </td>
              <td
                className={`pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] ${
                  txn.debit
                    ? "text-red-600"
                    : txn.credit
                    ? "text-green-400"
                    : ""
                } font-semibold`}
              >
                {txn.debit
                  ? `-₹${txn.debit}`
                  : txn.credit
                  ? `+₹${txn.credit}`
                  : ""}
              </td>
              <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
                {txn["txn date"]}
              </td>
              <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
                {txn.transaction_id}
              </td>
              <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
                ₹{txn.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
