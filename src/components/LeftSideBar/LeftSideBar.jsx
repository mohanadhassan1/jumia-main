import React, { useState } from "react";
import { CiApple } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdOutlineComputer } from "react-icons/md";
import { PiBaby, PiTelevisionBold } from "react-icons/pi";
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

export default function LeftSideBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFashion, setIsFashion] = useState(false);
  const [isBeauty, setIsBeauty] = useState(false);
  const [isBaby, setIsBaby] = useState(false);
  const [isFurniture, setIsFurniture] = useState(false);
  const [isAppliances, setIsAppliances] = useState(false);
  const [isTV, setIsTV] = useState(false);
  const [isComputing, setIsComputing] = useState(false);
  const [isSport, setIsSport] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isOther, setIsOther] = useState(false);

  return (
    <>
      <div className="bg-gray-100 ">
        {" "}
        <div className="flex ">
          {/* <!-- Sidebar --> */}
          <aside className="bg-white-800 text-black ">
            <div className="p-4">
              <div className="mt-4">
                <ul>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <CiApple />
                      Supermarket
                    </a>
                    {isHovered && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Supermarket />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsFashion(true)}
                    onMouseLeave={() => setIsFashion(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <GiClothes />
                      Fashion
                    </a>
                    {isFashion && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Fashion />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsBeauty(true)}
                    onMouseLeave={() => setIsBeauty(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <MdOutlineHealthAndSafety />
                      Health & Beauty
                    </a>
                    {isBeauty && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Beauty />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsBaby(true)}
                    onMouseLeave={() => setIsBaby(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <PiBaby />
                      Baby Products
                    </a>
                    {isBaby && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Baby />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsFurniture(true)}
                    onMouseLeave={() => setIsFurniture(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <IoHomeOutline />
                      Home & Furniture
                    </a>
                    {isFurniture && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Fashion />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsAppliances(true)}
                    onMouseLeave={() => setIsAppliances(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <BiSolidDrink />
                      Appliances
                    </a>
                    {isAppliances && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Appliances />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsTV(true)}
                    onMouseLeave={() => setIsTV(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <PiTelevisionBold />
                      Televisions & Audio
                    </a>
                    {isTV && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Televisions />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsComputing(true)}
                    onMouseLeave={() => setIsComputing(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <MdOutlineComputer />
                      Computing
                    </a>
                    {isComputing && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Computing />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsSport(true)}
                    onMouseLeave={() => setIsSport(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <FaDumbbell />
                      Sporting Goods
                    </a>
                    {isSport && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Sport />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsGame(true)}
                    onMouseLeave={() => setIsGame(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <IoGameControllerOutline />
                      Gaming
                    </a>
                    {isGame && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Game />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-2 relative"
                    onMouseEnter={() => setIsOther(true)}
                    onMouseLeave={() => setIsOther(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-gray-400"
                    >
                      <CgMoreO />
                      Other categories
                    </a>
                    {isOther && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<OtherCategories />}
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
