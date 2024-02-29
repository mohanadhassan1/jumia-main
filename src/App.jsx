import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
// import ProductDetails from "./components/product/productDetails";

import Home from "./components/Home/index";
import ProductDetails from "./components/product/ProductDetails";
import Trash from "./components/product/Trash";
import MyAccount from "./components/MyAccount";
import Login from "./components/Login/index";
import HelpMain from "./components/Help";
import Checkout from "./components/checkout/checkout";
import SupermarkerCategory from "./components/SupermarketCat/SupermarkerCategory";
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
      { path: "/trash", element: <Trash /> },

      { path: "/help", element: <HelpMain /> },
      { path: "/Supremarket", element: <SupermarkerCategory /> },
    ],
  },
  { path: "/checkout", element: <Checkout /> },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
