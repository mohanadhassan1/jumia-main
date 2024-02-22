import React from "react";

export default function Furniture() {
  return (
    <>
      <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
        <div className="flex flex-col mx-3">
          <a href=""> Home Essentials </a>
          <hr className="h-0.5 bg-black" />
          <a href="">Home Decor</a>
          <a href="">Lighting</a>
          <a href="">Bedding</a>
          <a href="">Bath</a>
          <a href="">Storage & Organization</a>
          <a href="">Cleaning Supplies</a>
          <a href="">Event & Party Supplies</a>
          <a href=""> Seasonal Decor</a>
          <a href="">Light Blubs </a>
          <a href="">Power & Hand Tools</a>
          <a href="">Air Purifiers</a>
          <a href="">Tools & Improvements</a>
        </div>
        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Furniture{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Living room</a>
          <a href="">Bedroom Furniture</a>
          <a href="">Dining room </a>
          <a href="">Bean Bags</a>
          <a href="">TV Units</a>
          <a href="">Storage Units</a>
  

          <a href="" className="	mt-5">
            {" "}
            Kitchen & Dining{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Cookware</a>
          <a href="">Bakeware</a>
          <a href="">Serveware</a>
          <a href="">Glassware</a>
          <a href="">Kitchen Utensils</a>
          <a href="">Kitchen Storage</a>
       
       
        </div>
        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Garden & Outdoors{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Outdoor Decor</a>
          <a href="">Outdoor Furniture & Accessories</a>
          <a href="">Grills & Outdoor Cooking</a>
          <a href="">Gardening & Lawn Care</a>
          <a href="">Pest Control Repellents </a>
          <a href="">Artificial Plants</a>
         
          <a href="" className="	mt-5">
            {" "}
            School & Office supplies{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">School & Office Furniture</a>
          <a href="">Stationary & Supplies</a>
      
         </div>
      </div>
    </>
  );
}
