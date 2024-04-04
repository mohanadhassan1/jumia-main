import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import { useNavigate } from "react-router-dom";
import SmallCart from "../Small Cart/SmallCart";
import CarouselProducts from "../Carousel/Carousel for category/CarouselProduct";
import BRAND from "../Brand/index";

export default function SupermarketCategory() {


  
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dispatching fetchProducts...");
    dispatch(fetchProducts());
  }, [dispatch]);

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

  const [newNameValue, setNewNameValue] = useState("Fashion");
  const [selectSort, setselectSort] = useState("Popularity");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeSelect = (newSelect, event) => {
    event.preventDefault();
    setselectSort(newSelect);
    setIsOpen(!isOpen);
  };

  const idCategory = useSelector ((state)=>state.idCategory.idCategory.id)
console.log("in category: ",idCategory);
  const filteredProducts = products.filter(
    (product) =>
      product.subcategory_id.category_id === idCategory
  );

  console.log("Filtered Products:", filteredProducts);

  const uniqueBrands = Array.from(new Set(filteredProducts.map((product) => product.brand)));
  const uniqueCategories = Array.from(new Set(filteredProducts.map((product) => product.subcategory_id.name)));

  const handleNewName = (newName) => {
    event.preventDefault();

    console.log(`New Name: ${newName}`);
    setNewNameValue(newName);
  };

  

  return (
    <>
      <div className="md:container h-full mx-auto items-center justify-center">
        <h2 className="text-xl font-medium uppercase text-center mb-3 py-4 px-6 bg-teal-200">
          SUPERMARKET TOP DEALS
        </h2>
        {/* BigCart components */}
        <CarouselProducts products={filteredProducts} />
      
        <div className="md:flex p-3 mb-3">
          <div className="md:me-1 w-1/3 bg-white h-full">
          <BRAND
              className="w-full"
              brands={uniqueBrands}
              categories={uniqueCategories}
              changeCategories={handleNewName} // Pass the handleNewName function as the callback
              filterBrand={handleBrandFilterChange}
            />
          </div>

          <div className="md:flex flex-wrap gap-4 p-4 mb-3 w-full rounded bg-white">
            <div className="flex justify-between  w-full">
              <p>{newNameValue}</p>
              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  className="hover:focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                          onClick={(e) => changeSelect("Popularity", e)}
                        >
                          Popularity
                        </a>
                      </li>
                      {/* Other options */}
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
                  className="md:w-1/2  lg:w-[40%]  xl:w-[20%] mb-4  "
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                  }}
                >
                <SmallCart Image={product.images} title={product.name} price={product.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
