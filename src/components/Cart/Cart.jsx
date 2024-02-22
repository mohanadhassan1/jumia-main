import MySlider from "../Slider/Slider";
import { MdOutlineDelete } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  let cartItems = [
    {
      name: "phone",
      description: "loremhjdskldsckjdh",
      size: "12inch",
      price: 3450,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "phone",
      description: "loremhjdskldsckjdh",
      size: "18inch",
      price: 3450,
      image:
        "data:image/jpeg;base64,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",
    },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
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
  return (
    <div className="h-full flex items-center justify-center">
      <div className="container">
        <div className="flex mx-20 my-3  parent-container relative justify-center  ">
          {/* cart products */}
          <div className="w-3/4 p-4 bg-white m-2">
            {/* header */}
            <h2 className="text-lg font-bold mb-4">
              Products ({cartItems.length})
            </h2>
            <hr></hr>
            {/* products */}
            <div>
              {cartItems.map((product) => (
                <div key={product.id}>
                  <div className=" bg-white flex my-2">
                    <img src={product.image} className="w-20 m-2"></img>
                    <div className="m-2  w-3/4 ">
                      <h6 className="text-lg font-semibold">{product.name}</h6>
                      <p className="text-sm text-gray-900 ">
                        Size: {product.size}
                      </p>
                    </div>
                    <div className="m-2 w-1/4 text-right ">
                      <p
                        className="text-sm text-black-600 "
                        style={{ fontSize: "20px" }}
                      >
                        {" "}
                        EGY {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="  justify-between flex text-white">
                    <button className=" text-orange-600 flex justify-center text-xl items-center	">
                      {" "}
                      <MdOutlineDelete /> Remove
                    </button>
                    <div>
                      <button className=" bg-orange-600 w-10 m-2 rounded-md font-bold text-2xl">
                        -
                      </button>
                      <button className=" bg-orange-600 w-10 m-2 rounded-md text-2xl">
                        +
                      </button>
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
            className="w-1/4 p-4 m-2 bg-white  font-bold  sticky top-20  shadow-lg rounded-lg"
            style={{ height: "fit-content" }}
          >
            <h2 className="text-lg font-bold ">CART SUMMARY</h2>
            <hr></hr>
            <div className="flex justify-between m-2">
              <h5>Subtotal</h5>
              <h3> EGY {subtotal}</h3>
            </div>
            <hr></hr>
            <button
              className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              CHECKOUT (EGY {subtotal})
            </button>{" "}
          </div>
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
<div key={index} className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
<img src={product.image} className="w-full "></img>

</div>
    ))}
    </div>

    {/* recommended for you  */}
    <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recommende For You</h2>
        </div>
    <Carousel responsive={responsive} className="flex gap-4 p-3 mb-3 rounded bg-white ">
      {recommendedForYou.map((product, index) => (
<div key={index} className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3 ">
<img src={product.image} className="w-full mx-2"></img>

</div>
      ))}
    
</Carousel>;
<div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl"> You May Also Like</h2>
        </div>
    <Carousel responsive={responsive} className="flex gap-4 p-3 mb-3 rounded bg-white">
      {recommendedForYou.map((product, index) => (
<div key={index} className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
<img src={product.image} className="w-full mx-2"></img>

</div>
      ))}
    
</Carousel>;
<div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Customers who viewed this also viewed</h2>
        </div>
    <Carousel responsive={responsive} className="flex gap-4 p-3 mb-3 rounded bg-white">
      {recommendedForYou.map((product, index) => (
<div key={index} className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
<img src={product.image} className="w-full mx-2"></img>

</div>
      ))}
    
</Carousel>;
   
   

        <div className="flex gap-4 p-3 mb-3 rounded bg-white text-orange-600">
          {recommendedForYou.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.image} className="w-full"></img>
            </div>
          ))}
        </div>
        {/* recommended for you  */}
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recommende For You</h2>
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
              <img src={product.image} className="w-full"></img>
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
              <img src={product.image} className="w-full"></img>
            </div>
          ))}
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Cart;
