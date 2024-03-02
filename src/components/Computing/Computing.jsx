import React from "react";

const computingCategories = [
  {
    title: "Desktop & Laptops",
    items: [
      "2 in 1 Laptops",
      "Gaming Laptops",
      "Traditional Laptops",
      "Macbooks",
      "Desktops",
      "Monitors",
    ],
  },
  {
    title: "Data Storage",
    items: ["USB Flash Drives", "External Hard Drives"],
  },
  {
    title: "Computers & Accessories",
    items: ["Laptop Accessories"],
  },
  {
    title: "Computer Components",
    items: [
      "Internal Hard Drives",
      "Graphics Cards",
      "Fans & Cooling",
      "Audio & Video Accessories",
      "Computer Cable Adapters",
      "Keyboard",
      "Mouse",
      "USB Gadgets",
    ],
  },
  {
    title: "Printers & Scanners",
    items: ["Printers", "Scanners", "Printer Ink & Toner"],
  },
  {
    title: "Networking Products",
    items: ["Network Adapters", "Routers", "Wireless Access Points", "Network Switches"],
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

export default function Computing() {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4 mx-auto w-[47rem] min-h-[29rem] bg-gray-300">
        {computingCategories.map(renderCategory)}
      </div>
    </>
  );
}
