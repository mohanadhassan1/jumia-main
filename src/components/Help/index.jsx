import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaSearch,
  FaTelegramPlane,
  // FaUserOutline,
} from "react-icons/fa";
import {
  MdCardGiftcard,
  MdOutlinePerson,
  MdPayment,
  MdLocalShipping,
} from "react-icons/md";
import { PiTruck } from "react-icons/pi";
// import { GiReturnArrow } from "react-icons/gi";
import { LiaBoxSolid } from "react-icons/lia";
import Payments from "./HelpContents/Payments";
import Vouchers from "./HelpContents/Vouchers";
import Products from "./HelpContents/Products";
import Delivery from "./HelpContents/Delivery";
import Orders from "./HelpContents/Orders";
import ReturnsRefunds from "./HelpContents/ReturnsRefunds";
import Account from "./HelpContents/Account";
import SellOnJumia from "./HelpContents/SellOnJumia";
import PlaceOrder from "./HelpContents/PlaceOrder";
import PayForOrder from "./HelpContents/PayForOrder";
import TrackOrder from "./HelpContents/TrackOrder";
import CancelOrder from "./HelpContents/CancelOrder";
import CreateReturn from "./HelpContents/CreateReturn";

const HelpMain = () => {
  const [activeTab, setActiveTab] = useState("Payments");

  useEffect(() => {
    setActiveTab("Payments");
  }, []);

  const displayContent = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Top orange div */}
      <div className="bg-orange-100 h-40">
        <div className="container mx-auto pt-5">
          <p className="font-medium">Help Center </p>
          <h1 className="font-extrabold ">Hi, how can we help you?</h1>
        </div>
      </div>

      {/* Container */}
      <div className="container mx-auto lg:-translate-y-10">
        {/* Div images */}
        <div className="flex flex-wrap gap-4 md:gap-10">
          {/* Define tabs with their respective content */}
          {[
            {
              name: "Place an Order",
              img: (
                <img
                  src="https://cxp-desktop.netlify.app/jpg/how-to-place-order-d.png"
                  alt=""
                  className="rounded"
                />
              ),
            },
            {
              name: "Pay for Your Order",
              img: (
                <img
                  src="https://cxp-desktop.netlify.app/jpg/how-to-pay-for-order-d.png"
                  alt=""
                  className="rounded"
                />
              ),
            },
            {
              name: "Track Your Order",
              img: (
                <img
                  src="https://cxp-desktop.netlify.app/jpg/how-to-track-order-d.png"
                  alt=""
                  className="rounded"
                />
              ),
            },
            {
              name: "Cancel an Order",
              img: (
                <img
                  src="https://cxp-desktop.netlify.app/jpg/how-to-cancel-order-d.png"
                  alt=""
                  className="rounded"
                />
              ),
            },
            {
              name: "Create a Return",
              img: (
                <img
                  src="https://cxp-desktop.netlify.app/jpg/how-to-request-return-d.png"
                  alt=""
                  className="rounded"
                />
              ),
            },
          ].map((tab, index) => (
            <div
              key={index}
              className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
                activeTab === tab.name ? "border-t-4 border-orange-500" : ""
              }`}
              onClick={() => displayContent(tab.name)}
            >
              <p className="flex justify-start items-center font-bold">
                {tab.name}
              </p>
              <div className="ml-auto mt-auto">{tab.img}</div>
            </div>
          ))}
        </div>

        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="absolute text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block my-5 w-3/6 p-4 ps-10 text-sm text-gray-900 outline-none  rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder='Type keywords like "return"'
          />
        </div>

        {/* List group and content */}
        <div className="h-auto w-full gap-2 flex">
          {/* Left side list group */}
          <div className="w-3/12">
            <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {[
                { name: "Payments", icon: <MdPayment /> },
                { name: "Vouchers", icon: <MdCardGiftcard /> },
                { name: "Products", icon: <PiTruck /> },
                { name: "Delivery", icon: <MdLocalShipping /> },
                { name: "Orders", icon: <FaBox /> },
                { name: "Returns & Refunds", icon: <MdOutlinePerson /> },
                { name: "Account", icon: <FaTelegramPlane /> },
                { name: "Sell on Jumia", icon: <LiaBoxSolid /> },
              ].map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  className={`relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b ${
                    activeTab === tab.name
                      ? "border-gray-200"
                      : "border-transparent"
                  } rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}
                  onClick={() => displayContent(tab.name)}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="w-9/12 mb-10 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {/* Render the active content based on the activeTab state */}
            {[
              { name: "Payments", content: <Payments /> },
              { name: "Vouchers", content: <Vouchers /> },
              { name: "Products", content: <Products /> },
              { name: "Delivery", content: <Delivery /> },
              { name: "Orders", content: <Orders /> },
              { name: "Returns & Refunds", content: <ReturnsRefunds /> },
              { name: "Account", content: <Account /> },
              { name: "Sell on Jumia", content: <SellOnJumia /> },
              { name: "Place an Order", content: <PlaceOrder /> },
              { name: "Pay for Your Order", content: <PayForOrder /> },
              { name: "Track Your Order", content: <TrackOrder /> },
              { name: "Cancel an Order", content: <CancelOrder /> },
              { name: "Create a Return", content: <CreateReturn /> },
            ].map(
              (tab, index) =>
                activeTab === tab.name && <div key={index}>{tab.content}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpMain;
