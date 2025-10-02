import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTransactions } from "../context/TransactionProvider";

export default function MultiLineChart() {
  const { transactions } = useTransactions();

  // format transactions for chart
  const data = transactions.map((txn) => ({
    date: txn["txn date"],   // x-axis
    debit: txn.debit || 0,   // y-axis line 1
    credit: txn.credit || 0, // y-axis line 2
  }));

  const formatNumber = (num) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
  return num;
};


  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-[10px] mt-[30px] border border-[#F5F5F5]">
      <h2 className="text-[18px] font-semibold mb-4">Debit vs Credit</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"  tick={{ fontSize: 10, fill: "#666" }} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} // smaller font
  tickFormatter={(val) => formatNumber(val)} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="debit"
            stroke="#FF6B6B"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="credit"
            stroke="#4ECDC4"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
