import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { LiaDumpsterSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function index() {
  return (
    <>
      <div className="flex">
        <div className="gap-4 mb-3 mr-2 w-1/4 h-full rounded bg-white">
          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <IoPersonOutline className="mr-4" size={25} />
              My Jumia Account
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <FiInbox className="mr-4" size={25} />
              Orders
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <MdOutlineMail className="mr-4" size={25} />
              Inbox
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <MdOutlineRateReview className="mr-4" size={25} />
              Pending Reviews
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <LiaDumpsterSolid className="mr-4" size={25} />
              Vouchers
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <FaRegHeart className="mr-4" size={25} />
              Saved Items
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <LuWarehouse className="mr-4" size={25} />
              Followed Sellers
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6 border-b-2">
              <FaClockRotateLeft className="mr-4" size={25} />
              Recenlty Viewed
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Account Management
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Address Book
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Newsletter
            </button>
          </div>

          <div className="hover:bg-gray-200 hover:font-medium h-10 rounded overflow-hidden">
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6 border-b-2">
              Close Account
            </button>
          </div>

          <div className="h-10 text-center rounded overflow-hidden">
            <button className="h-full hover:bg-orange-100 text-orange-700 focus:font-medium ">
              LOGOUT
            </button>
          </div>
        </div>

        <div className="gap-4 p-3 mb-3 ml-2 w-3/4 rounded bg-white">
          <div className="hover:scale-[1.01] h-full rounded overflow-hidden shadow-lg">
            {/* <img
                            className="w-full"
                            src="https://eg.jumia.is/cms/Ramadan-24/Teasing/HP/1200x200EN.gif"
                            alt=""
                        /> */}
          </div>
        </div>
      </div>
    </>
  );
}
