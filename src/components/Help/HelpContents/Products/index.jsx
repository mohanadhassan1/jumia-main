import React, { useState } from "react";

const Products = () => {
  const [isTypesVisible, setIsTypesVisible] = useState(false);
  const [isWarrantyVisible, setIsWarrantyVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isTaxInvoiceVisible, setIsTaxInvoiceVisible] = useState(false);
  const [isStockVisible, setIsStockVisible] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const toggleTypesVisibility = () => {
    setIsTypesVisible(!isTypesVisible);
  };

  const toggleWarrantyVisibility = () => {
    setIsWarrantyVisible(!isWarrantyVisible);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const toggleTaxInvoiceVisibility = () => {
    setIsTaxInvoiceVisible(!isTaxInvoiceVisible);
  };

  const toggleStockVisibility = () => {
    setIsStockVisible(!isStockVisible);
  };

  const toggleFeedbackVisibility = () => {
    setIsFeedbackVisible(!isFeedbackVisible);
  };

  return (
    <>
      {/* Product Types */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleTypesVisibility}
        >
          <h3 className="font-bold">
            What types of products does Jumia offer?
            <span className="absolute right-4 top-2 font-bold">
              {isTypesVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isTypesVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Jumia is Egypt's leading online store, providing customers with an
              extensive selection of products in multiple categories. From
              electronics, Fashion, apparel and home décor to health and beauty
              products. Whether you're looking for a new laptop, phone, or
              fashion accessories, Jumia has something for everyone.
            </p>
          </div>
        )}
      </div>

      {/* Product Warranty */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleWarrantyVisibility}
        >
          <h3 className="font-bold">
            Does my product have a warranty?
            <span className="absolute right-4 top-2 font-bold">
              {isWarrantyVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isWarrantyVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The warranty information for a product can be found on its listing
              page on Jumia. For more information on how to claim a warranty,
              click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Search for Product */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleSearchVisibility}
        >
          <h3 className="font-bold">
            How do I search for a specific product?
            <span className="absolute right-4 top-2 font-bold">
              {isSearchVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isSearchVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can search for a specific product on Jumia by using the search
              bar located at the top of the website. Enter the name of the
              product you are looking for into the search bar, and then click
              the 'search' button. You will be presented with a list of results
              which match your search criteria. You can then browse through the
              list to find the exact product you are looking for. Additionally,
              you can narrow down your search results by selecting filters such
              as price range, brand and more.
            </p>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDetailsVisibility}
        >
          <h3 className="font-bold">
            How can I view product details and specifications?
            <span className="absolute right-4 top-2 font-bold">
              {isDetailsVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDetailsVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Product details and specifications for items sold on Jumia can be
              easily accessed by clicking on the product's listing. Once you
              have selected the desired item, scroll down to the bottom of the
              page where you will find a detailed description of the product's
              features and specifications. The product's details also include a
              list of images for the product, ratings and reviews from other
              customers, and a list of related items.
            </p>
          </div>
        )}
      </div>

      {/* Request Tax Invoice */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleTaxInvoiceVisibility}
        >
          <h3 className="font-bold">
            I want to request a tax invoice, how can I do that?
            <span className="absolute right-4 top-2 font-bold">
              {isTaxInvoiceVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isTaxInvoiceVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can request a tax invoice by filling out the form{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              . The electronic invoice will be sent to you via email within 3
              business days. For more information about the warranty, please
              click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Check Product Stock */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleStockVisibility}
        >
          <h3 className="font-bold">
            How do I know if a product is in stock?
            <span className="absolute right-4 top-2 font-bold">
              {isStockVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isStockVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can simply visit the product page and look for the "In Stock"
              label. If the product is currently in stock, you will see the "In
              Stock" label. If the product is not in stock, the label will not
              be present. If you need to check the availability of a specific
              item, you can also use the search bar on the Jumia website. Enter
              the product name or SKU number to see if it is in stock. If the
              product is available, you will also see the "In Stock" label on
              the product page.
            </p>
          </div>
        )}
      </div>

      {/* Provide Feedback */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Products</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleFeedbackVisibility}
        >
          <h3 className="font-bold">
            How can I provide feedback or write a review for a product?
            <span className="absolute right-4 top-2 font-bold">
              {isFeedbackVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isFeedbackVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Just follow these steps:
              <ol className="list-decimal list-inside">
                <li>
                  <span className="font-bold"> Step 1: </span> Go to your
                  "account" in the top right corner of the main page.
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> Step 2: </span>Choose “Pending
                  Reviews”.
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span> Find the item you
                  purchased and select “Write a Review”.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span> Provide your
                  feedback regarding the product and submit it.
                </li>
              </ol>
              Your feedback will be visible to other customers and can help them
              make informed decisions when purchasing from Jumia.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
