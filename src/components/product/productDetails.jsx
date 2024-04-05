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

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
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
                  {product.images.map((image, index) => (
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
                {(product.subcategory_id === "65df930658f52e44982591a1" ||
                  product.subcategory_id === "65e040938f80ee098f35967f" ||
                  product.subcategory_id === "65e0801ca95474f5197e6536") && (
                    <div className="mt-3 flex">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(size)}
                          className={`mr-2 px-4 py-2 border border-gray-300 rounded ${selectedSize === size ? "bg-gray-200" : "bg-white"
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
      </div>
    </>
  );
}
