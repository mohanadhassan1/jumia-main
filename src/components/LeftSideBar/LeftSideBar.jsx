import React, { useState } from "react";
import { CiApple } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdOutlineComputer } from "react-icons/md";
import { PiBaby, PiTelevisionBold } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoHomeOutline, IoGameControllerOutline } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Supermarket from "../Supermarket/Supermarket";
import Fashion from "../Fashion/Fashion";
import Beauty from "../Beauty/Beauty";
import Baby from "../Baby/Baby";
import Appliances from "../Appliances/Appliances";
import Televisions from "../Televisions/Televisions";
import Computing from "../Computing/Computing";
import Sport from "../Sport/Sport";
import Game from "../Game/Game";
import OtherCategories from "../OtherCategories/OtherCategories";
import Furniture from "../Furniture/Furniture";
import Phone from "../Phone/Phone";


const categories = [
  { name: "Supermarket", icon: CiApple, component: Supermarket ,category:"/Supremarket"},
  { name: "Fashion", icon: GiClothes, component: Fashion ,category:"/Fashion"},
  { name: "Health & Beauty", icon: MdOutlineHealthAndSafety, component: Beauty,category:"#" },
  { name: "Baby Products", icon: PiBaby, component: Baby ,category:"#"},
  { name: "Phones & Tablets", icon: IoIosPhonePortrait, component: Phone ,category:"#" },
  { name: "Home & Furniture", icon: IoHomeOutline, component: Furniture ,category:"#" },
  { name: "Appliances", icon: BiSolidDrink, component: Appliances ,category:"#" },
  { name: "Televisions & Audio", icon: PiTelevisionBold, component: Televisions ,category:"#" },
  { name: "Computing", icon: MdOutlineComputer, component: Computing ,category:"#" },
  { name: "Sporting Goods", icon: FaDumbbell, component: Sport ,category:"#" },
  { name: "Gaming", icon: IoGameControllerOutline, component: Game ,category:"#" },
  { name: "Other categories", icon: CgMoreO, component: OtherCategories ,category:"#" },
];
export default function LeftSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:bg-white relative">
      <button
        className="md:hidden absolute top-3 right-3 z-50 "
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <div className={`md:flex  ${isSidebarOpen ? '' : 'hidden'}`}>
        <aside className="h-full">
          <div className="p-3">
            <div className="mt-4">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="mb-3"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      href={category.category}
                      className="flex items-center text-black ps-[2rem]   pe-full hover:text-gray-400"
                    >
                      <category.icon className="me-1" />
                      {category.name}
                    </a>
                    {hoveredIndex === index && (
                      <div className="absolute z-50 top-2 left-48 ps-8 ml-1 ">
                        <category.component />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}