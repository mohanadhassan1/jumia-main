import React from "react";

const phoneCategories = [
  {
    title: "Mobile Phones",
    subcategories: [
      "Smartphones",
      "Cell Phones",
      // Consider removing "Elliptical Trainers" as it doesn't fit this category
    ],
  },
  {
    title: "Tablets",
    subcategories: [
      "Tablets",
      "Educational Tablets",
      "Tablet Accessories",
    ],
  },
  {
    title: "Mobile Phone Accessories",
    subcategories: [
      "Phone Cases",
      "Screen Protectors",
      "Bluetooth Headsets",
      "Headsets",
      "Cables",
      "Portable Power Banks",
      "Smart Watches",
      "Smart Watches Accessories",
      "Memory Cards",
      "Chargers",
      "Car Accessories",
      "Mounts & Stands",
      "Selfie Sticks & Tripods",
    ],
  },
];
const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black " />
    {category.subcategories.map((item) => (
      <a key={item} href="" className="text-sm hover:text-white">
        {item}
      </a>
    ))}
  </div>
);

export default function Phone() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {phoneCategories.map(renderCategory)}
      </div>
    </>
  );
}
