import React from "react";

const sportCategories = [
  {
    title: "Cardio Training",
    subcategories: [
      "Treadmills",
      "Exercise Bike",
      "Elliptical Trainers",
    ],
  },
  {
    title: "Strength Training Equipment",
    subcategories: ["Dumbbells", "Bars", "Core & Abdominal Trainers"],
  },
  {
    title: "Outdoor & Adventure",
    subcategories: ["Cycling", "Running"],
  },
  {
    title: "Sports Wear",
    subcategories: ["Men Sports Wear", "Women Sports Wear"],
  },
  {
    title: "Sports & Fitness",
    subcategories: ["Accessories", "Swimming", "Team Sports", "Hunting & Fishing"],
  },
  {
    title: "Accessories",
    subcategories: ["Exercise Bands", "Jump Ropes", "Exercise Mats", "Gym Bags"],
  },
];



const renderCategory = (category) => (
  <div key={category.title} className="flex flex-col mx-3">
    <a href="" className="font-bold ">
      {category.title}
    </a>
    <hr className="h-0.5 bg-black" />
    {category.subcategories && (
          <a href="" className="">{category.subcategories}</a>

    )}
  </div>
);

export default function Sport() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {sportCategories.map(renderCategory)}
      </div>
    </>
  );
}
