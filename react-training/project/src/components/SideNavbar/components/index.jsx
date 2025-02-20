import React from "react";
import useSidebar from "../hook/useSidebar";
import SidebarItem from "./sidebarItem";
import { sidebarData } from "../constant";
import { bars } from "../../../assets/svg";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className=" relative w-10">
      <div className={`bg-gray-900 text-white p-1 w-10 transition-all duration-300 ${isOpen ? "h-full" : "h-10"} fixed`}>
        <button onClick={toggleSidebar}
          className="bg-white p-1 rounded-full focus:outline-none mb-6">
         <img src={bars} />
        </button>
        <div className={`absolute top-10 left-0 w-10 bg-gray-900 text-white transition-all duration-300 
        ${isOpen ? "h-full opacity-100" : "h-0 opacity-0 overflow-hidden"}`}>
        <ul className="mt-10 space-y-4 ">
          {sidebarData.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;