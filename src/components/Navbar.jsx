import { Link, NavLink } from "react-router-dom";

import SelavuLogo from "../assets/img/Selavu Logo Light.png"

import { RiHome5Fill,RiLogoutCircleRLine  } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";

export default function Navbar() {
  const navBarLinks = [
    {
        pageName: "Dashboard",
        pageLink: "/", 
        pageIcon: <RiHome5Fill size={20} />
    },
    {
        pageName: "Transactions",
        pageLink: "/transactions", 
        pageIcon: <FaRupeeSign size={20} />
    },
    {
        pageName: "Bills",
        pageLink: "/bills", 
        pageIcon: <TbInvoice size={20}  />
    },
    {
        pageName: "My Wallets",
        pageLink: "/wallets", 
        pageIcon: <LiaWalletSolid size={20} />
    },
    {
        pageName: "Settings",
        pageLink: "#", 
        pageIcon: <IoMdSettings size={20} />
    },
  ];

  return (
    <nav className="pt-[30px] pb-[100px] px-[25px] bg-[#FAFAFA] h-screen flex flex-col ">
      <div className="logo mb-[40px] ">
        <Link className="flex gap-[12px]" href="/">
          <img className="max-w-[30px] " src={SelavuLogo} alt="" />
          <h2 className="text-[18px] text-[#1B212D] font-bold ">Selavu.</h2>
        </Link>
      </div>
      <ul>
        {navBarLinks.map((item) => {
            return <li key={item.pageName}><NavLink to={item.pageLink} className="text-[14px] font-medium text-[#929EAE] hover:text-[#1B212D] hover:font-semibold hover:bg-[#C8EE44] rounded-[8px] p-[15px] flex gap-[14px] items-center">{item.pageIcon}{item.pageName}</NavLink></li>
        })}
      </ul>
      <ul className="mt-auto">
        <li>
          <Link to="#" className="text-[14px] font-medium text-[#929EAE] p-[15px] flex gap-[14px] items-center">
            <MdHelpCenter size={20} />
            Help
          </Link>
        </li>
        <li>
          <button className="text-[14px] font-medium text-[#929EAE] p-[15px] flex gap-[14px] items-center">
            <RiLogoutCircleRLine size={20} />
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
