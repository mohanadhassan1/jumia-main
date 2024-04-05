import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axois/instance";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/slices/cart";
import { selectIsLoggedIn } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { isExpired, decodeToken } from "react-jwt";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState("");

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("");

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await instance.get(`/product/${id}`);
        setProduct(res.data);
        if (res.data.images && res.data.images.length > 0) {
          setMainImage(res.data.images[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    const getReviews = async () => {
      try {
        const res = await instance.get(`/reviews/product/${id}`);
        // console.log(res.data.data);
        setReviews(res.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const getCustomer = async () => {
      try {
        if (reviews.length > 0) {
          const customerPromises = reviews.map(async (review) => {
            const res = await instance.get(`/customers/${review.customer_id}`);
            console.log(res.data);
            return res.data;
          });

          const customerData = await Promise.all(customerPromises);
          setCustomers(customerData);
        }
      } catch (err) {
        console.log(err);
      }
    };

    customers.map((customer) => {
      console.log(customer.email);
    });

    getCustomer();
    getReviews();
    getData();
  }, [id]);

  const handleAddToCart = () => {
    // if (!selectedSize) {
    //   toast.error("Please select a size");
    //   return;
    // }

    dispatch(addItemToCart({ ...product, isLoggedIn }));

    // alert(`${product.name} product added successfully`);
    toast.success(` product added successfully`);
    // navigate(`/cart`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const token = localStorage.getItem("token");
  const user = decodeToken(token);
  // console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to submit the review
      const res = await instance.post(`/reviews`, {
        comment,
        product_id: id,
        customer_id: user.id,
      });

      // Update the reviews state with the new review
      setReviews([...reviews, res.data]);

      // Clear the form fields
      setRating("");
      setComment("");

      // Show success message
      toast.success("Review submitted successfully");
    } catch (err) {
      console.error("Error submitting review:", err.message);
      // Show error message
      toast.error("Failed to submit review");
    }
  };

  return (
    <>
      <div className="container mx-auto mt-3">
        {/* ============================================= First ============================================= */}
        <div className="md:flex gap-4 h-full">
          {/* ========================= Product Details Name, Img, Price ========================= */}
          <div className="bg-white md:w-3/4">
            <div className="flex">
              <div className="w-2/5 h-1/4 p-5 relative">
                <img
                  className="w-full rounded "
                  src={mainImage}
                  alt={product.name}
                />
                <div className="flex w-16 h-16 mb-5 z-20">
                  {product &&
                    product.images.map((image, index) => (
                      <img
                        key={index}
                        className="rounded m-1 border shadow-lg drop-shadow border-gray-200 hover:border-orange-700 focus:border-orange-700 cursor-pointer"
                        src={image}
                        alt={product.name}
                        onClick={() => handleThumbnailClick(image)}
                      />
                    ))}
                </div>

                <hr />
                <h2 className="">SHARE THIS PRODUCT</h2>
                <div className="flex">
                  <button className="p-1 m-1 border border-blue-900 rounded-full hover:text-orange-800 hover:border-orange-800">
                    <FaFacebookF />
                  </button>
                  <button className="p-1 m-1 border border-blue-900 rounded-full hover:text-orange-800 hover:border-orange-800">
                    <TiSocialTwitter />
                  </button>
                  <button className="p-1 m-1 border border-blue-900 rounded-full hover:text-orange-800 hover:border-orange-800">
                    <TiSocialLinkedin />
                  </button>
                </div>
              </div>

              <div className="w-3/5 p-5">
                {/* <p>Quantity: {product.quantity_in_stock}</p> */}

                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-500 mt-2">Brand: {product.brand}</p>
                <p className="text-orange-600 text-lg font-bold mt-2">
                  EGY {product.price}
                </p>
                <p className="mt-2">{product.description}</p>
                {product.brand === "Fashion" && (
                  <div className="mt-3 flex">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(size)}
                        className={`mr-2 px-4 py-2 border border-gray-300 rounded ${
                          selectedSize === size ? "bg-gray-200" : "bg-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={handleAddToCart}
                  className="button bg-orange-600 w-full hover:bg-orange-700 text-white mt-5 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          {/* ================================ DELIVERY & RETURNS ================================ */}
          <div className="bg-white md:w-1/4 md:mt-0 sm:mt-3 p-3">
            <h4>DELIVERY & RETURNS</h4>
            <hr />
          </div>
        </div>

        {/* ============================================= Second ============================================= */}
        <div className="md:flex gap-4 mt-3 h-full">
          {/* ================================ Product Details  ================================ */}
          <div className="bg-white md:w-3/4">
            <h1 className="m-5">Product Details</h1>

            <hr />

            <ul className="m-5">
              <li>{product.description}</li>
            </ul>
          </div>

          {/* ================================ DELIVERY & RETURNS ================================ */}
          <div className="bg-white md:w-1/4 md:mt-0 sm:mt-3">
            <p>aasdsaf</p>
          </div>
        </div>

        {/* ============================================= Third ============================================= */}
        <div className="md:flex gap-4 mt-3 h-full">
          {/* ================================ Specifications ================================ */}
          <div className="bg-white md:w-3/4">
            <h1 className="m-5">Specifications</h1>

            <hr />

            <div className="flex m-5 gap-4">
              <div className="border w-2/4">
                <h1 className="m-3">KEY FEATURES</h1>
                <hr />
                <p className="m-3">ID: {product._id}</p>
                <p className="m-3">{product.description}</p>
              </div>
              <div className="border w-2/4">
                <h1 className="m-3">WHAT’S IN THE BOX</h1>
                <hr />
                <p className="m-3">{product.description}</p>
              </div>
            </div>
          </div>

          {/* ================================ DELIVERY & RETURNS ================================ */}
          <div className="bg-white md:w-1/4 md:mt-0 sm:mt-3">
            <p>third</p>
          </div>
        </div>

        <div className="md:flex gap-4 mt-3 h-full">
          <div className="bg-white md:w-3/4">
            <h1 className="m-5">Verified Customer Feedback</h1>

            <hr />

            <p className="m-5">Rating: {product.rating}</p>
            {/* <p className='m-5'>Review: {product.review}</p> */}
          </div>
          <div className="bg-white md:w-1/4 md:mt-0 sm:mt-3">
            <p>fourth 2</p>
          </div>
        </div>

        <div className="md:flex flex-col gap-4 mt-3 h-full pb-5">
          {reviews &&
            reviews.map((review) => (
              <div key={review._id} className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-4 bg-white p-4 w-full rounded">
                  <div className="flex justify justify-between">
                    {customers &&
                      customers.length > 0 &&
                      customers.map((customer) => (
                        <div key={customer._id} className="flex gap-2">
                          <div className="flex justify-center items-center w-7 h-7 text-center rounded-full bg-orange-500">
                            {customer.email ? customer.email[0] : ""}
                          </div>
                          <span>{customer.email}</span>
                        </div>
                      ))}
                    <div className="flex p-1 gap-1 text-orange-300">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarHalf />
                    </div>
                  </div>
                  <div>{review.comment}</div>
                  <div className="flex justify-between">
                    <span>
                      {new Date(review.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <hr />
                </div>
                {/* Form for submitting comments */}
              </div>
            ))}
          <form className="border rounded-md p-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                className="border rounded-md px-3 py-2 w-full h-24 resize-none focus:outline-none focus:border-orange-500"
                placeholder="Enter your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
