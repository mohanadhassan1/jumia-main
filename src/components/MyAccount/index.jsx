import { useState, useEffect } from "react";
import instance from "../../axois/instance";
import { IoPersonOutline } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { LiaDumpsterSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { customerAction } from "../../store/slices/customer";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AddAddressForm from "../checkout/address";
import { decodeToken } from "react-jwt";
import { useOrderDetails } from "../checkout/orderConfirmation";
import { selectOrderDetails } from "../../store/slices/orderSlice";

export default function MyAccount() {
  // const orderDetails = useSelector((state) => state.order.orderDetails);

  const token = localStorage.getItem("token");
  const myDecodedToken = decodeToken(token);
  const customer_id = myDecodedToken.id;
  // const { id } = useParams();

  const [orders, setOrders] = useState([]);
  // const [orderproducts, setOrderproducts] = useState([]);
  const orderproducts = [];

  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState("My Jumia Account");

  const customer = useSelector((state) => state.customer.customer);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

  const openOrders = [];
  const closedOrders = [];
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("fetch");
        const response = await instance.get(`/order/customer/${customer_id}`); // Replace "/api/orders" with your actual endpoint
        setOrders(response.data.data);
        console.log(response.data.data);

        // setLoading(false);
        orders.forEach((order) => {

          const currentDate = new Date();
          const orderDate = order.order_date;
          console.log(orderDate);
          const differenceInMillis = currentDate - orderDate;

          if (differenceInMillis <= threeDaysInMillis) {
            closedOrders.push(order.products[0]);
          } else {
            openOrders.push(order.products[0]);
          }
          console.log("Open Orders:", openOrders);
          console.log("Closed Orders:", closedOrders);
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleButtonClick = (btnContent) => {
    setContent(btnContent);
  };

  const logoutBtn = () => {
    dispatch(logout());
    localStorage.clear("token");

    toast.success("Successfully logged out!", {
      // position: "top",
    });
    setTimeout(() => {
      navigate("login");
    }, 2000);
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const customerId = decodedToken.id;
      dispatch(customerAction(customerId));
    }
  }, [dispatch]);

  return (
    <>
      <div className="md:flex container mx-auto mt-3 mb-3">
        <div className="mr-2 lg:w-1/4 md:w-2/4 h-full rounded bg-white">
          <div
            onClick={() => handleButtonClick("My Jumia Account")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 border-b rounded-t overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <IoPersonOutline className="mr-4" size={25} />
              My Jumia Account
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Orders")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <FiInbox className="mr-4" size={25} />
              Orders
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Inbox")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <MdOutlineMail className="mr-4" size={25} />
              Inbox
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Pending Reviews")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <MdOutlineRateReview className="mr-4" size={25} />
              Pending Reviews
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Vouchers")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <LiaDumpsterSolid className="mr-4" size={25} />
              Vouchers
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Saved Items")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <FaRegHeart className="mr-4" size={25} />
              Saved Items
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Followed Sellers")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              <LuWarehouse className="mr-4" size={25} />
              Followed Sellers
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Recenlty Viewed")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6 border-b-2">
              <FaClockRotateLeft className="mr-4" size={25} />
              Recenlty Viewed
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Account Management")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Account Management
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Address Book")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Address Book
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Founders Team")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6">
              Founders Team
            </button>
          </div>

          <div
            onClick={() => handleButtonClick("Close Account")}
            className="hover:bg-gray-200 hover:font-medium h-10 my-2 overflow-hidden"
          >
            <button className="flex items-center w-full h-full focus:bg-gray-300 focus:font-medium pl-6 border-b-2">
              Close Account
            </button>
          </div>

          <div className="h-10 my-2 text-center rounded overflow-hidden">
            <button
              className="h-full hover:bg-orange-100 text-orange-700 focus:font-medium "
              onClick={logoutBtn}
              // className="flex justify-center cursor-pointer hover:bg-orange-100 text-orange-700 font-bold rounded focus:outline-none focus:shadow-outline"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              LOGOUT
            </button>
            {/* <a
              // href="/"
              onClick={logoutBtn}
              className="flex justify-center cursor-pointer hover:bg-orange-100 text-orange-700 font-bold rounded focus:outline-none focus:shadow-outline"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              LOG OUT
            </a> */}
          </div>
        </div>

        <div className="gap-4 p-4  md:ml-2 sm:mr-2 lg:w-3/4 md:w-2/4 rounded bg-white">
          <div className="h-full">
            {content === "My Jumia Account" && (
              // {content === "My Jumia Account" && customer && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Account Overview
                </h1>

                <div className="lg:flex md:flex-none">
                  <div className="border border-gray-300 lg:w-3/6 md:w-full mt-6 rounded lg:mr-2 ">
                    <div className="border-b p-3">
                      <h2>ACCOUNT DETAILS</h2>
                    </div>

                    <div className="p-3">
                      <h3>Name: {customer.first_name}</h3>
                      <p>Email: {customer.email}</p>
                    </div>
                  </div>

                  <div className="border border-gray-300 lg:w-3/6 md:w-full mt-6 rounded lg:ml-2">
                    <div className="border-b p-3">
                      <h2>ADDRESS BOOK</h2>
                    </div>

                    <div className="p-3">
                      <h3>Your Default Shipping Address</h3>
                      {/* <p>Address: {customer.address_of_Id}</p> */}
                      <AddAddressForm></AddAddressForm>
                    </div>
                  </div>
                </div>

                <div className="lg:flex md:flex-none">
                  <div className="border border-gray-300 lg:w-3/6 md:w-full mt-6 rounded lg:mr-2">
                    <div className="border-b p-3">
                      <h2>JUMIA STORE CREDIT</h2>
                    </div>

                    <div className="p-3">
                      <h4>Jumia Pay Balance:EGP 0.00</h4>
                    </div>
                  </div>

                  <div className="border border-gray-300 lg:w-3/6 md:w-full mt-6 rounded lg:ml-2">
                    <div className="border-b p-3">
                      <h3>NEWSLETTER PREFERENCES</h3>
                    </div>

                    <div className="p-3">
                      <h4>
                        You are currently subscribed to following newsletters:
                      </h4>
                      <p>daily newsletters</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {content === "Orders" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">Orders</h1>
                <div className="flex border-b">
                  <button className="p-4 focus:border-b-2 hover:text-orange-700 focus:text-orange-700 focus:border-orange-700">
                    OPEN ORDERS (0)
                  </button>
       <button className="p-4 focus:border-b-2 hover:text-orange-700 focus:text-orange-700 focus:border-orange-700">
                    CLOSED ORDERS
                  </button>
                </div>
              </div>
            )}

            {content === "Inbox" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Inbox Messages
                </h1>

                <div className="border border-gray-300 w-full mt-6 rounded p-3">
                  <div className="flex justify-between">
                    <h6>3 days ago</h6>
                    <button className="text-orange-700">SEE DETAILS</button>
                  </div>

                  <div className="">
                    <h3>We received your order</h3>
                    <p>
                      We received your order 323581237 and it is expected to be
                      delivered on 21-Feb-2024. Thank you for shopping on Jumia!
                    </p>
                  </div>

                  <div className="">
                    <h3>product</h3>
                  </div>
                </div>
              </div>
            )}

            {content === "Pending Reviews" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Pending Reviews
                </h1>
              </div>
            )}

            {content === "Vouchers" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Vouchers
                </h1>

                <div className="flex border-b ">
                  <button className="p-4 focus:border-b-2 hover:text-orange-700 focus:text-orange-700 focus:border-orange-700">
                    ACTIVE
                  </button>
                  <button className="p-4 focus:border-b-2 hover:text-orange-700 focus:text-orange-700 focus:border-orange-700">
                    INACTIVE
                  </button>
                </div>
              </div>
            )}

            {content === "Saved Items" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Saved Items
                </h1>

                <div className="lg:flex md:flex-none justify-between border border-gray-300 w-full mt-6 rounded p-3">
                  <div className="flex justify-around lg:mx-4">
                    <img src="#" alt="title" />

                    <div className="lg:mx-10">
                      <h3>Title</h3>
                      <p>size</p>
                      <p>price</p>
                      <p>discount</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between lg:mt-0 sm:mt-4">
                    <button className="bg-orange-600 text-white p-2 rounded hover:bg-orange-700 shadow">
                      BUY NOW
                    </button>
                    <button className="text-orange-700 hover:bg-orange-100 rounded flex items-center">
                      <HiOutlineTrash className="mr-2" />
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            )}

            {content === "Followed Sellers" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Followed Sellers
                </h1>
              </div>
            )}

            {content === "Recenlty Viewed" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Recenlty Viewed Products
                </h1>
              </div>
            )}

            {content === "Account Management" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Account Management
                </h1>
              </div>
            )}

            {content === "Address Book" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Address Book
                </h1>
                <AddAddressForm></AddAddressForm>
              </div>
            )}

            {content === "Founders Team" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3 mb-3">
                  Founders Team
                </h1>

                <h1 className="font-medium text-xl pb-1">Mentor</h1>
                <div className="flex support-team justify-between">
                  <div className="flex flex-col items-center border rounded-lg shadow-lg p-3">
                    <img
                      src="/eslam_shaheer.jfif"
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt="Eslam Shaheer"
                    />
                    <h1 className="font-bold text-2xl mt-4">Eslam Shaheer</h1>
                    <p>Senior Software Engineer</p>
                    <div className="social-links flex mt-2">
                      <a
                        href="https://github.com/Eslam-Shaheer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/eslam-shaheer-33329619b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>

                <h1 className="font-medium text-xl mt-5 pb-1">Developers</h1>
                <div className="flex support-team justify-between">
                  <div className="flex flex-col items-center border rounded-lg shadow-lg p-3">
                    <img
                      src="/mahmoud_elzaw.jfif"
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt="Mahmoud Elzaw"
                    />
                    <h1 className="font-bold text-2xl mt-4">Mahmoud Elzaw</h1>
                    <p>MEARN developer</p>
                    <div className="social-links flex mt-2">
                      <a
                        href="https://github.com/elzaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mahmoud-elzaw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center border rounded-lg shadow-lg p-3">
                    <img
                      src="/mohanad_hassan.png"
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt="Mohanad Hassan"
                    />
                    <h1 className="font-bold text-2xl mt-4">Mohanad Hassan</h1>
                    <p>MEARN developer</p>
                    <div className="social-links flex mt-2">
                      <a
                        href="https://github.com/mohanadhassan1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mohanadhassan1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center border rounded-lg shadow-lg p-3">
                    <img
                      src="/eman_hamed.jfif"
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt="Eman Hamed"
                    />
                    <h1 className="font-bold text-2xl mt-4">Eman Hamed</h1>
                    <p>MEARN developer</p>
                    <div className="social-links flex mt-2">
                      <a
                        href="https://github.com/EmanHamed20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/emanhamed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center border rounded-lg shadow-lg p-3">
                    <img
                      src="/usab_emad.jfif"
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt="Usab Emad"
                    />
                    <h1 className="font-bold text-2xl mt-4">Usab Emad</h1>
                    <p>MEARN developer</p>
                    <div className="social-links flex mt-2">
                      <a
                        href="https://github.com/yousabemad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/yousab-emad-61235b15a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-1 hover:text-orange-700"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {content === "Close Account" && (
              <div>
                <h1 className="font-medium text-xl border-b-2 pb-3">
                  Close Account
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
