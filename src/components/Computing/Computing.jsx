import React from "react";

export default function Computing() {
  return (
    <>
      <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
        <div className="flex flex-col mx-3">
          <a href=""> Desktop & Laptops</a>
          <hr className="h-0.5 bg-black" />
          <a href="">2 in 1 Laptops</a>
          <a href="">Gaming Laptops</a>
          <a href="">Traditional Laptops</a>
          <a href="">Macbooks</a>
          <a href="">Desktops</a>
          <a href="">Monitors</a>

          <a href="" className="mt-5">
            {" "}
            Data Storage
          </a>
          <hr className="h-0.5 bg-black" />
          <a href="">USB Flash Drives</a>
          <a href="">External Hard Drives</a>

          <a href="" className="mt-5">
            {" "}
            Computers & Accessories
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Laptop Accessories</a>
        </div>
        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Computer Components
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Internal Hard Drives</a>
          <a href="">Graphics Cards</a>
          <a href="">Fans & Cooling</a>
          <a href="">Audio & Video Accessories</a>
          <a href="">Computer Cable Adapters</a>
          <a href="">Keyboard</a>
          <a href="">Mouse</a>
          <a href="">USB Gadgets</a>

          <a href="" className="	mt-5">
          Printers & Scanners {" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Printers</a>
          <a href="">Scanners</a>
          <a href="">Printer Ink & Toner</a>

     
        </div>
        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Networking Products{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Network Adapters</a>
          <a href="">Routers</a>
          <a href="">Wireless Access Points</a>
          <a href="">Network Switches</a>
      
            
        </div>
      </div>
    </>
  );
}
