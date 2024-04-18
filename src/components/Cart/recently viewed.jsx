import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { responsive } from "./dataStatic";
import { IoIosArrowForward } from "react-icons/io";


export const generateRecentlyViews = (products) => {
    if (products.length === 0) return [];
  
    const getRandomProducts = (products, count) => {
      const shuffled = [...products];
      shuffled.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    return getRandomProducts(products, 6);
  };
  
  // Recommended component
  const Recently = () => {
    const { products } = useSelector((state) => state.products);
    const recentlyViews=generateRecentlyViews(products)


  
    // Render recommended products
    return (
      <>
      <div className="h-16 flex justify-between items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recently Viewed</h2>
          <a href="#" className="flex items-center text-orange-600">
            {" "}
            SEE ALL <IoIosArrowForward />
          </a>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded bg-white text-orange-600 ">
          {recentlyViews.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
            >
              <img src={product.images} className="w-full "></img>
            </div>
          ))}
        </div></>
    );
  };
  
  export default Recently;
  