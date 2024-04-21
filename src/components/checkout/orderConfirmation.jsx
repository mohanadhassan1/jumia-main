import React, { createContext, useContext, useState } from "react";

// Create a context for managing order details
const OrderDetailsContext = createContext();

// Custom hook to access the order details context
export  const useOrderDetails = () => useContext(OrderDetailsContext);

// OrderDetailsProvider component to wrap the application and provide context
export const OrderDetailsProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    products: [],
    selectedAddress: "",
    total: 0
  });

  // Method to update order details
  const updateOrderDetails = (newOrderDetails) => {
    setOrderDetails(newOrderDetails);
  };

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
        updateOrderDetails,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

// Your Checkout component using the order details context

