import React, { useEffect, useState } from "react";
import { FaBox, FaSearch, FaTelegramPlane } from "react-icons/fa";
import { MdCardGiftcard, MdOutlinePerson, MdPayment } from "react-icons/md";
import { PiTruck } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
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
  const [showPayments, setShowPayments] = useState(false);
  const [showVouchers, setshowVouchers] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showReturnsRefunds, setShowReturnsRefunds] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSellOnJumia, setShowSellOnJumia] = useState(false);
  const [isPlaceAnOrderClicked, setIsPlaceAnOrderClicked] = useState(false);
  const [isPayForOurOrderClicked, setIsPayForOurOrderClicked] = useState(false);
  const [isTrackYourOrderClicked, setIsTrackYourOrderClicked] = useState(false);
  const [isCancelAnOrderClicked, setIsCancelAnOrderClicked] = useState(false);
  const [isCreateReturnClicked, setIsCreateReturnClicked] = useState(false);

  useEffect(() => {
    setShowPayments(true);
  }, []);

  const displayPayments = () => {
    setShowPayments(true);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayVouchers = () => {
    setshowVouchers(true);
    setShowPayments(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayProducts = () => {
    setShowProducts(true);
    setShowPayments(false);
    setshowVouchers(false);
    setShowDelivery(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayDelivery = () => {
    setShowDelivery(true);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayOrders = () => {
    setShowOrders(true);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayReturnsRefunds = () => {
    setShowReturnsRefunds(true);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowAccount(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayAccount = () => {
    setShowAccount(true);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displaySellOnJumia = () => {
    setShowSellOnJumia(true);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowReturnsRefunds(false);
    setShowAccount(false);
    setIsPlaceAnOrderClicked(false);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
  };

  const displayPlaceAnOrder = () => {
    setIsPlaceAnOrderClicked(true);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
    setShowAccount(false);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
  };

  const displayPayForOurOrder = () => {
    setIsPayForOurOrderClicked(true);
    setIsPlaceAnOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
    setShowAccount(false);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
  };
  const displayTrackYourOrder = () => {
    setIsTrackYourOrderClicked(true);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setIsCreateReturnClicked(false);
    setShowAccount(false);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
  };
  const displayCancelAnOrder = () => {
    setIsCancelAnOrderClicked(true);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCreateReturnClicked(false);
    setShowAccount(false);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
  };
  const displayCreateReturn = () => {
    setIsCreateReturnClicked(true);
    setIsPlaceAnOrderClicked(false);
    setIsPayForOurOrderClicked(false);
    setIsTrackYourOrderClicked(false);
    setIsCancelAnOrderClicked(false);
    setShowAccount(false);
    setShowReturnsRefunds(false);
    setShowPayments(false);
    setshowVouchers(false);
    setShowProducts(false);
    setShowDelivery(false);
    setShowOrders(false);
    setShowSellOnJumia(false);
  };
  return (
    <>
      {/* top orange div */}
      <div className="bg-orange-100 h-40">
        <div className="container mx-auto pt-5">
          <p className="font-medium">Help Center </p>
          <h1 className="font-extrabold ">Hi, how can we help you?</h1>
        </div>
      </div>

      {/* container */}
      <div className="container mx-auto lg:-translate-y-10">
        {/*  div images */}
        <div className="flex flex-wrap gap-4 md:gap-10">
          <div
            className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
              isPlaceAnOrderClicked ? "border-t-4 border-orange-500" : ""
            }`}
            onClick={displayPlaceAnOrder}
          >
            <p className="flex justify-start items-center font-bold">
              Place an Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-place-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div
            className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
              isPayForOurOrderClicked ? "border-t-4 border-orange-500" : ""
            }`}
            onClick={displayPayForOurOrder}
          >
            <p className="flex justify-start items-center font-bold">
              Pay for Your Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-pay-for-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div
            className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
              isTrackYourOrderClicked ? "border-t-4 border-orange-500" : ""
            }`}
            onClick={displayTrackYourOrder}
          >
            <p className="flex justify-start items-center font-bold">
              Track Your Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-track-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div
            className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
              isCancelAnOrderClicked ? "border-t-4 border-orange-500" : ""
            }`}
            onClick={displayCancelAnOrder}
          >
            <p className="flex justify-start items-center font-bold">
              Cancel an Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-cancel-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div
            className={`flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 ${
              isCreateReturnClicked ? "border-t-4 border-orange-500" : ""
            }`}
            onClick={displayCreateReturn}
          >
            <p className="flex justify-start items-center font-bold">
              Create a Return
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-request-return-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>

        {/* search input */}
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

        {/* list group and content */}
        <div className="h-auto w-full gap-2 flex">
          {/* left side list group */}
          <div className="w-3/12 ">
            <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayPayments}
              >
                <MdPayment size={25} className="mr-2" />
                Payments
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayVouchers}
              >
                <MdCardGiftcard size={25} className="mr-2" />
                Vouchers
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayProducts}
              >
                <PiTruck size={25} className="mr-2" />
                Products
              </button>

              <button
                type="button"
                className="relative h-16  inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayDelivery}
              >
                <GiReturnArrow size={25} className="mr-2" />
                Delivery
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayOrders}
              >
                <FaBox size={25} className="mr-2" />
                Orders
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayReturnsRefunds}
              >
                <MdOutlinePerson size={25} className="mr-2" />
                Returns & Refunds
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displayAccount}
              >
                <FaTelegramPlane size={25} className="mr-2" />
                Account
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold rounded-b-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={displaySellOnJumia}
              >
                <LiaBoxSolid size={25} className="mr-2" />
                Sell on Jumia
              </button>
            </div>
          </div>

          {/* right side content */}
          <div className="w-9/12 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {/* Conditionally render Payments component based on showPayments state */}
            {showPayments ? <Payments /> : null}

            {/* Conditionally render Vouchers component based on showVouchers state */}
            {showVouchers ? <Vouchers /> : null}

            {/* Conditionally render Products component based on showProducts state */}
            {showProducts ? <Products /> : null}

            {/* Conditionally render Delivery component based on showDelivery state */}
            {showDelivery ? <Delivery /> : null}

            {/* Conditionally render Orders component based on showOrders state */}
            {showOrders ? <Orders /> : null}

            {/* Conditionally render ReturnsRefunds component based on showReturnsRefunds state */}
            {showReturnsRefunds ? <ReturnsRefunds /> : null}

            {/* Conditionally render ReturnsRefunds component based on showReturnsRefunds state */}
            {showAccount ? <Account /> : null}

            {/* Render content for "Sell on Jumia" based on the state */}
            {showSellOnJumia ? <SellOnJumia /> : null}

            {/* Render content for Place an  Order based on the state */}
            {isPlaceAnOrderClicked ? <PlaceOrder /> : null}

            {/* Render content for Pay For A Order based on the state */}
            {isPayForOurOrderClicked ? <PayForOrder /> : null}

            {/* Render content for Track Your Order based on the state */}
            {isTrackYourOrderClicked ? <TrackOrder /> : null}

            {/* Render content for Cancel Your Order based on the state */}
            {isCancelAnOrderClicked ? <CancelOrder /> : null}

            {/* Render content for Create A Return based on the state */}
            {isCreateReturnClicked ? <CreateReturn /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpMain;
