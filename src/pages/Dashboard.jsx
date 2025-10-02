import CardsRecentTransaction from "../components/CardsRecentTransaction";
import MultiLineChart from "../components/MultiLineChart";
import StatsSection from "../components/StatsSection";

export default function Dashboard() {
  return (
    <div className="dashboard grid grid-cols-12">
      <main className="col-span-8 pr-[25px]">
        <StatsSection />
        <MultiLineChart />
      </main>
      <aside className="col-span-4">
        <CardsRecentTransaction />
      </aside>
    </div>
  );
}
