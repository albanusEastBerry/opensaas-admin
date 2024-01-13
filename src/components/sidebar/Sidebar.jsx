import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { GrAnalytics } from "react-icons/gr";
import { SiCoinmarketcap } from "react-icons/si";
import { TbBrandBlogger } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoIosAppstore } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = ({ togglePartnersTable }) => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Partners", link: "/", icon: SlPeople },
    { name: "Analytics", link: "/", icon: GrAnalytics },
    { name: "Marketing", link: "/", icon: SiCoinmarketcap },
    { name: "Blog", link: "/", icon: TbBrandBlogger },
    { name: "Payments", link: "/", icon: BsCashCoin },
    { name: "App", link: "/", icon: IoIosAppstore },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
  ];

  const handlePartnersClick = () => {
    togglePartnersTable();
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[100vh]">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-6 sticky top-0`}
      >
        <div className="mt-6">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              onClick={menu.name === 'Partners' ? handlePartnersClick : null}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                menu?.margin ? 'mt-20' : ''
              }`}
              open={open}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open ? "opacity-0 translate-x-28 overflow-hidden" : ""
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open
                    ? "hidden"
                    : `absolute left-14 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="md:mt-5 md:text-center md:justify-center text-xl text-gray-900 font-semibold">
        Dashboard
      </div> */}
    </div>
  );
};

export default Sidebar;