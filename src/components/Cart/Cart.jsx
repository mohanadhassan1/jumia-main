import MySlider from "../Slider/Slider";
import { MdOutlineDelete } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  updateItemQuantity,
  removeItemFromCart,
} from "../../store/slices/cart";
import { useState, useEffect } from "react";

const Cart = () => {
  let recommendedForYou = [
    {
      name: "Starter Men Walking Lightwight",
      price: "952",
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_2.png",
    },
    {
      name: "Starter Men Walking Lightwight Lace Up Shoes ",
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_4.png",
      price: "865",
    },
    {
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_4.png",
    },
    {
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN.png",
    },
    {
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy.png",
    },
    {
      image:
        "https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_6.png",
    },
    {
      image:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/257032/1.jpg?1417",
    },
    {
      image:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/329502/1.jpg?4229",
    },
  ];

  const cartItems = useSelector((state) => state.cart.items);
  const [cartEmpty, setCartEmpty] = useState(true);

  console.log(cartItems);
  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    calculateSubtotal();
    setCartEmpty(cartItems.length === 0);
  }, [cartItems]);
  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  };
  const handleIncreaseQuantity = (itemId, quantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: quantity + 1 }));
  };
  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ itemId, quantity: quantity - 1 }));
    }
  };
  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

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

      if (cartItems.length === 0) {
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
    <>
      {/* Eman */}

      <div className="container mx-auto">
        <div
          id="emptyCartMessage"
          style={{ display: cartEmpty ? "block" : "none", textAlign: "center" }}
          className="w-full p-4 bg-white my-2 "
        >
          <img
            style={{ margin: "auto" }}
            src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg"
          ></img>
          <h3>Your cart is empty!</h3>
          <p>Browse our categories and discover our best deals!</p>
          <button className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
            <a href="/home">Start Shopping</a>
          </button>
        </div>
        <div
          id="cartContainer"
          style={{ display: cartEmpty ? "none" : "block" }}
        >
          <div className="flex my-3  parent-container justify-center  ">
            <div className="w-3/4 p-2 bg-white relative">
              {/* header */}
              <h2 className="text-lg font-bold mb-4">
                Products ({cartItems.length})
              </h2>
              <hr></hr>
              {/* products */}
              <div>
                {cartItems.map((product, index) => (
                  <div key={index}>
                    <div className=" bg-white flex my-2">
                      <img src={product.images} className="w-20 m-2"></img>
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
                            onClick={() => handleRemoveItem(product.product_id)}
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
                                product.product_id,
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
                                product.product_id,
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
              className="w-1/4 p-2 ml-2 bg-white  font-bold  sticky top-20 shadow-lg rounded-lg"
              style={{ height: "fit-content" }}
            >
              <h2 className="text-lg font-bold ">CART SUMMARY</h2>
              <hr></hr>
              <div className="flex justify-between m-2">
                <h5>Subtotal</h5>
                <h3> EGY {subtotal.toFixed(4)}</h3>
              </div>
              <hr></hr>
              <a href="/checkout">
              <button
                className="button bg-orange-600 w-full hover:bg-orange-700 text-white mx-auto font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                CHECKOUT (EGY {subtotal})
              </button>{" "}
              </a>
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
        
        <div style={{ display: cartEmpty ? "none" : "block"}}
        className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl"> You May Also Like</h2>
        </div>
        <div style={{ display: cartEmpty ? "none" : "block"}}>
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
        
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white"
         style={{ display: cartEmpty ? "none" : "block"}}>
          <h2 className="font-medium text-xl">
            Customers who viewed this also viewed
          </h2>
        </div>
       <div style={{ display: cartEmpty ? "none" : "block"}}>
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
      </div>
    </>
  );
};

export default Cart;
