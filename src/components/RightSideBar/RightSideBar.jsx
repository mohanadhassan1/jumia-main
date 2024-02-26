import React from "react";
import { HiBuildingStorefront } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";

export default function RightSideBar() {
  return (
    <>
      <aside className="md:bg-white ms-3  flex-shrink-0">
        <div className="p-4">
          <div className="mt-2">
            <ul>
              <li className="mb-6 ">
                <a
                  href="#"
                  className="flex items-center text-2xl text-black hover:text-gray-400"
                >
                  <HiBuildingStorefront className="text-[#FEB647] me-2" />
                  <div>
                    <p className="text-base">Sell on JUMIA</p>
                    <p className="text-xs">And Grow Your Business</p>
                  </div>
                </a>
              </li>
              <li className="mb-6 ">
                <a
                  href="#"
                  className="flex items-center text-2xl text-black hover:text-gray-400"
                >
                  <GiReceiveMoney className="text-[#FEB647] me-2" />
                  <div>
                    <p className="text-base">Installments</p>
                    <p className="text-xs">With Your Bank</p>
                  </div>
                </a>
              </li>
              <li className="mb-2 ">
                <a
                  href="#"
                  className="flex items-center text-2xl text-black hover:text-gray-400"
                >
                  <FiSettings className="text-[#FEB647] me-2" />
                  <div>
                    <p className="text-base">Warranty</p>
                    <p className="text-xs">On Your Purchases</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="mt-3 ms-3">
        <a href="#">
          <img
            src="https://eg.jumia.is/cms/Week7-8-2024/Installments/INSTALLMENTSEN.png"
            alt=""
            srcset=""
            className="w-full"
          />
        </a>
      </div>
    </>
  );
}
