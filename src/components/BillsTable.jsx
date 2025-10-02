import Spotify from "../assets/img/bills/spotify.png"
import Jio from "../assets/img/bills/jio.png"
import BSNL from "../assets/img/bills/bsnl.png"
import Gemini from "../assets/img/bills/gemini.png"
import defaultBill from "../assets/img/bills/defaultBill.png"

export default function BillsTable() {
  return (
    <div className="table-wrapper h-[80vh] overflow-y-scroll ">
      <table className="table-auto border-t border-t-[#F5F5F5] w-full ">
        <thead>
          <tr className="text-[#929EAE] text-[12px] font-semibold text-left ">
            <th className="py-[25px]">NAME</th>
            <th className="py-[25px]">NEXT PAYMENT DATE</th>
            <th className="py-[25px]">CATEGORY</th>
            <th className="py-[25px]">AMOUNT</th>
            <th className="py-[25px]">STATUS</th>
            <th className="py-[25px]">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="pb-[21px] border-b-[#F5F5F5] text-[14px]">
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium flex gap-[14px] ">
              <div className="w-[50px] h-[40px] flex items-center justify-center">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={Spotify || defaultBill}
                  alt="Subscription"
                />
              </div>
              <div className="name-bill flex items-center">
                <p>Spotify Subscription</p>
              </div>
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              <div className="date">
                <p className="text-[#1B212D]">25 Nov 2025</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 6.00 PM
                </span>
              </div>
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              Music
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              ₹139.00
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
              Pending
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              ...
            </td>
          </tr>
          <tr className="pb-[21px] border-b-[#F5F5F5] text-[14px]">
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium flex gap-[14px] ">
              <div className="w-[50px] h-[40px] flex items-center justify-center">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={Jio || defaultBill}
                  alt="Subscription"
                />
              </div>
              <div className="name-bill flex items-center">
                <p>Jio</p>
              </div>
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              <div className="date">
                <p className="text-[#1B212D]">31 Oct 2025</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 06.14 PM
                </span>
              </div>
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              Recharge
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              ₹859.00
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
              Pending
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              ...
            </td>
          </tr>
          <tr className="pb-[21px] border-b-[#F5F5F5] text-[14px]">
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium flex gap-[14px] ">
              <div className="w-[50px] h-[40px] flex items-center justify-center">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={BSNL || defaultBill}
                  alt="Subscription"
                />
              </div>
              <div className="name-bill flex items-center">
                <p>BSNL</p>
              </div>
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              <div className="date">
                <p className="text-[#1B212D]">06 Oct 2025</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 11.59 PM
                </span>
              </div>
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              Recharge
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              ₹147.00
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
              Pending
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              ...
            </td>
          </tr>
          <tr className="pb-[21px] border-b-[#F5F5F5] text-[14px]">
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium flex gap-[14px] ">
              <div className="w-[50px] h-[40px] flex items-center justify-center">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={Gemini || defaultBill}
                  alt="Subscription"
                />
              </div>
              <div className="name-bill flex items-center">
                <p>Google Gemini Subscription</p>
              </div>
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              <div className="date">
                <p className="text-[#1B212D]">16 Sep 2026</p>
                <span className="block text-[13px] font-normal text-[#78778B] ">
                  at 5.00 PM
                </span>
              </div>
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              Productivity
            </td>
            <td
              className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5]"
            >
              ₹1950.00
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#1B212D] font-medium">
              Pending
            </td>
            <td className="pt-[15px] pb-[20px] border-b border-b-[#F5F5F5] text-[#78778B] font-medium">
              ...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
