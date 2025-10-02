import { Card } from "./Cards";
import { FaPlus } from "react-icons/fa6";


function Balance() {
  return (
    <>
    <div className="bg-[#FAFAFA] rounded-[10px] border border-[#F5F5F5] mb-[30px] p-[25px] ">
      <div className="top pb-[20px] border-b border-b-[#F5F5F5]">
        <h4 className="text-[14px] font-medium text-[#929EAE] ">Your Balance</h4>
        <p className="text-[20px] font-extrabold text-[#1B212D] ">$5240.00</p>
      </div>
      <div className="bottom pt-[20px] flex gap-[55px]">
        <div className="left">
            <h4 className="text-[14px] font-medium text-[#929EAE] ">Currency</h4>
            <p className="text-[14px] font-semibold text-[#1B212D] ">USD / US Dollar</p>
        </div>
        <div className="right">
            <h4 className="text-[14px] font-medium text-[#929EAE] ">Status</h4>
            <p className="text-[14px] font-semibold text-[#1B212D] ">Active</p>
        </div>
      </div>
    </div>
    <div className="new-card">
        <a className="flex items-center text-[14px] font-semibold text-[#29A073] gap-[10px] bg-[#F8F8F8] border border-[#F5F5F5] rounded-[10px] py-[14px] justify-center " href="#"><FaPlus size={20} /> Add New Card</a>
    </div>
    </>
    
  );
}

export default function CardsBalanceSection() {
  return (
    <div className="max-w-[354px] col-span-4 ">
      <Card />
      <Balance />
    </div>
  );
}
