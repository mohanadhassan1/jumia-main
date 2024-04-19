// import Carousel from "react-multi-carousel";
// import { useSelector } from "react-redux";
// import { responsive } from "./dataStatic";
// import { useEffect } from "react";

// export const generateRecommendedProducts = (products) => {
//     if (products.length === 0) return [];
  
//     const getRandomProducts = (products, count) => {
//       const shuffled = [...products];
//       shuffled.sort(() => 0.5 - Math.random());
//       return shuffled.slice(0, count);
//     };
  
//     return getRandomProducts(products, 10);
//   };
  
//   // Recommended component
//   const Recommended = () => {
//     const { products } = useSelector((state) => state.products);
//     const recommendedProducts = generateRecommendedProducts(products);
//     const THRESHOLD = 24 * 60 * 60 * 1000;

//     useEffect(() => {
//       const lastVisitTimestamp = sessionStorage.getItem("lastVisitTimestamp");
//       const currentTime = Date.now();
  
//       if (!lastVisitTimestamp || currentTime - lastVisitTimestamp > THRESHOLD) {
//         // Regenerate recommended products if no timestamp or threshold exceeded
//         // Add your logic here to regenerate recommended products
//       }
  
//       return () => {
//         // Update last visit timestamp before unmounting
//         sessionStorage.setItem("lastVisitTimestamp", currentTime);
//       };
//     }, []);
//     // Render recommended products
//     return (
//       <>
//       <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
//           <h2 className="font-medium text-xl">Recommende For You</h2>
//         </div>
//         <Carousel
//           responsive={responsive}
//           className="flex gap-4 p-3 mb-3 rounded bg-white "
//         >
//           {recommendedProducts.map((product, index) => (
//             <div
//               key={index}
//               className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3 "
//             >
//               <img src={product.images} className="w-full mx-2"></img>
//             </div>
//           ))}
//         </Carousel>
//         ;</>
//     );
//   };
  
//   export default Recommended;
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { responsive } from "./dataStatic";

export const generateRecommendedProducts = (products) => {
  if (products.length === 0) return [];

  const getRandomProducts = (products, count) => {
    const shuffled = [...products];
    shuffled.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return getRandomProducts(products, 10);
};

const Recommended = () => {
  const { products } = useSelector((state) => state.products);
  const recommendedProducts = generateRecommendedProducts(products);
  const THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const [shouldRegenerate, setShouldRegenerate] = useState(false);

  useEffect(() => {
    const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");
    const currentTime = Date.now();

    if (!lastVisitTimestamp || currentTime - lastVisitTimestamp > THRESHOLD) {
      // If last visit timestamp is not set or more than 24 hours have passed,
      // set shouldRegenerate to true to regenerate recommended products
      setShouldRegenerate(true);
      // Update last visit timestamp in local storage
      localStorage.setItem("lastVisitTimestamp", currentTime);
    }
  }, []);

  useEffect(() => {
    if (shouldRegenerate) {
      // Regenerate recommended products if shouldRegenerate is true
      const newRecommendedProducts = generateRecommendedProducts(products);
      // Update recommended products in state or dispatch an action to update Redux store
      // setRecommendedProducts(newRecommendedProducts); // Example if using local state
    }
  }, [shouldRegenerate, products]);

  return (
    <>
      <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
        <h2 className="font-medium text-xl">Recommended For You</h2>
      </div>
      <Carousel
        responsive={responsive}
        className="flex gap-4 p-3 mb-3 rounded bg-white"
      >
        {recommendedProducts.map((product, index) => (
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

  