import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
import { Toaster } from "react-hot-toast";
// import ProductDetails from "./components/product/productDetails";

import Home from "./components/Home/index";
import ProductDetails from "./components/product/productDetails";
import MyAccount from "./components/MyAccount";
import Login from "./components/Login/index";
import HelpMain from "./components/Help";
import Checkout from "./components/checkout/checkout";
import Category from "./components/ catrgory page/index";
import Payment from "./components/PaypalCheckoutButton";
import NotFoundPage from './components/NotFound/index';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/myaccount", element: <MyAccount /> },
      { path: "/payment", element: <Payment /> },

      { path: "/product/:id", element: <ProductDetails /> },

      { path: "/help", element: <HelpMain /> },
      { path: "/category", element: <Category /> },
    ],
  },
  { path: "/checkout", element: <Checkout /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFoundPage /> },
]);

const initialOptions = {
  clientId:
    "AUDO6Hf1BUIV79Dam6tVwkbh3aPPc9xEYoG3hkLHj3j74ObH9ZlvFrGyyooB-keqZgVjl-KqCVcakAoy",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Provider store={store}>
          <Toaster
            containerStyle={{
              top: 0,
              width: "100%", // Make the container full width
              position: "fixed", // Ensure the container stays fixed in the viewport
              zIndex: 9999, //
            }}
            toastOptions={{
              className: "bg-blue-400 w-full",
              style: {
                border: "1px solid #713200",
                padding: "10px",
                color: "white",
                backgroundColor: "green",
              },
            }}
          />
          <RouterProvider router={routes} />
        </Provider>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
