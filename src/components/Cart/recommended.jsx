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
  
  // Recommended component
  const Recommended = () => {
    const { products } = useSelector((state) => state.products);
    const recommendedProducts = generateRecommendedProducts(products);
  
    // Render recommended products
    return (
      <>
      <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
          <h2 className="font-medium text-xl">Recommende For You</h2>
        </div>
        <Carousel
          responsive={responsive}
          className="flex gap-4 p-3 mb-3 rounded bg-white "
        >
          {recommendedProducts.map((product, index) => (
            <div
              key={index}
              className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg m-x-3 "
            >
              <img src={product.images} className="w-full mx-2"></img>
            </div>
          ))}
        </Carousel>
        ;</>
    );
  };
  
  export default Recommended;
  