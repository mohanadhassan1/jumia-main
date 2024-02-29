import React from "react";

const babyCategories = [
  {
    title: "Diapering",
    items: ["Disposable Diapers", "Wipes & Holders", "Diaper Bags"],
  },
  { title: "Baby Feeding",
   items: [
    "Bottle-Feeding & Tablewear",
    "Breast feeding",
    "Baby Food",
    "Bibs & Burp Cloths ",
  ] },
  { title: "Nursery",
   items: [
    "Beds, Cribs & Bedding",
    "Nursery Decor",
   
  ] },
  { title: "Bathing & Skin Care",
   items: [
    "Lotions",
    "Shampoo & Conditioner",
    "Bath Essentials",
    "Grooming & Healthcare Kits",
    "Potty Training",
    "Health & Baby Care",

  ] },
  { title: "Baby Safety",
   items: [
    "Kitchen Safety",
    "Outdoor Safety",
   
  ] },
  { title: "Gear",
   items: [
    "Swings, Jumpers & Bouncers",
    "Backpacks & Carriers",
    "Walkers",
  ] },
  { title: "Strollers & Accessories",
   items: [
    "Accessories",
    "Strollers",
    "Car Seats",
  ] },
  { title: "Toys & Games",
   items: [
    "Baby & Toddler Toys",
    "Dolls & Accessories",
    "Learning & Education",
    "Action Figures & Statues",
    "Arts & Crafts",
    "Dress Up & Pretend Play",
    "Puzzles",
    "Toy Remote Control & Play Vehicles",
  ] },
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

export default function Baby() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {babyCategories.map(renderCategory)}
      </div>
    </>
  );
}
