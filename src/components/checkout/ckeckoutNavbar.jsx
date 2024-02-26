import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";
import { TbArrowBackUp } from "react-icons/tb";

export default function CkeckoutNavbar() {
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between my-4 px-4 lg:px-20 py-2 rounded items-center bg-white sticky top-0 z-50 ">
      <div className="container flex mx-auto justify-between p-2">
        <img
          src={logo}
          width={150}
          alt=""
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <div className="w-full text-xl ">
        <h2>Select Payment</h2>
      </div>
      <div className="flex justify-between items-center w-full  m-2 p-2 mt-4 lg:mt-0 text-sm">
        <ul className="hidden lg:flex items-center gap-2">
          <li className="flex w-200 items-center">
            <TbPhoneCalling className="text-4xl mx-2" />
            <div className=" ">
              <p>Need Help?</p>
              <a href="#" className="text-blue-900">
                contact us
              </a>
            </div>
          </li>
          <li className="flex w-100 items-center">
            <TbArrowBackUp className="text-4xl mx-2" />
            <p>Easy Returns</p>
          </li>
          <li className="flex w-100 items-center">
            <SiSpringsecurity className="text-2xl mx-2" />
            <p>secure payments</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
