import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function SmallCart({ Image, title }) {
  const maxLength = 30; // Define the maximum length for the title

  // Function to truncate the title if it exceeds the maximum length
  const truncateTitle = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <>
      <div className="hover:scale-[1.01] h-[15rem] w-full m-1 p-2 pb-2 rounded-xl overflow-hidden shadow-lg flex flex-col">
        <img className="w-full p-1" src={Image} alt="" />
        <h3>{truncateTitle(title, maxLength)}</h3>
        
        <IoIosAddCircle className="text-[#F57C00] text-3xl mt-1 cursor-pointer absolute top-0 end-0" />
      </div>
    </>
  );
}
