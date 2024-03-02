import React from "react";

const applianceCategories = [
  {
    title: "Cooking Appliances",
    items: [
      "Air Fryers",
      "Food Processors",
      "Microwaves",
      "Blenders",
      "Mixers",
      "Choppers",
      "Hand Blenders",
      "Kettles",
      "Coffee Machines",
      "Waffle & Sandwich Makers",
      "Ovens & Toasters",
    ],
  },
  {
    title: "Home Appliances",
    items: [
      "Refrigerators",
      "Freezers",
      "Dishwashers",
      "Washers & Dryers",
      "Vacuums & Floor Care",
      "Cookers",
      "Irons & Steamers",
      "Cook Tops",
      "Window Fans",
      "Range Hoods",
      "Hot Plates",
    ],
  },
  {
    title: "Cooling & Heating Appliances",
    items: [
      "Air conditioners",
      "Household Fans",
      "Water Dispensers",
      "Water Heaters",
      "Heaters",
      "Water Coolers & Filters",
    ],
  },
];

const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black" />
    {category.items.map((item) => (
      <a key={item} href="" className="text-sm hover:text-white">
        {item}
      </a>
    ))}
  </div>
);

export default function Appliances() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {applianceCategories.map(renderCategory)}
      </div>
    </>
  );
}
