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
      <div className="bg-white relative">
        <div className="flex w-[21rem]">
          <aside className=" h-full">
            <div className="p-4">
                <ul>
                  <li
                    className="mb-3 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a
                      href="#"
                      className="flex items-center text-black pe-[9rem] hover:text-orange-500"
                    >
                      <CiApple className="me-1" />
                      Supermarket
                    </a>
                    {isHovered && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
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
                      className="flex items-center text-black pe-[9rem] hover:text-orange-500"
                    >
                      <GiClothes className="me-1" />
                      Fashion
                    </a>
                    {isFashion && (
                      <div className="absolute top-0 left-full ml-1 bg-gray-500">
                        {<Fashion />}
                      </div>
                    )}
                  </li>
                  {/* Other list items */}
                </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
