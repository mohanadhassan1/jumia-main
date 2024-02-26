import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    setIsHelpMenuOpen(false);
  };

  const toggleHelpMenu = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
    setIsAccountMenuOpen(false);
  };

  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-20 py-5 rounded items-center bg-white sticky top-0 z-50">
      <div className="container flex mx-auto justify-between">
        <img
          src={logo}
          width={150}
          alt=""
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />

        <div className="flex items-center mt-4 lg:mt-0">
          <div className="relative flex flex-col lg:flex-row items-center">
            <FaSearch className="absolute top-0 left-0 ml-4 lg:hidden text-gray-400" />
            <input
              className="ml-0 lg:ml-4 lg:pl-10 pr-2 outline-none shadow-xl rounded lg:w-96 h-10"
              type="search"
              name="search"
              id="search"
              placeholder="Search product, brands, and categories"
            />
            <button className="button bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 lg:mt-0">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full lg:w-auto mt-4 lg:mt-0">
        <div className="flex lg:hidden">
          <button
            className="text-gray-500 hover:text-orange-600 focus:outline-none"
            onClick={toggleAccountMenu}
          >
            <BsPerson
              size={20}
              onClick={() => (window.location.href = "/myaccount")}
            />
          </button>
          <button
            className="text-gray-500 hover:text-orange-600 focus:outline-none ml-4"
            onClick={toggleHelpMenu}
          >
            <FaRegQuestionCircle
              size={20}
              onClick={() => (window.location.href = "/help")}
            />
          </button>
        </div>
        <ul className="hidden lg:flex items-center gap-2">
          {/* Account Menu */}
          <li>
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full rounded-md bg-white py-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4"
                id="account-menu-button"
                aria-expanded={isAccountMenuOpen}
                aria-haspopup="true"
                onClick={toggleAccountMenu}
              >
                <BsPerson size={20} className="mr-2" />
                Account
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Account Dropdown menu */}
              {isAccountMenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="account-menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/login"
                      className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-16 m-2 rounded focus:outline-none focus:shadow-outline"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      SIGN IN
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="/myaccount"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-1"
                    >
                      <div className="flex">
                        <BsPerson size={20} className="mr-6" />
                        My Account
                      </div>
                    </a>
                    <a
                      href="/myaccount"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-2"
                    >
                      <div className="flex">
                        <FiInbox size={20} className="mr-6" />
                        Orders
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-3"
                    >
                      <div className="flex">
                        <CiHeart size={20} className="mr-6" />
                        Saved Items
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
          {/* Help Menu */}
          <li>
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full rounded-md bg-white py-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4"
                id="help-menu-button"
                aria-expanded={isHelpMenuOpen}
                aria-haspopup="true"
                onClick={toggleHelpMenu}
              >
                <FaRegQuestionCircle size={20} className="mr-2" />
                HELP
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Help Dropdown menu */}
              {isHelpMenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="help-menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/help"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-1"
                    >
                      <div className="flex ">Help Center</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-2"
                    >
                      <div className="flex ">Place an Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-3"
                    >
                      <div className="flex ">Pay Your Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-4"
                    >
                      <div className="flex">Cancel an Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-5"
                    >
                      <div className="flex hover:bg-gray-300">
                        Create a Return
                      </div>
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3  m-2 rounded focus:outline-none focus:shadow-outline"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <div className="flex justify-center items-center">
                        <AiOutlineMessage className="mr-2" />
                        LIVE CHAt
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
          {/* Cart Button */}
          <li>
            <a
              href="/cart"
              className="inline-flex justify-center items-center w-full rounded-md bg-white p-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4"
            >
              <MdOutlineShoppingCart size={25} className="mr-2" />
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
