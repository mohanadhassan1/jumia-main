// <<<<<<< mohanad
// import { useState } from "react";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/index";
// import Header from "./components/Header/index";
// import Home from "./components/Home/index";
// // import MySlider from "./components/Slider/Slider";

import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
import Home from "./components/Home/index";
import ProductDetails from "./components/product/productDetails";
// import Home from "./components/Home/index";
import MyAccount from "./components/MyAccount";
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
      { path: "/help", element: <HelpMain /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        {/* // <Header />
        // <Navbar />
        //{" "} */}
        {/* <div className="h-full flex items-center justify-center"> */}
        <RouterProvider router={routes} />
        {/* // <Home />
          //{" "} */}
        {/* </div> */}
        {/* // <Footer />
        // ======= */}
      </Provider>
    </>
  );
}

export default App;
