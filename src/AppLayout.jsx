import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Header from "./components/Header/index.jsx";

export default function AppLayout() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        {/* <div className="h-full flex items-center justify-center"> */}
        <Outlet></Outlet>
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}
