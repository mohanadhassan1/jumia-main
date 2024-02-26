import React from "react";

export default function Phone() {
  return (
    <>
      <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
        <div className="flex flex-col mx-3">
          <a href="">Mobile Phones</a>
          <hr className="h-0.5 bg-black" />
          <a href="">Smartphones</a>
          <a href="">Cell Phones</a>
          <a href="">Elliptical Trainers</a>

          <a href="" className="mt-5">
            {" "}
            Tablets
          </a>
          <hr className="h-0.5 bg-black" />
          <a href="">Tablets</a>
          <a href="">Educational Tablets</a>
          <a href="">Tablet Accessories</a>
        </div>

        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Mobile Phones Accessories
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Phone Cases</a>
          <a href="">Screen Protectors</a>
          <a href="">Bluetooth Headsets</a>
          <a href="">Headsets</a>
          <a href="">Cables</a>
          <a href="">Portable Power Banks</a>
          <a href="">Smart Watches</a>
          <a href="">Smart Watches Accessories</a>
          <a href="">Memory Cards</a>
          <a href="">Chargers</a>
          <a href="">Car Accessories</a>
          <a href="">Mounts & Stands</a>
          <a href="">Selfie Sticks & Tripods</a>
        </div>
      </div>
    </>
  );
}
