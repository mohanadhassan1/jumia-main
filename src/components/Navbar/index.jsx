import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaRegQuestionCircle } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../store/slices/products";

import { selectIsLoggedIn, selectSelectedUser } from "../../store/slices/authSlice";
import { login, logout } from '../../store/slices/authSlice';


const Navbar = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    // Filter products when query changes
    const filtered =
      query === ""
        ? products
        : products.filter((product) =>
            product.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );
    setFilteredProducts(filtered);
  }, [products, query]);

  const handleInputChange = (e) => {
    setQuery("");
    setQuery(e.target.value); // Update query state with input value
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    setIsHelpMenuOpen(false);
  };

  const toggleHelpMenu = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
    setIsAccountMenuOpen(false);
  };

  const logoutBtn = () => {
    localStorage.removeItem('token');

    // navigate('/');
  };

  dispatch(login(/* user data */));

  dispatch(logout());

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectSelectedUser);



  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-20 py-5 rounded items-center bg-white sticky top-0 z-50">
      <div className="container lg:flex mx-auto justify-between items-center">
        <div>
          <img
            src={logo}
            width={150}
            alt=""
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <div className="relative flex items-center mt-4 lg:mt-0 flex-grow ">
          <FaSearch className="absolute top-3 left-3 ml-4 hidden lg:block text-gray-400" />
          <input
            ref={searchInputRef}
            className="ml-0 lg:ml-4 lg:pl-10 pr-2 pl-5 outline-none shadow-xl rounded w-5/7 lg:w-full lg:max-w-xl h-11"
            type="search"
            name="search"
            id="search"
            placeholder="Search product, brands, and categories"
            onChange={handleInputChange}
          />
          <button className="button bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 lg:mt-0">
            SEARCH
          </button>
          {query && (
            <div className="absolute left-0 top-0 mt-12 w-full bg-white rounded-lg shadow-lg border border-gray-200">
              {filteredProducts.map((product) => (
                <span
                  key={product.id}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                    setQuery(""); // Clear the input field
                    searchInputRef.current.value = ""; // Clear the input field
                  }}
                >
                  {product.name}
                </span>
              ))}
            </div>
          )}
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
                  className="inline-flex justify-center items-center w-full rounded-md bg-white py-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4 px-5"
                  id="account-menu-button"
                  aria-expanded={isAccountMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleAccountMenu}
                >
                  <BsPerson size={20} className="mr-2" />
                  {/* {isLoggedIn ? "user.name" : "Account"} */}
                  {isLoggedIn && user ? user.name : "Account"}
                  <IoIosArrowDown className="absolute right-0 " />
                </button>
                {/* <button onClick={handleAccountClick}>
                  {isLoggedIn ? user.name : "Account"}
                  <IoIosArrowDown />
                </button> */}

                {/* Account Dropdown menu */}
                {isAccountMenuOpen && (
                  <div
                    className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="account-menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-2" role="none">
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
                    <div className="py-2" role="none">
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
                    <div className="py-2" role="none">
                      <a
                        href="/"
                        onClick={logoutBtn}
                        className="flex justify-center hover:bg-orange-100 text-orange-700 font-bold rounded focus:outline-none focus:shadow-outline"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        LOG OUT
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
                  className="inline-flex justify-center items-center w-full rounded-md bg-white py-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4 px-5"
                  id="help-menu-button"
                  aria-expanded={isHelpMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleHelpMenu}
                >
                  <FaRegQuestionCircle size={20} className="mr-2" />
                  HELP
                  <IoIosArrowDown className="absolute right-0 " />
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
                    <div className="py-2" role="none">
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
                    <div className="py-2" role="none">
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
          </ul>

          {/* Cart Button */}
          <div className="hidden lg:block">
            <button
              type="button"
              className="inline-flex justify-center items-center w-full rounded-md bg-white py-2 text-sm font-bold text-black shadow-sm hover:text-orange-600 focus:bg-gray-300 mx-4 px-5"
              onClick={() => {
                window.location.href = "/cart";
              }}
            >
              <MdOutlineShoppingCart size={25} className="mr-2" />
              Cart
            </button>
          </div>
        </div>
        <MdOutlineShoppingCart
          size={20}
          className="lg:hidden mt-2 cursor-pointer"
          onClick={() => {
            window.location.href = "/cart";
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
