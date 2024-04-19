import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { responsive } from "./dataStatic";

export const generateMayLike = (products) => {
    if (products.length === 0) return [];
  
    const getRandomProducts = (products, count) => {
      const shuffled = [...products];
      shuffled.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    return getRandomProducts(products, 10);
  };
  
  // Recommended component
  const Like = () => {
    const { products } = useSelector((state) => state.products);
    const MayLike=generateMayLike(products)

  
    // Render recommended products
    return (
        <>
        <div className="h-16 flex justify-start items-center gap-4 p-3 rounded-t bg-white">
        <h2 className="font-medium text-xl"> You May Also Like</h2>
      </div>
      <Carousel
        responsive={responsive}
        className="flex gap-4 p-3 mb-3 rounded bg-white"
      >
        {MayLike.map((product, index) => (
          <div
            key={index}
            className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg"
          >
            <img src={product.images} className="w-full mx-2"></img>
          </div>
        ))}
      </Carousel>
      
      </>
    );
  };
  
  export default Like;
  