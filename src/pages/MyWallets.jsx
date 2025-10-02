import CardsBalanceSection from "../components/CardsBalanceSection";
import Payments from "../components/Payments";

export default function MyWallets() {
  return (
    <div className="wallets">
      <main className="grid grid-cols-12 mt-[38px] ">
        <CardsBalanceSection />
        <Payments />
      </main>
    </div>
  )
}