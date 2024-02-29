import React from "react";

const categories = [
  {
    title: "Snacks & Breakfast",
    items: [
      "Cereal",
      "Jams & Chocolate Spreads",
      "Candy & Chocolate",
      "Crisps & Chips",
      "Nuts & Dried Fruits",
      "Bakery",
    ],
  },
  {
    title: "Beverages",
    items: ["Soft Drinks, Juices & Water", " Coffee, Tea & Cocoa"],
  },
  {
    title: "Household Cleaning",
    items: [
      "Dishwashing",
      "Air Fresheners",
      "Kitchen Cleaners",
      "Bathroom Cleaners",
      "All Purpose & Floor Cleaners",
      "Glass Cleaners",
      "Disinfectants",
      "Cleaning Tools",
      "Wood Polish & Care",
    ],
  },

  {
    title: "Household Supplies",
    items: [
      "Food Storage, Foil & Cling Film",
      "Disposable Plates & Cutlery",
      "Disposable Cups",
      "Trash, Compost & Lawn Bags",
      "Kitchen and Toilet Rolls",
      "Facial Tissues",
      "Household Batteries",
      "Lighters & Matches",
    ],
  },
  {
    title: "Laundry",
    items: [
      "Detergent",
      " Fabric Softener",
      "Stain Removal",
      "Bleach",
      "Lint Removal",
    ],
  },

  {
    title: " Pet Supplies",
    items: ["Dogs Supplies", "Cats Supplies"],
  },

];
 
const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black " />
    {category.items.map((item) => (
      <a key={item} href="" className="text-sm hover:text-white">
        {item}
      </a>
    ))}
  </div>
);

export default function Supermarket() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {categories.map(renderCategory)}
      </div>
    </>
  );
}
