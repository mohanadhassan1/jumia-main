
export const generateCustomers = (products) => {
    if (products.length === 0) return [];
  
    const getRandomProducts = (products, count) => {
      const shuffled = [...products];
      shuffled.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    return getRandomProducts(products, 10);
  };
  
  // Recommended component
  const Customers = () => {
    const { products } = useSelector((state) => state.products);
  
    // Render recommended products
    return (
      <div>
        <h2>Recommended Products</h2>
        <ul>
          {generateCustomers(products).map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Customers;
  