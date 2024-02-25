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
  const [isphone, setIsphone] = useState(false);

  return (
    <>
      <div className="md:bg-white relative  ">
        {" "}
        <div className="flex w-[21rem]">
          {/* <!-- Sidebar --> */}
          <aside className=" h-full">
            <div className="p-3" >
              <div className="mt-4">
                <ul>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a
                      href="/Supremarket"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <CiApple className="me-1" />
                      Supermarket
                    </a>
                    {isHovered && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Supermarket />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsFashion(true)}
                    onMouseLeave={() => setIsFashion(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <GiClothes className="me-1" />
                      Fashion
                    </a>
                    {isFashion && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Fashion />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsBeauty(true)}
                    onMouseLeave={() => setIsBeauty(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <MdOutlineHealthAndSafety className="me-1" />
                      Health & Beauty
                    </a>
                    {isBeauty && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Beauty />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsBaby(true)}
                    onMouseLeave={() => setIsBaby(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <PiBaby className="me-1" />
                      Baby Products
                    </a>
                    {isBaby && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Baby />}
                      </div>
                    )}
                  </li>

                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsphone(true)}
                    onMouseLeave={() => setIsphone(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <IoIosPhonePortrait className="me-1" />
                      Phones & Tablets 
                                         </a>
                    {isphone && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Phone className="me-1" />}
                      </div>
                    )}
                  </li>

                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsFurniture(true)}
                    onMouseLeave={() => setIsFurniture(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <IoHomeOutline className="me-1" />
                      Home & Furniture
                    </a>
                    {isFurniture && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Furniture className="me-1" />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsAppliances(true)}
                    onMouseLeave={() => setIsAppliances(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <BiSolidDrink className="me-1" />
                      Appliances
                    </a>
                    {isAppliances && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Appliances />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsTV(true)}
                    onMouseLeave={() => setIsTV(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <PiTelevisionBold className="me-1" />
                      Televisions & Audio
                    </a>
                    {isTV && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Televisions />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsComputing(true)}
                    onMouseLeave={() => setIsComputing(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <MdOutlineComputer className="me-1" />
                      Computing
                    </a>
                    {isComputing && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Computing />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsSport(true)}
                    onMouseLeave={() => setIsSport(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <FaDumbbell className="me-1" />
                      Sporting Goods
                    </a>
                    {isSport && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Sport />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsGame(true)}
                    onMouseLeave={() => setIsGame(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <IoGameControllerOutline className="me-1" />
                      Gaming
                    </a>
                    {isGame && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
                        {<Game />}
                      </div>
                    )}
                  </li>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsOther(true)}
                    onMouseLeave={() => setIsOther(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[5rem]  hover:text-gray-400"
                    >
                      <CgMoreO className="me-1" />
                      Other categories
                    </a>
                    {isOther && (
                      <div className="absolute top-2 left-full ml-1 bg-gray-500">
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
