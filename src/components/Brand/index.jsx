import React from "react";
import { FaStar } from "react-icons/fa6";

const DropdownSearchUser = ({ name, checked }) => {
  return (
    <li key={name}>
      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input
          type="checkbox"
          value=""
          checked={checked}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={`checkbox-item-${name}`}
          className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
        >
          {name}
        </label>
      </div>
    </li>
  );
};

const DISCOUNT_PERCENTAGE = [
  "50% or more",
  "40% or more",
  "30% or more",
  "20% or more",
  "10% or more",
];

const PRODUCT_RATING = [
<span className="inline-flex"><FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar /> & above</span>  ,
<span className="inline-flex"><FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar /> <FaStar /> & above</span>  ,
<span className="inline-flex"><FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> <FaStar  /> <FaStar  /> <FaStar /> & above</span>  ,
<span className="inline-flex"><FaStar className="text-yellow-500" /> <FaStar  /> <FaStar  /> <FaStar  /> <FaStar /> & above</span>  ,

];


const CAMPAIGNS = [
'Free Shipping Eligible',
'Made in Egypt',
'Non-Returnable',
'Verified by JUMIA',
];

export default function BRAND({ brands }) {
  return (
    <>
      {/* <!-- BRAND --> */}

      <p className="ps-2 py-2">BRAND</p>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownSearch"
        class="z-10  bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <div class="p-3">
          <label for="input-group-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search user"
            />
          </div>
        </div>
        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          {brands.map((brand) => (
            <DropdownSearchUser key={brand} name={brand} checked={this} />
          ))}
        </ul>
      </div>
      <hr className="h-0.5 bg-gray-300" />
      {/* <!-- DISCOUNT --> */}

      <p className="ps-2 py-2">DISCOUNT</p>
      <div>
        <ul className="h-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          <DropdownSearchUser
            key={"Show only discounted items"}
            name={"Show only discounted items"}
            checked={this}
          />
        </ul>
      </div>
      <hr className="h-0.5 bg-gray-300" />
      {/* <!-- PRICE --> */}

      <p className="ps-2 py-2">PRICE (EGP)</p>
      <div></div>
      <hr className="h-0.5 bg-gray-300" />
      {/* <!-- DISCOUNT PERCENTAGE --> */}

      <p className="ps-2 py-2">DISCOUNT PERCENTAGE</p>
      {DISCOUNT_PERCENTAGE.map((discount) => (
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {discount}
          </label>
        </div>
      ))}
      <hr className="h-0.5 bg-gray-300" />

      {/* <!-- PRODUCT RATING --> */}

      <p className="ps-2 py-2">PRODUCT RATING</p>
      {PRODUCT_RATING.map((discount) => (
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {discount}
          </label>
        </div>
      ))}
      <hr className="h-0.5 bg-gray-300" />

      {/* <!-- SHIPPED FROM --> */}

      <p className="ps-2 py-2">SHIPPED FROM </p>
      <div>
        <ul className="h-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          <DropdownSearchUser
            key={"Shipped from Egypt"}
            name={"Shipped from Egypt"}
            checked={this}
          />
           <DropdownSearchUser  
            key={"Shipped from abroad"}
            name={"Shipped from abroad"}
            checked={this}
          />
        </ul>
      </div>
      <hr className="h-0.5 bg-gray-300" />
      {/* <!-- EXPRESS DELIVERY --> */}

      <p className="ps-2 py-2">DISCOUNT</p>
      <div>
        <ul className="h-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          <DropdownSearchUser
            key={"Jumia Express"}
            name={"Jumia Express"}
            checked={this}
          />
        </ul>
      </div>
      <hr className="h-0.5 bg-gray-300" />
      {/* <!-- CAMPAIGNS --> */}

      <p className="ps-2 py-2">CAMPAIGNS
</p>

<div>
      <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          {CAMPAIGNS.map((CAMPAIGNS) => (
            <DropdownSearchUser key={CAMPAIGNS} name={CAMPAIGNS} checked={this} />
          ))}
        </ul>
      </div>
    </>
  );
}
