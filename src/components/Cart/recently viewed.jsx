
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { responsive } from "./dataStatic";

export const generateRecently = (products) => {
  if (products.length === 0) return [];

  const getRandomProducts = (products, count) => {
    const shuffled = [...products];
    shuffled.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return getRandomProducts(products, 10);
};

const Recently = () => {
  const { products } = useSelector((state) => state.products);
  const [recentlyProducts, setRecentleyProducts] = useState(() => {
    const storedReccentlyProducts = localStorage.getItem("recentlyProducts");
    if (storedReccentlyProducts) {
      return JSON.parse(storedReccentlyProducts);
    } else {
      const newRecentlyProducts = generateRecently(products);
      const currentDate = new Date().toISOString().slice(0, 10);
      localStorage.setItem("recentlyProducts", JSON.stringify(newRecentlyProducts));
      localStorage.setItem("lastGeneratedDate", currentDate);
      return newRecentlyProducts;
    }
  });

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastGeneratedDate = localStorage.getItem("lastGeneratedDate");

    if (lastGeneratedDate !== currentDate) {
      const newRecentlyProducts = (generateRecently);
      setRecentleyProducts(newRecentlyProducts);
      localStorage.setItem("recommendedProducts", JSON.stringify(newRecentlyProducts));
      localStorage.setItem("lastGeneratedDate", currentDate);
    }
  }, [products]);

  return (
    <>
      <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
        <h2 className="font-medium text-xl">Recently views</h2>
      </div>
      <Carousel
        responsive={responsive}
        className="flex gap-4 p-3 mb-3 rounded bg-white"
      >
        {recentlyProducts.map((product, index) => (
          <div
            key={index}
            className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3"
          >
            <img src={product.images[0]} className="w-full mx-2" alt={product.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Recently;
