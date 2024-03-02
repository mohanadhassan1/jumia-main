import MySlider from "../Slider/Slider";
import { MdOutlineDelete } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {recommendedForYou,responsive} from "./dataStatic";
import {
  updateItemQuantity,
  removeItemFromCart,
  addItemToCart,
} from "../../store/slices/cart";
import { useState, useEffect } from "react";

const Cart = () => {
  


  const [cartItems, setCartItems] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Retrieve cart data from local storage
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCartItems( parsedCartData.items);
      console.log (parsedCartData.items)
    }
  }, []);

  useEffect(() => {
    calculateSubtotal();
    setCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  };

  const handleIncreaseQuantity = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      const updatedCartItems = cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: quantity - 1 } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
  };

 
  document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    var cartItems = []; // Example array of cart items

    function checkCart() {
      var cartContainer = document.getElementById("cartContainer");
      var emptyCartMessage = document.getElementById("emptyCartMessage");

      if (!cartContainer || !emptyCartMessage) {
        console.error("Required elements not found");
        return;
      }

      if (cartItems?.length === 0) {
        cartContainer.style = { display: "none" };
        emptyCartMessage.style = { display: block };
      } else {
        cartContainer.style = { display: "block" };
        emptyCartMessage.style = { display: "none" };
      }
    }

    checkCart();
  });

  return (
    <div className="container mx-auto h-full flex items-center justify-center">
      {/* Eman */}

      <div className="container">
        <div
          id="emptyCartMessage"
          style={{ display: cartEmpty ? "block" : "none", textAlign: "center" }}
          className="w-3/4 p-4 bg-white m-2 "
        >
          <img
            style={{ textAlign: "center", marginLeft: "400px" }}
            src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg"
          ></img>
          <h3>Your cart is emptey!</h3>
          <p>Browse our categories and discover our best deals!</p>
          <button className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
            <a href="/home">Start Shopping</a>
          </button>
        </div>
        <div
          id="cartContainer"
          style={{ display: cartEmpty ? "none" : "block" }}
        >
          <div className="flex  mx-20 my-3  parent-container justify-center  ">
            <div className="w-3/4 p-2 bg-white relative">
              {/* header */}
              <h2 className="text-lg font-bold mb-4">
                Products ({cartItems.length})
              </h2>
              <hr></hr>
              {/* products */}
              <div>
              {cartItems.length > 0 && cartItems.map((product, index) => (
  <div key={index}>
    <div className="bg-white flex my-2">
      {product.images && product.images.length > 0 ? (
        <img src={product.images[0]} className="w-20 m-2" alt="Product Image" />
      ) : (
        <div>No image available</div>
      )}
   <div className="m-2  w-3/4 ">
                        <h6 className="text-lg font-semibold">
                          {product.name}
                        </h6>
                        <p className="text-sm text-gray-900 ">
                          {product.description}
                        </p>
                        <p className="text-sm text-gray-900 ">
                          {" "}
                          Quantity: {product.quantity_in_stock}
                        </p>
                        <div className="  justify-between flex text-white">
                          <button
                            className=" text-orange-600 flex justify-center text-xl items-center	"
                            onClick={() => handleRemoveItem(product._id)}
                          >
                            {" "}
                            <MdOutlineDelete /> Remove
                          </button>
                        </div>
                      </div>
                      <div className="m-2 w-1/4 text-right ">
                        <p
                          className="text-sm text-black-600  "
                          style={{ fontSize: "20px" }}
                        >
                          {" "}
                          EGY {product.price}
                        </p>
                        <div className="flex items-center text-sm text-black-600 justify-center">
                          <button
                            onClick={() =>
                              handleDecreaseQuantity(
                                product._id,
                                product.quantity
                              )
                            }
                            className=" bg-orange-600 w-10 m-2 rounded-md font-bold text-2xl"
                          >
                                -
                          </button>
                          <p>{product.quantity}</p>
                          <button
                            className=" bg-orange-600 w-10 m-2 rounded-md text-2xl"
                            onClick={() =>
                              handleIncreaseQuantity(
                                product._id,
                                product.quantity
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr></hr>
                  </div>
                ))}
              </div>

              <hr></hr>
            </div>
            {/* cart summary */}
            <div
              className="w-1/4 p-2 m-2 bg-white  font-bold  sticky top-20    shadow-lg rounded-lg"
              style={{ height: "fit-content" }}
            >
              <h2 className="text-lg font-bold ">CART SUMMARY</h2>
              <hr></hr>
              <div className="flex justify-between m-2">
                <h5>Subtotal</h5>
                <h3> EGY {subtotal.toFixed(4)}</h3>
              </div>
              <hr></hr>
              <button
                className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => { window.location.href = '/checkout'; }}
              >
                CHECKOUT (EGY {subtotal})
              </button>{" "}
            </div>
          </div>
        </div>
        {/* cart products */}
        {/* recently viewed */}
        <div className="h-16 flex justify-between items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recently Viewed</h2>
          <a href="#" className="flex items-center text-orange-600">
            {" "}
            SEE ALL <IoIosArrowForward />
          </a>
        </div>
        {/* recently viewed */}
        <div className="h-16 flex justify-between items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recently Viewed</h2>
          <a href="#" className="flex items-center text-orange-600">
            {" "}
            SEE ALL <IoIosArrowForward />
          </a>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded bg-white text-orange-600 ">
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full "></img>
            </div>
          ))}
        </div>
        {/* recommended for you  */}
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recommende For You</h2>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white "
        >
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3 "
            >
              <img src={product.image} className="w-full mx-2"></img>
            </div>
          ))}
        </Carousel>
        ;
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl"> You May Also Like</h2>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white"
        >
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full mx-2"></img>
            </div>
          ))}
        </Carousel>
        ;
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">
            Customers who viewed this also viewed
          </h2>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white"
        >
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full mx-2"></img>
            </div>
          ))}
        </Carousel>
        ;
        <div className="flex gap-4 p-3 mb-3 rounded bg-white text-orange-600">
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full "></img>
            </div>
          ))}
        </div>
        {/* recommended for you  */}
        <div className="h-16 flex justify-between items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recommende For You</h2>
          <a href="#" className="flex items-center text-orange-600">
            {" "}
            SEE ALL <IoIosArrowForward />
          </a>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white "
        >
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3 "
            >
              <img src={product.image} className="w-full mx-2"></img>
            </div>
          ))}
        </Carousel>
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl"> You May Also Like</h2>
        </div>
        <div style={{ display: cartEmpty ? "none" : "block" }}>
          <Carousel
            responsive={responsive}
            className="flex gap-4 p-3 mb-3 rounded bg-white"
          >
            {recommendedForYou.map((product, index) => (
              <div
                key={index}
                className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
              >
                <img src={product.image} className="w-full mx-2"></img>
              </div>
            ))}
          </Carousel>
        </div>
        {/* customers  */}
        <div
          className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white"
          style={{ display: cartEmpty ? "none" : "block" }}
        >
          <h2 className="font-medium text-xl">
            Customers who viewed this also viewed
          </h2>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white"
        >
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full"></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Cart;
