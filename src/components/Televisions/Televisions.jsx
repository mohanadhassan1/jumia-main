import React from "react";

const televisionCategories = [
  {
    title: "Televisions & Receivers",
    subcategories: ["Televisions", "Receivers", "Remote Controls"],
  },
  {
    title: "Audio",
    subcategories: ["Radios", "Audio Speakers", "Home Theater Systems", "Headphones"],
  },
];



const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className=" ">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black" />
    {category.subcategories && (
    <a>{category.subcategories}</a>
    )}
  </div>
);

export default function Televisions() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {televisionCategories.map(renderCategory)}
      </div>
    </>
  );
}
