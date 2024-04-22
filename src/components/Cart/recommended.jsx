import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { responsive } from "./dataStatic";

const Recommended = () => {
  const { products } = useSelector((state) => state.products);
  const numberOfProductsToTake = 10;

  // State to store the filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Skip the first 20 products and take the next numberOfProductsToTake products
    const finalProducts = products.slice(50, 50 + numberOfProductsToTake);
    setFilteredProducts(finalProducts);
  }, [products, numberOfProductsToTake]);
  return (
    <>
      <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
        <h2 className="font-medium text-xl">Recommended For You</h2>
      </div>
      <Carousel
        responsive={responsive}
        className="flex gap-4 p-3 mb-3 rounded bg-white"
      >
        {filteredProducts.map((product, index) => (
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

export default Recommended;
