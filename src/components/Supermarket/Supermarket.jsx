import React from "react";

export default function Supermarket() {
  return (
    <>
      <div className="md: flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
      <div className="flex flex-col">
          <a href="" >
            {" "}
            Snacks & Breakfast
          </a>
          <hr className="h-0.5 bg-black"/>
          <a href=""> Cereal</a>
          <a href=""> Jams & Chocolate Spreads</a>{" "}
          <a href=""> Candy & Chocolate</a>
          <a href=""> Crisps & Chips</a>
          <a href=""> Nuts & Dried Fruits</a>
          <a href=""> Bakery</a>
          {/* cat2 */}
          <a href="" className="	mt-5">
            {" "}
            Household Supplies
          </a>
          <hr className="h-0.5 bg-black"/>

          <a href=""> Food Storage, Foil & Cling Film</a>
          <a href=""> Disposable Plates & Cutlery</a>{" "}
          <a href=""> Disposable Cups</a>
          <a href=""> Trash, Compost & Lawn Bags</a>
          <a href=""> Kitchen and Toilet Rolls</a>
          <a href=""> Facial Tissues</a>
          <a href=""> Household Batteries</a>
          <a href=""> Lighters & Matches</a>
        </div>
        <div className="flex flex-col">
          <a href="" className="	">
            {" "}
            Beverages{" "}
          </a>
          <hr className="h-0.5 bg-black"/>

          <a href="">Soft Drinks, Juices & Water</a>
          <a href=""> Coffee, Tea & Cocoa</a>

          <a href="" className="	mt-5">
            {" "}
            Laundry{" "}
          </a>
          <hr className="h-0.5 bg-black"/>

          <a href="">Detergent</a>
          <a href=""> Fabric Softener</a>
          <a href=""> Stain Removal</a>
          <a href=""> Bleach</a>
          <a href=""> Lint Removal</a>

          <a href="" className="	 mt-5">
            {" "}
            Pet Supplies{" "}
          </a>
          <hr className="h-0.5 bg-black"/>

          <a href="">Dogs Supplies</a>
          <a href=""> Cats Supplies</a>
        </div>
        <div className="flex flex-col">
        <a href="" className="	">
            {" "}
            Household Cleaning{" "}
          </a>
          <hr className="h-0.5 bg-black"/>

          <a href="">Dishwashing</a>
          <a href=""> Air Fresheners</a> 
          <a href=""> Kitchen Cleaners</a> 
          <a href=""> Bathroom Cleaners</a> 
          <a href=""> All Purpose & Floor Cleaners </a> 
          <a href=""> Glass Cleaners</a> 
          <a href=""> Disinfectants</a> 
          <a href=""> Cleaning Tools</a> 
          <a href=""> Wood Polish & Care</a> 
         </div>
      </div>
    </>
  );
}
