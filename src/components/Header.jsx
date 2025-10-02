import { FaBell, FaCaretDown } from "react-icons/fa";

import User from "../assets/img/user.png"

export default function Header({title, icon: Icon}) {
  return (
    <div className="flex mt-[30px] justify-between items-center ">
      <h1 className="text-[25px] font-semibold text-[#1B212D]  ">{title}</h1>
      <div className="right-side flex items-center gap-[40px]">
        {Icon && <Icon size={24} className="text-[#929EAE]" />}
        <FaBell size={24} className="text-[#929EAE]" />
        <div className="user flex items-center py-[6px] pl-[7px] pr-[15px] gap-[12px] bg-[#FAFAFA] rounded-full ">
            <img className="max-w-[36px]" src={User} alt="" />
            <h3 className="text-[14px] font-semibold text-[#1B212D] mr-[16px] ">User</h3>
            <FaCaretDown size={17} className="text-[#1B212D]" />
        </div>
      </div>
    </div>
  )
}
