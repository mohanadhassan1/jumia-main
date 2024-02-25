
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";

import Home from "./components/Home/index";
import ProductDetails from "./components/product/productDetails";

import MyAccount from "./components/MyAccount";
import Login from "./components/Login/index";
import HelpMain from "./components/Help";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/myaccount", element: <MyAccount /> },
      { path: "/login", element: <Login /> },
      { path: "/product/:id", element: <ProductDetails /> },

      { path: "/help", element: <HelpMain /> },
    ],
  },
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
