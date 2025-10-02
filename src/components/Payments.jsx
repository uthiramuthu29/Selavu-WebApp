import { useTransactions } from "../context/TransactionProvider";
import { bankLogos } from "../constants/bankLogo";

import Spotify from "../assets/img/bills/spotify.png";
import Jio from "../assets/img/bills/jio.png";
import defaultBill from "../assets/img/bills/defaultBill.png";

function UserTransaction({ personName, debit, credit, bank }) {
  return (
    <div className="flex gap-[15px] border-b border-b-[#FAFAFA] pb-[15px] mb-[12px]">
      <div className="w-[50px] h-[40px] flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={bankLogos[bank] || bankLogos.defaultBank}
          alt={bank}
        />
      </div>
      <div className="details flex items-center">
        <h4 className="text-[#1B212D] text-[14px] font-semibold mb-[7px] ">
          {personName}
        </h4>
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
  );
}

export default function Payments() {
  const { transactions } = useTransactions();
  const recent = transactions.slice(0, 5);

  return (
    <div className="col-span-8 h-[85vh] overflow-y-scroll ">
      <div className="my-payments">
        <h2 className="text-[20px] font-semibold text-[#1B212D] mb-[26px] ">
          My Payments
        </h2>
        <div>
          <h4 className="text-[14px] font-semibold text-[#1B212D] mb-[16px] pb-[14px] border-bottom border-b-[2px] border-b-[#F5F5F5] ">
            All Payments
          </h4>
          <p className="text-[14px] font-normal text-[#929EAE] mb-[21px] ">
            Today
          </p>
          <ul>
            {recent.map((txn, index) => (
              <li key={index}>
                <UserTransaction
                  personName={txn.name}
                  date={txn["txn date"]}
                  debit={txn.debit}
                  credit={txn.credit}
                  bank={txn.bank}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="upcoming-payments">
        <h2 className="text-[20px] font-semibold text-[#1B212D] mb-[26px] ">
          Upcoming Payments
        </h2>
        <div>
          <p className="text-[14px] font-normal text-[#929EAE] mb-[21px] ">
            Next month
          </p>
          <div className="flex gap-[15px] border-b border-b-[#FAFAFA] pb-[15px] mb-[12px]">
            <div className="w-[50px] h-[40px] flex items-center justify-center">
              <img
                className="max-h-full max-w-full object-contain"
                src={Spotify || defaultBill}
                alt="Subscription"
              />
            </div>
            <div className="details">
              <h4 className="text-[#1B212D] text-[14px] font-semibold mb-[7px] ">
                Spotify Subscription
              </h4>
              <div className="date">
                <p className="text-[#1B212D]">25 Nov 2025</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 6.00 PM
                </span>
              </div>
            </div>
            <p className="text-black text-[16px] font-semibold ml-auto pr-[25px] ">
              ₹139.00
            </p>
          </div>
          <div className="flex gap-[15px] border-b border-b-[#FAFAFA] pb-[15px] mb-[12px]">
            <div className="w-[50px] h-[40px] flex items-center justify-center">
              <img
                className="max-h-full max-w-full object-contain"
                src={Jio || defaultBill}
                alt="Subscription"
              />
            </div>
            <div className="details">
              <h4 className="text-[#1B212D] text-[14px] font-semibold mb-[7px] ">
                Jio
              </h4>
              <div className="date">
                <p className="text-[#1B212D]">25 Nov 2025</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 6.00 PM
                </span>
              </div>
            </div>
            <p className="text-black text-[16px] font-semibold ml-auto pr-[25px] ">
              ₹859.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
