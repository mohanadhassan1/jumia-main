import React from "react";

const furnitureCategories = [
  {
    title: "Home Essentials",
    items: [
      "Home Decor",
      "Lighting",
      "Bedding",
      "Bath",
      "Storage & Organization",
      "Cleaning Supplies",
      "Event & Party Supplies",
      "Seasonal Decor",
      "Light Bulbs",
      "Power & Hand Tools",
      "Air Purifiers",
      "Tools & Improvements",
    ],
  },
  {
    title: "Furniture",
    items: [
      "Living room",
      "Bedroom Furniture",
      "Dining room",
      "Bean Bags",
      "TV Units",
      "Storage Units",
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      "Cookware",
      "Bakeware",
      "Serveware",
      "Glassware",
      "Kitchen Utensils",
      "Kitchen Storage",
    ],
  },
  {
    title: "Garden & Outdoors",
    items: [
      "Outdoor Decor",
      "Outdoor Furniture & Accessories",
      "Grills & Outdoor Cooking",
      "Gardening & Lawn Care",
      "Pest Control Repellents",
      "Artificial Plants",
    ],
  },
  {
    title: "School & Office Supplies",
    items: ["School & Office Furniture", "Stationary & Supplies"],
  },
];

const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold">{category.title}</a>
    <hr className="h-0.5 bg-black" />
    {category.items.map((item) => (
      <a key={item} href="" className="text-sm hover:text-white">
        {item}
      </a>
    ))}
  </div>
);

export default function Furniture() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {furnitureCategories.map(renderCategory)}
      </div>
    </>
  );
}
