import React from "react";

export default function Beauty() {
  return (
    <>
      <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
        <div className="flex flex-col mx-3 ">
          <a href=""> Personal Care</a>
          <hr className="h-0.5 bg-black" />
          <a href=""> Oral Care</a>
          <a href=""> Feminine Care</a>
          <a href="">Shave & Hair Removal </a>
          <a href=""> Deodorants</a>
          <a href=""> Shower Gels </a>
          <a href="">Face Wash</a>
          {/* cat2 */}
          <a href="" className="	mt-5">
            Skin Care
          </a>
          <hr className="h-0.5 bg-black" />
          <a href="">Body </a>
          <a href=""> Eyes</a>
          <a href=""> Face </a>
          <a href="">Feet & Hands </a>
          <a href=""> Sunscreens & Tanning oils</a>
          
        </div>
        <div className="flex flex-col mx-3 ">
          <a href="" className="	">
            {" "}
            Hair Care{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Styling Tools & Appliances</a>
          <a href="">Hair Styling Products</a>
          <a href="">Shampoo, Conditioner & Serums</a>
          <a href="">Hair Coloring</a>
          <a href="">Extensions & Wigs </a>
          <a href="">Hair Accessories </a>
        

          <a href="" className="	mt-5">
            {" "}
            Health Care{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Wellness & Relaxation</a>
          <a href="">Sexual Wellness</a>
          <a href="">Medical Supplies & Equipment</a>
          <a href="">Contact Lenses & Solutions</a>
                  
        </div>
        <div className="flex flex-col mx-3 ">
          <a href="" className="	">
            {" "}
            Fragrance{" "}
          </a>
          <hr className="h-0.5 bg-black" />

          <a href=""> Women's Perfumes & Body Splashes</a>
          <a href="">Men's Perfumes</a>
          <a href="">Children's Perfumes</a>
          

          <a href="" className="mt-5	">
            {" "}
            Makeup{" "}
          </a>
          <hr className="h-0.5 bg-black" />
          <a href="">Face Makeup </a>
          <a href="">Lip Makeup</a>
          <a href="">Eye Makeup</a>
          <a href="">Makeup Remover</a>
          <a href="">Makeup Brushes & Tools</a>
          <a href="">Nails</a>

        </div>
      </div>
    </>
  );
}
