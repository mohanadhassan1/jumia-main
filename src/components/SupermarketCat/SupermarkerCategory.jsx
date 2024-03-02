import React, { useEffect, useState } from "react";
import BigCart from "../Big Cart/BigCart";
// import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import SmallCart from "../Small Cart/SmallCart";
// import CarouselMain from "../Carousel/Carousel";
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [name, setName] = useState("Supermarket");

  function changeCategories(newName, event) {
    event.preventDefault();
    setName(newName);
  }

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
    (product) => product.subcategory_id.category_id === "65db6f61b5f61a0c49bde663"
  );
  console.log("Filtered Products:", filteredProducts); // Add this line to log filtered products

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
        {/* <Carousel
          responsive={responsive}
          className="gap-4 p-2 mb-3 rounded bg-white mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 items-center"
        >
          {products.map((product) => (
            <div key={product._id} to={product._id}>
              <div className="hover:scale-[1.01] group relative mx-2">
                <div className="hover:scale-[1.01] group relative">
                  <div className="w-52 h-52 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.images}
                      alt={product.name}
                      onClick={() => {
                        navigate(`/product/${product._id}`);
                      }}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 justify-between">
                    <h3 className="text-lg  leading-6 font-medium text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel> */}
        <CarouselProducts products={filteredProducts}/>
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
            <h4 className="uppercase text-base py-5 px-5">Category</h4>
            <ul className="list-none ">
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1 "
                  onClick={() => changeCategories("Supermarket", event)}
                >
                  Supermarket
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Air Fresheners", event)}
                >
                  Air Fresheners
                </a>
              </li>

              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Beverages", event)}
                >
                  Beverages
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Candy & Chocolate", event)}
                >
                  Candy & Chocolate
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Cleaning Tools", event)}
                >
                  Cleaning Tools
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories(" Cooking & Baking", event)}
                >
                  Cooking & Baking
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() =>
                    changeCategories(" Dairy, Cheese & Eggs", event)
                  }
                >
                  Dairy, Cheese & Eggs
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Dishwashing", event)}
                >
                  Dishwashing
                </a>
              </li>

              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Drinks", event)}
                >
                  Drinks
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories(" Food Cupboard", event)}
                >
                  Food Cupboard
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() =>
                    changeCategories("Herbs, Spices & Seasonings", event)
                  }
                >
                  Herbs, Spices & Seasonings
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Household Batteries", event)}
                >
                  Household Batteries
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Household Cleaning", event)}
                >
                  Household Cleaning
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories(" Household Supplies", event)}
                >
                  Household Supplies
                </a>
              </li>

              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Laundry", event)}
                >
                  Laundry
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="w-[15rem] pb-1"
                  onClick={() => changeCategories(" Lighters & Matches", event)}
                >
                  Lighters & Matches
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() => changeCategories("Paper & Plastic", event)}
                >
                  Paper & Plastic
                </a>
              </li>
              <li className="w-full flex items-center justify-between ps-2  hover:bg-gray-300 ">
                <a
                  href=""
                  className="pb-1"
                  onClick={() =>
                    changeCategories("Tobacco-Related Products", event)
                  }
                >
                  Tobacco-Related Products
                </a>
              </li>
            </ul>

            <hr className="h-0.5 bg-gray-300" />
            <BRAND className="w-full"  brands = {['915 Generation','ABC','Abu Auf',
          'Afilar',
          'Al Qahawi',
          'AL Ramalah',
          'AlRehab',
          'Ariel',
          'Arrow',
          'As Seen On Tv',
          'Banafa',
          'Beuotat Foods',
          'Bras Cafe',
          'Brix',
          'Bubbles',
          'California Egmont',
          'Camelion',
          'Cif',
          'Clorox',
          'Dandy',
          'Dettol',
          'Divatoll',
          'Dora',
          'Drinks',
          'Duracell',
          'Eco',
          'El Helal W El Negma',
          'Energizer',
          'Eveready',
          'Fairy',
          'Familia',
          'Farida',
          'Farouk Pasha',
          'Fine',
          'Fogg',
          'Free',
          'General',
          'Generic',
          'Glade',
          'Glory',
          'Golden Air',
          'Gp',
          'Green Oases',
          'Hama',
          'Handmade',
          'Happy Valley',
          'Harpic',
          'Harraz',
          'Helal & Golden Star',
          'Helwan',
          "Johnson's",
          'Karimed',
          'Ketolicious',
          "L'Oreal Paris",
          'Lavida',
          'Ludwik',
          'Lugano Cafeé',
          'Luster',
          'Madar',
          'Maxell',
          'Mora',
          'Mozn',
          'MP',
          'My Way',
          'Nabtah',
          'NIVEA',
          'Osterberg',
          'Panasonic',
          'Parex',
          'Power One',
          'Rayovac',
          'Rehana',
          'Renata',
          'ROSERAIE',
          'Rubex',
          'Sanita',
          'Saquella',
          ]}/>

          </div>

          <div className="md:flex flex-wrap  gap-4 p-4 mb-3 rounded bg-white">
            <div className="flex justify-between items-center w-full">
              <h2>{name}</h2>
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
                      <li
                        
                      >
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            changeSelect("Popularity", event)
                          }
                       >
                          Popularity
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() =>
                            changeSelect("Newest Arrivals", event)
                          }
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
            {filteredProducts.map((product) => (
              <div
                className="md:w-1/2 lg:w-[30%] xl:w-[15%] mb-4 "
                onClick={() => {
                  navigate(`/product/${product.product_id}`);
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
