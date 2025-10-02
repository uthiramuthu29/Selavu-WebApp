import { RiWallet3Fill } from "react-icons/ri";

import { useTransactions } from "../context/TransactionProvider";
import { calculateStats } from "../utils/calculateStats";

function StatsCards({ title, amount }) {
  return (
    <div className="stat-card flex items-center gap-[15px] bg-[#F8F8F8] pl-[20px] pr-[48px] py-[24px] rounded-[10px] ">
      <div className="icon bg-[#EBE8E8] rounded-full p-[11px] ">
        <RiWallet3Fill size={20} />
      </div>

      <div className="content">
        <h3 className="text-[14px] text-[#929EAE] font-normal mb-[10px] ">
          {title}
        </h3>
        <p className="text-[24px] text-[#1B212D] font-bold">{amount}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {

  const { transactions, loading } = useTransactions();

  if (loading) return <p>Loading stats...</p>;

  const { total, totalDebit, pendingSavings } = calculateStats(transactions);

  return (
    <section className="flex gap-[25px] justify-between">
      <StatsCards title="Total balance" amount={total} />
      <StatsCards title="Total spending" amount={totalDebit} />
      <StatsCards title="Total saved" amount={pendingSavings} />
    </section>
  );
}
