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
import SupermarkerCategory from "./components/SupermarketCat/SupermarkerCategory";
import FashionCategory from "./components/fashion catrgory/index";
import { BiTrash } from "react-icons/bi";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/myaccount", element: <MyAccount /> },

      { path: "/product/:id", element: <ProductDetails /> },

      { path: "/help", element: <HelpMain /> },
      { path: "/Supremarket", element: <SupermarkerCategory /> },
      { path: "/Fashion", element: <FashionCategory /> },
    ],
  },
  { path: "/checkout", element: <Checkout /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster
         containerStyle={{
          top:0,
          width: '100%', // Make the container full width
          position: 'fixed', // Ensure the container stays fixed in the viewport
          zIndex: 9999, //

        }}
        toastOptions={{
          className: 'bg-blue-400 w-full',
          style: {
            border: '1px solid #713200',
            padding: '10px',
            color: 'white',
            backgroundColor:"green"
          },
        }}
        />
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
