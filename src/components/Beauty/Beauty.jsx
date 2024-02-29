import React from "react";

const beautyCategories = [
  {
    title: "Personal Care",
    items: [
      "Oral Care",
      "Feminine Care",
      "Shave & Hair Removal",
      "Deodorants",
      "Shower Gels",
      "Face Wash",
    ],
  },
  {
    title: "Skin Care",
    items: ["Body", "Eyes", "Face", "Feet & Hands", "Sunscreens & Tanning Oils"],
  },
  {
    title: "Hair Care",
    items: [
      "Styling Tools & Appliances",
      "Hair Styling Products",
      "Shampoo, Conditioner & Serums",
      "Hair Coloring",
      "Extensions & Wigs",
      "Hair Accessories",
    ],
  },
  {
    title: "Health Care",
    items: [
      "Wellness & Relaxation",
      "Sexual Wellness",
      "Medical Supplies & Equipment",
      "Contact Lenses & Solutions",
    ],
  },
  {
    title: "Fragrance",
    items: ["Women's Perfumes & Body Splashes", "Men's Perfumes", "Children's Perfumes"],
  },
  {
    title: "Makeup",
    items: [
      "Face Makeup",
      "Lip Makeup",
      "Eye Makeup",
      "Makeup Remover",
      "Makeup Brushes & Tools",
      "Nails",
    ],
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

export default function Beauty() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {beautyCategories.map(renderCategory)}
      </div>
    </>
  );
}
