import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/slices/cart";
import { selectIsLoggedIn } from "../../store/slices/authSlice";
import toast from "react-hot-toast";

export default function SmallCart({ Image, title, price, product }) {
  const maxLength = 20; // Define the maximum length for the title

  // Function to truncate the title if it exceeds the maximum length
  const truncateTitle = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, isLoggedIn }));
    toast.success(`${product.name} added to cart successfully`);
  };

  return (
    <div class="max-w-2xl mx-auto  ">
      <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg p-8" src={Image} alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {truncateTitle(title, maxLength)}
            </h3>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            {/* Ratings SVGs */}
          </div>
          <div class="flex items-center justify-between">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
            EGY {price}
            </p>
           
          </div>
            <button
              onClick={handleAddToCart}
              className="button bg-orange-600 w-full hover:bg-orange-700 text-white mt-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ADD TO CART
            </button>
        </div>
      </div>
    </div>
  );
}
