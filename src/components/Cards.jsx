import Chip from "../assets/img/chip.svg";
import WiFi from "../assets/img/wifi.svg";
import MasterCard from "../assets/img/master.svg";

export function Card(){
  return(
<div className="card mb-[30px] bg-[linear-gradient(67deg,rgba(74,74,73,1)_0%,rgba(32,32,31,1)_100%)] px-[20px] py-[30px] rounded-[15px] ">
        <h4 className="text-white text-[16px] font-bold mb-[27px] ">
          Selavu. <span className="text-[#626260] text-[12px] font-medium ">| Universal Bank</span>{" "}
        </h4>
        <div className="flex mb-[21px] justify-between ">
          <img src={Chip} alt="" />
          <img src={WiFi} alt="" />
        </div>

        <p className="text-white text-[17px] font-bold mb-[8px] ">5879 7856 8542 1258</p>
        <div className="flex justify-between">
          <p className="text-[#868685] text-[16px] font-medium ">07/36</p>
          <img src={MasterCard} alt="" />
        </div>
        
      </div>
  )
} 

export default function Cards() {
  return (
    <>
      <div className="flex justify-between mb-[15px] ">
        <h3 className="text-[18px] text-[#1B212D] font-semibold ">Wallet</h3>
        <a className="text-[#929EAE] text-[35px] leading-[5px] " href="">...</a>
      </div>
      <Card />
    </>
  );
}