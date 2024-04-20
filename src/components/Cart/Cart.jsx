import MySlider from "../Slider/Slider";
import { MdOutlineDelete } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { responsive } from "./dataStatic";
import Like from "./mayALsoLike";
import Recommended from "./recommended";
import Recently from "./recently viewed";
import instance from "../../axois/instance";
import { selectIsLoggedIn } from "../../store/slices/authSlice"; // Adjust the path as needed
import { isExpired, decodeToken } from "react-jwt";
import Customers from "./customers";

// In Cart.jsx

import { generateCustomers } from "./customers";

import {
  updateItemQuantity,
  removeItemFromCart,
  addItemToCart,
} from "../../store/slices/cart";
import { useState, useEffect } from "react";
import PaypalCheckoutButton from "../PaypalCheckoutButton";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const customers = generateCustomers(products);

  let token = localStorage.getItem("token");
  let myDecodedToken = decodeToken(token);

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      if (token) {
        const myDecodedToken = decodeToken(token);

        instance
          .get(`cart/${myDecodedToken.id}`)
          .then((response) => {
            const cartItems = response.data.cartItems; // Assuming array of objects with product_id and quantity
            const productPromises = cartItems.map((item) => {
              return instance.get(`product/${item.product_id}`);
            });

            Promise.all(productPromises)
              .then((responses) => {
                const products = responses.map((response, index) => {
                  const productData = response.data;
                  return {
                    ...productData,
                    quantity: cartItems[index].quantity,
                  };
                });

                setCartItems(products);
              })
              .catch((error) => {
                console.error("Error fetching product data:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching cart data:", error);
          });
      }
    } else {
      const productsData = localStorage.getItem("cart");
      if (productsData) {
        const data = JSON.parse(productsData);
        console.log(productsData);
        setCartItems(data.items);
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    calculateSubtotal();
    setCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;

      // }
    });
    setSubtotal(total);
  };
  const handleIncreaseQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item._id === itemId);
    if (isLoggedIn) {
      dispatch(
        updateItemQuantity({
          customer_id: myDecodedToken.id,
          product_id: itemId,
          quantity: cartItem.quantity + 1,
        })
      );
    }

    if (!cartItem) return;

    const { quantity_in_stock } = cartItem;

    if (quantity_in_stock > 0) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            quantity_in_stock: quantity_in_stock - 1, // Decrease quantity_in_stock by 1
          };
        }
        return item;
      });

      // Calculate the updated total price
      const updatedTotal = updatedCartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      // Update the state with the updated cart items and total price
      setCartItems(updatedCartItems);
      setSubtotal(updatedTotal);

      // Update local storage with the updated cart items
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedCartItems, total: updatedTotal })
      );
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    // Find the cart item by itemId
    const cartProduct = cartItems.find((item) => item._id === itemId);

    const cartItemIndex = cartItems.findIndex((item) => item._id === itemId);
    if (isLoggedIn) {
      dispatch(
        updateItemQuantity({
          customer_id: myDecodedToken.id,
          product_id: itemId,
          quantity: cartProduct.quantity - 1,
        })
      );
    }
    if (cartItemIndex === -1) return; // Item not found

    // Get the cart item and its quantity_in_stock
    const cartItem = cartItems[cartItemIndex];
    const { quantity_in_stock } = cartItem;

    // Check if the current quantity is greater than 1 (minimum quantity)
    if (cartItem.quantity > 1) {
      // Create a copy of the cartItems array to avoid mutating the original array
      const updatedCartItems = [...cartItems];

      // Update the quantity and quantity_in_stock of the cart item
      updatedCartItems[cartItemIndex] = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
        quantity_in_stock: quantity_in_stock + 1, // Increase quantity_in_stock by 1
      };

      // Calculate the updated total price
      const updatedTotal = updatedCartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      // Update the state with the updated cart items and total price
      setCartItems(updatedCartItems);
      setSubtotal(updatedTotal);

      // Update local storage with the updated cart items
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedCartItems, total: updatedTotal })
      );
    }
  };

  const handleRemoveItem = (itemId) => {
    if (isLoggedIn) {
      dispatch(
        removeItemFromCart({
          customer_id: myDecodedToken.id,
          product_id: itemId,
        })
      );
      const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
      setCartItems(updatedCartItems);
      localStorage.setItem("cart", JSON.stringify({ items: updatedCartItems }));
    }
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
  const handleCheckout = () => {
    // Redirect to checkout page with subtotal as query parameter
    window.location.href = `/checkout?subtotal=${subtotal}`;
  };

  const cart = {
    description: "Checkout cart description test",
    price: subtotal + 35, // Update price to use subtotal
  };

  return (
    <div className="container mx-auto h-full flex items-center justify-center">
      {/* Eman */}

      <div className="container">
        <div
          id="emptyCartMessage"
          style={{ display: cartEmpty ? "block" : "none", textAlign: "center" }}
          className="w-full p-4 bg-white  mx-auto my-2 text-lg font-normal"
        >
          <img
            className="mx-auto m-6 size-28"
            src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg"
          ></img>
          <h3>Your cart is emptey!</h3>
          <p className="text-gray-800 text-md m-2 font-normal">
            Browse our categories and discover our best deals!
          </p>
          <button className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-6 font-bold p-3 rounded focus:outline-none focus:shadow-outline">
            <a href="/home">START SHOPPING</a>
          </button>
        </div>
        <div
          id="cartContainer"
          style={{ display: cartEmpty ? "none" : "block" }}
        >
          <div className="flex flex-col md:flex-row md:mx-20 my-3  mx-5 parent-container justify-center ">
            <div className="md:w-3/4 p-2 bg-white relative w-full text-center md:text-left">
              {/* header */}
              <h2 className="text-lg font-bold mb-4">
                Products ({cartItems.length})
              </h2>
              <hr></hr>
              {/* products */}
              <div>
                {cartItems.length > 0 &&
                  cartItems.map((product, index) => (
                    <div key={index}>
                      <div className="bg-white flex my-2 flex-col md:flex-row items-center">
                        {product.images && product.images.length > 0 ? (
                          <img
                            src={product.images[0]}
                            className="w-40 m-2 md:w-20"
                            alt="Product Image"
                          />
                        ) : (
                          <div>No image available</div>
                        )}
                        <div className="m-2 md:w-3/4  w-full">
                          <h6 className="text-lg font-semibold">
                            {product.name}
                          </h6>
                          <p className="text-sm text-gray-900 mb-2">
                            {product.description}
                          </p>
                          <p className="text-sm text-gray-900 mb-2">
                            {product.quantity_in_stock === 0
                              ? "Out of stock"
                              : product.quantity_in_stock === 1
                              ? "Last one in stock"
                              : product.quantity_in_stock === 2
                              ? "Last two in stock"
                              : "Available in stock"}
                          </p>

                          <div className="  md:justify-between  justify-center flex text-white">
                            <button
                              className=" text-orange-600 flex justify-center text-xl items-center	"
                              onClick={() => handleRemoveItem(product._id)}
                            >
                              {" "}
                              <MdOutlineDelete /> Remove
                            </button>
                          </div>
                        </div>
                        <div className="m-2 md:w-1/4 md:text-right w-full text-center">
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
              className="md:w-1/4 w-full p-2 md:m-2 my-2 bg-white  font-bold  sticky top-20    shadow-lg rounded-lg"
              style={{ height: "fit-content" }}
            >
              <h2 className="text-lg font-bold ">CART SUMMARY</h2>
              <hr></hr>
              <div className="flex justify-between m-2">
                <h5>Subtotal</h5>
                <h3> EGY {subtotal.toFixed(4)}</h3>
              </div>
              <div className="flex justify-between m-2">
                <h5>Shipment</h5>
                <h3> EGY 35.00</h3>
              </div>
              <div className="flex justify-between m-2">
                <h5>Total</h5>
                <h3> EGY {Number(subtotal.toFixed(2)) + 35}.00</h3>
              </div>
              {/* Paypal checkout */}
              {subtotal > 0 && ( // Check if subtotal is greater than 0
                <div className="paypal-button-container">
                  <PaypalCheckoutButton cart={cart} />
                </div>
              )}
              <hr></hr>
              <button
                className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCheckout}

              >
                CHECKOUT (EGY {subtotal})
              </button>{" "}
            </div>
          </div>
        </div>
        {/* cart products */}

        {/* recently viewed */}

        <Recently></Recently>
        <Recommended></Recommended>

        <Like></Like>
        <Customers></Customers>

        {/* customers  */}
      </div>
    </div>
  );
};

export default Cart;
