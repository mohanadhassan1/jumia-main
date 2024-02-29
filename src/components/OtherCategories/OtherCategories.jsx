import React from "react";

const otherCategories = [
  {
    title: "Jumia Global",
  },
  {
    title: "Electronics",
    subcategories: [
      "Television & Video",
      "Cameras",
      "Audio",
    ],
  },
  {
    title: "Automobile",
    subcategories: [
      "Car Care",
      "Car Electronics & Lights",
      "Oils & Fluids",
      "Exterior Accessories",
      "Interior Accessories",
    ],
  },
  {
    title: "Books, Movies & Music",
    subcategories: [
      "Art & Humanities",
      "Bestselling Books",
      "Biography & Autobiography Books",
      "Business & Finance Books",
      "Education & Learning",
      "Entertainment Books",
      "Family & Lifestyle Books",
      "Fiction Books",
      "Journals & Planners",
      "Magazines",
      "Motivational & Self-Help Books",
      "Religion Books",
      "Science & Technology Books",
    ],
  },
  {
    title: "Industrial & Scientific",
    subcategories: ["Packaging & Shipping Supplies"],
  },
  {
    title: "Hand Crafted",
    subcategories: [
      "Women's Accessories",
      "Baby Products",
      "Bags",
      "Bedding",
      "Home Décor",
      "Jewelry & Accessories",
    ],
  },

];



const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black" />
    {category.subcategories && (
     <a href="" className="">
      {category.subcategories}
     </a>
    )}
  </div>
);

export default function OtherCategories() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {otherCategories.map(renderCategory)}
      </div>
    </>
  );
}
