import React from "react";

const gamingCategories = [
  {
    title: "PlayStation 5",
        
        items: ["Consoles","Games", "Controllers", "Cards", "Accessories"],
      
    
  },
  {
    title: "PlayStation 4",
    items: ["Games", "Controllers", "Cards", "Accessories"],
  },
  {
    title: "Xbox",
    items: ["Controllers", "Accessories"],
  },
  {
    title: "PC Gaming",
    items: [
      "Gaming Laptops",
      "Headsets",
      "Keyboards",
      "Mouse",
      "Gaming Chairs",
      "Monitors",
    ],
  },
  {
    title: "Card & Board Games",
    items: ["Card Games", "Board Games"],
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

export default function Game() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {gamingCategories.map(renderCategory)}
      </div>
    </>
  );
}
