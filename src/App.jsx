// <<<<<<< mohanad
// import { useState } from "react";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/index";
// import Header from "./components/Header/index";
// import Home from "./components/Home/index";
// // import MySlider from "./components/Slider/Slider";

// =======
// >>>>>>> main
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
import Home from "./components/Home/index";
import MyAccount from "./components/MyAccount/index";

const routes=createBrowserRouter([
  {path:"/",element:<AppLayout/>,
children:[
  {path:"",element:<Home/>},
  {path:"/home",element:<Home/>},
  {path:"/cart",element:<Cart></Cart>},
  {path:"/myaccount",element:<MyAccount/>}
]}
])

function App() {
  return (
    <>
      <Provider store={store}>

        <RouterProvider router={routes}/> 

      </Provider>
    </>
  );
}

export default App;
