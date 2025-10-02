import Cards from "./Cards";



import { bankLogos } from "../constants/bankLogo";

import { MdKeyboardArrowRight } from "react-icons/md";

import { useTransactions } from "../context/TransactionProvider";

function UserTransaction({ personName, date, debit, credit, bank}){
  return(
    <div className="flex gap-[15px] border-b border-b-[#FAFAFA] pb-[15px] mb-[12px]">
        <div className="w-[50px] h-[40px] flex items-center justify-center">
                  <img
                    className="max-h-full max-w-full object-contain"
                    src={bankLogos[bank] || bankLogos.defaultBank}
                    alt={bank}
                  />
                </div>
        <div className="details">
          <h4 className="text-[#1B212D] text-[14px] font-semibold mb-[7px] ">{personName}</h4>
          <p className="text-[#929EAE] text-[12px] font-medium ">{date}</p>
        </div>
     <p className={`text-black text-[16px] font-semibold ml-auto pr-[25px] ${
                  debit
                    ? "text-red-600"
                    : credit
                    ? "text-green-400"
                    : ""
                } `}>
        {debit ? `-₹${debit}` : credit ? `+₹${credit}` : ""}
      </p>
    </div>
  )
}

function RecentTransaction(){

  const { transactions } = useTransactions();
  const recent = transactions.slice(0, 5);

  return(
    <>
      <div className="flex justify-between items-center mb-[25px]">
        <h2 className="text-[#1B212D] text-[18px] font-semibold ">Recent Transactions</h2>
        <a className="text-[#29A073] text-[14px] font-semibold flex gap-[12px] items-center " href="">View All <MdKeyboardArrowRight /></a>
      </div>
      <ul>
        {recent.map((txn, index) => (
          <li key={index}><UserTransaction personName={txn.name} date={txn['txn date']} amount={txn.debit || txn.credit} bank={txn.bank} debit={txn.debit} credit={txn.credit} /></li>
        ))}
      </ul>
    </>
  )
}

export default function CardsRecentTransaction() {
  return (
    <section>
      <Cards />
      <RecentTransaction />
    </section>
  );
}
