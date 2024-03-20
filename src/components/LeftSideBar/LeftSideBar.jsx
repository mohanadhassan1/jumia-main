import React, { useState } from "react";
import { CiApple } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdOutlineComputer } from "react-icons/md";
import { PiBaby, PiTelevisionBold } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoHomeOutline, IoGameControllerOutline } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa";
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
import { useDispatch, useSelector } from "react-redux";
import { chanageId } from "../../store/slices/idCategory";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    href: "/category",
    name: "Supermarket",
    icon: CiApple,
    component: Supermarket,
    id: "65db6f61b5f61a0c49bde663",
  },
  {
    href: "/category",
    name: "Fashion ",
    icon: GiClothes,
    component: Fashion,
    id: "65db7332a10c2a6d45faae9e",
  },
  {
    href: "/category",
    name: "Health & Beauty",
    icon: MdOutlineHealthAndSafety,
    component: Beauty,
    id: "65db7340a10c2a6d45faaea1",
  },
  {
    href: "/category",
    name: "Baby Products",
    icon: PiBaby,
    component: Baby,
    id: "65db73fff458103df0407613",
  },
  {
    href: "/category",
    name: "Phones & Tablets",
    icon: IoIosPhonePortrait,
    component: Phone,
    id: "65db73fff458103df0407614",
  },
  {
    href: "/category",
    name: "Home & Furniture",
    icon: IoHomeOutline,
    component: Furniture,
    id: "65db73fff458103df0407615",
  },
  {
    href: "/category",
    name: "Appliances",
    icon: BiSolidDrink,
    component: Appliances,
    id: "65db73fff458103df0407616",
  },
  {
    href: "/category",
    name: "Televisions & Audio",
    icon: PiTelevisionBold,
    component: Televisions,
    id: "65db73fff458103df0407617",
  },
  {
    href: "/category",
    name: "Computing",
    icon: MdOutlineComputer,
    component: Computing,
    id: "65db73fff458103df0407618",
  },
  {
    href: "/category",
    name: "Sporting Goods",
    icon: FaDumbbell,
    component: Sport,
    id: "65db73fff458103df0407619",
  },
  {
    href: "/category",
    name: "Gaming",
    icon: IoGameControllerOutline,
    component: Game,
    id: "65db73fff458103df040761a",
  },
  {
    href: "/category",
    name: "Other categories",
    icon: CgMoreO,
    component: OtherCategories,
    id: "65db73fff458103df040761b",
  },
];

export default function LeftSideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate


//   const idCategory = useSelector ((state)=>state.idCategory.idCategory)
// console.log("in category: ",idCategory);
const handleChangeId = ( id, href) => {
  // e.preventDefault(); // Prevent default button behavior
  dispatch(chanageId({ id })); // Dispatch the action with the id
  navigate(href); // Navigate programmatically to the category path
};
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:bg-white relative">
      <button
        className="md:hidden absolute top-3 right-3 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <div className={`md:flex ${isSidebarOpen ? "" : "hidden"}`}>
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
                      className="flex items-center text-black ps-[2rem] pe-full hover:text-gray-400"
                      onClick={() => {
                        handleChangeId(category.id,category.href); // Pass the category id to handleChangeId
                      }}
                    >
                      {category.icon && <category.icon className="me-1" />}
                      {category.name}
                    </a>
                    {hoveredIndex === index && (
                      <div className="absolute z-50 top-2 left-48 ps-8 ml-1">
                        {category.component && <category.component />}
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
