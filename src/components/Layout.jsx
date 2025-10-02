import { Outlet, ScrollRestoration, useMatches } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Popup from "./Popup";

export default function Layout() {

  const matches = useMatches();
  const current = matches[matches.length - 1];
  const headerProps = current.handle?.header || {};

  return (
    <>
    <Popup />
      <div className="grid grid-cols-12">
        <div className="col-span-2 pr-[20px]">
          <Navbar />
        </div>
        <div className="col-span-10 pl-[20px] pr-[40px] ">
          <Header {...headerProps} />
          <Outlet />
          <ScrollRestoration />
        </div>
      </div>
    </>
  );
}
