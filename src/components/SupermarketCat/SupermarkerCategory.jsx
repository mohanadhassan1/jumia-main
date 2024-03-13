import React, { useEffect, useState } from "react";
import BigCart from "../Big Cart/BigCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import SmallCart from "../Small Cart/SmallCart";
import CarouselProducts from "../Carousel/Carousel for category/CarouselProduct";
import BRAND from "../Brand/index";

export default function SupermarkerCategory() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dispatching fetchProducts...");
    dispatch(fetchProducts());
  }, []);

  console.log("Products:", products);
  const [newNameValue, setNewNameValue] = useState("Supermarket");

  // Define the callback function to receive the newName value
  const handleNewName = (newName) => {
    event.preventDefault();

    console.log(`New Name: ${newName}`);
    setNewNameValue(newName); // Update the state with the new name value
  };
  // Array filter by brand name

  const [arrBrand, setArrBrand] = useState([]);

  // Define the callback function to receive the arrBrandFilter value
  const handleBrandFilterChange = (filter) => {
    event.preventDefault();

    console.log("Brand Filter:", filter);
    console.log("Brand Filter:", arrBrand);
    // Update the parent state with the new filter value
    setArrBrand(filter);
  };

  const [selectSort, setselectSort] = useState("Popularity");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    event.preventDefault();

    setIsOpen(!isOpen);
  };
  function changeSelect(newSelect, event) {
    event.preventDefault();
    setselectSort(newSelect);
    setIsOpen(!isOpen);
  }
  const filteredProducts = products.filter(
    (product) =>
      product.subcategory_id.category_id === "65db6f61b5f61a0c49bde663"
  );
  console.log("Filtered Products:", filteredProducts); // Add this line to log filtered products

  const uniqueBrands = Array.from(
    new Set(filteredProducts.map((product) => product.brand))
  );
  const uniqueCategories = Array.from(
    new Set(filteredProducts.map((product) => product.subcategory_id.name))
  );

  return (
    <>
      <div className="md:container h-full mx-auto items-center justify-center">
        <h2 className=" text-xl font-medium uppercase text-center py-4 px-6 bg-teal-200">
          SUPERMARKET TOP DEALS
        </h2>
        <div className="md:flex gap-4 p-3 mb-3 rounded bg-white">
          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/Laundry-Products/Edit/572x250ENl.png"
            }
          />

          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/Colorx/Edit/572x250ENcc.png"
            }
          />
        </div>

        <CarouselProducts products={filteredProducts} />
        <h2 className=" text-xl font-medium uppercase text-center py-4 px-6 bg-teal-200">
          Check More Deals
        </h2>
        <div className="md:flex gap-4 p-3 mb-3 rounded bg-white">
          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/Farida/572x250EN-1.png"
            }
          />

          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/Dettol/572x250ENd.png"
            }
          />
        </div>
        <div className="md:flex gap-4 p-3 mb-3 rounded bg-white">
          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/White/572x250EN.png"
            }
          />

          <BigCart
            Image={
              "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/Air-freshener/572x250EN.png"
            }
          />
        </div>

        <div className="md:flex  p-3 mb-3 ">
          <div className="md:me-1 w-full bg-white h-full">
            <BRAND
              className="w-full"
              brands={uniqueBrands}
              categories={uniqueCategories}
              changeCategories={handleNewName} // Pass the handleNewName function as the callback
              filterBrand={handleBrandFilterChange}
            />
          </div>

          <div className="md:flex flex-wrap  gap-4 p-4 mb-3 rounded bg-white">
            <div className="flex justify-between items-center w-full">
              <p>{newNameValue}</p>
              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  className="  hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <label htmlFor="">Sort by:</label>
                  {selectSort}{" "}
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => changeSelect("Popularity", event)}
                        >
                          Popularity
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => changeSelect("Newest Arrivals", event)}
                        >
                          Newest Arrivals
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            changeSelect(" Price: Low to High", event)
                          }
                        >
                          Price: Low to High
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            changeSelect("Price: High to Low", event)
                          }
                        >
                          Price: High to Low
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            changeSelect("  Product Rating", event)
                          }
                        >
                          Product Rating
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {filteredProducts
              .filter(
                (product) =>
                  arrBrand.length === 0 || arrBrand.includes(product.brand)
              )
              .map((product) => (
                <div
                  className="md:w-1/2 lg:w-[30%] xl:w-[15%] mb-4 "
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                  }}
                >
                  <SmallCart Image={product.images} title={product.name} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
