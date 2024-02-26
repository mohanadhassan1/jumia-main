import React, { useState } from "react";

const SellOnJumia = () => {
  const [sections, setSections] = useState([
    {
      title: "What is Jumia Marketplace?",
      content:
        "Jumia Marketplace is an e-commerce platform that allows businesses and individuals to sell their products online to a large customer base.",
      isVisible: false,
    },
    {
      title: "How do I become a Jumia Marketplace seller?",
      content:
        "To become a Jumia Marketplace seller, you need to REGISTER as a vendor on the Jumia website, submit your product catalog, and start selling.",
      isVisible: false,
    },
    {
      title: "What kind of products can I sell on Jumia Marketplace?",
      content:
        "You can sell a wide range of products, including fashion, electronics, home and appliances, health and beauty, and many others.",
      isVisible: false,
    },
    {
      title: "Is it free to sell on Jumia Marketplace?",
      content:
        "Opening a store on Jumia is absolutely free. You can open a store at any time and start selling as quickly as you can upload your products online, though there are fees and commissions for delivered products.",
      isVisible: false,
    },
    {
      title: "How do I list my products on Jumia Marketplace?",
      content:
        "To list your products on Jumia Marketplace, you need to create a seller account, complete the new seller training, provide product details, and upload product images.",
      isVisible: false,
    },
    {
      title: "How does Jumia Marketplace handle customer returns and refunds?",
      content:
        "Jumia Marketplace has a RETURNS AND REFUND POLICY in place to handle customer complaints and ensure a smooth customer experience.",
      isVisible: false,
    },
    {
      title: "What support does Jumia Marketplace provide to its sellers?",
      content:
        "Jumia Marketplace provides a variety of support services to its sellers, including training, account management, marketing support, and vendor support service.",
      isVisible: false,
    },
    {
      title: "How does Jumia Marketplace handle shipping and delivery?",
      content:
        "Jumia Marketplace handles all the shipping and delivery towards the customer for all products that are sold on the platform.",
      isVisible: false,
    },
    {
      title: "How do I get paid for sales made on Jumia Marketplace?",
      content:
        "Sellers receive payments for their sales on Jumia Marketplace through bank transfers.",
      isVisible: false,
    },
  ]);

  const toggleVisibility = (index) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      isVisible: i === index ? !section.isVisible : false,
    }));
    setSections(updatedSections);
  };

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <p className="pt-2 pl-2 underline">Sell on Jumia</p>
          <button
            type="button"
            className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            onClick={() => toggleVisibility(index)}
          >
            <h3 className="font-bold">
              {section.title}
              <span className="absolute right-4 top-2 font-bold">
                {section.isVisible ? "-" : "+"}
              </span>
            </h3>
          </button>
          {section.isVisible && (
            <div className="p-4 dark:bg-gray-800">
              <p className="font-normal">{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SellOnJumia;
