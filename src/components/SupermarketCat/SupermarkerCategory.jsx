import React, { useEffect } from "react";
import BigCart from "../Big Cart/BigCart";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import SmallCart from "../Small Cart/SmallCart";

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
        <Carousel
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
        </Carousel>
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
        <h2 className=" text-xl font-medium uppercase text-center py-4 px-6 bg-teal-200">
          HOUSEHOLD SUPPLIES
        </h2>
        <div className="md:flex flex-wrap  gap-4 p-4 mb-3 rounded bg-white">
          {products.map((product) => (
            <div
              className="md:w-1/2 lg:w-[30%] xl:w-[15%] mb-4"
              onClick={() => {
                navigate(`/product/${product.product_id}`);
              }}
            >
              <SmallCart Image={product.images} title={product.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
