import React from "react";

const fashionCategories = [
  {
    title: "Women's Fashion",
    items: [
      "Pullovers & Cardigans",
      "Jackets & Coats",
      "Hoodies & Sweatshirts",
      "Tops & Blouses",
      "Dresses & Jumpsuits",
      "Shorts & Skirts",
      "Pants & Jeans",
      "Home Wear & Lingerie",
      "Jewelry & Watches",
      "Handbags & Wallets",
      "Sunglasses",
      "Socks",
      "Scarves",
      "Sportswear",
      "Swimsuits & Coverups",
    ],
  },
  {
    title: "Men's Fashion",
    items: [
      "Pullovers & Cardigans",
      "Jackets & Coats",
      "Hoodies & Sweatshirts",
      "Shirts",
      "T-shirts & Polos",
      "Suits",
      "Pants",
      "Homewear & Underwear",
      "Accessories",
      "Socks",
      "Watches",
      "Swimsuits & Shorts",
      "Sportswear",
    ],
  },
  {
    title: "Baby Fashion",
    items: ["Boy's Clothes & Shoes", "Girl's Clothes & Shoes"],
  },
  {
    title: "Women's Shoes",
    items: ["Sneakers", "Heels", "Flats & Loafers", "Slippers & Sandals"],
  },
  {
    title: "Men's Shoes",
    items: ["Sneakers", "Casual & Loafers", "Slippers & Sandals", "Formal Shoes"],
  },
  {
    title: "Kid's Fashion",
    items: ["Boy's Fashion", "Girl's Fashion"],
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

export default function Fashion() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {fashionCategories.map(renderCategory)}
      </div>
    </>
  );
}
