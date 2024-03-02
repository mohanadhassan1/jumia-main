import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Products</p>
      <button
        type="button"
        className="relative h-auto pr-10 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        onClick={toggleVisibility}
      >
        <h3 className="font-bold">
          {title}
          <span className="absolute right-4 top-2 font-bold">
            {isOpen ? "-" : "+"}
          </span>
        </h3>
      </button>
      {isOpen && (
        <div className="p-4 dark:bg-gray-800">
          <p className="font-normal">{content}</p>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      {/* Product Types */}
      <CollapsibleSection
        title="What types of products does Jumia offer?"
        content={
          <>
            <p className="font-normal">
              Jumia is Egypt's leading online store, providing customers with an
              extensive selection of products in multiple categories. From
              electronics, Fashion, apparel and home décor to health and beauty
              products. Whether you're looking for a new laptop, phone, or
              fashion accessories, Jumia has something for everyone.
            </p>
          </>
        }
        isOpen={openSection === "productTypes"}
        toggleVisibility={() => toggleVisibility("productTypes")}
      />

      {/* Product Warranty */}
      <CollapsibleSection
        title="Does my product have a warranty?"
        content={
          <>
            <p className="font-normal">
              The warranty information for a product can be found on its listing
              page on Jumia. For more information on how to claim a warranty,
              click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </>
        }
        isOpen={openSection === "productWarranty"}
        toggleVisibility={() => toggleVisibility("productWarranty")}
      />

      {/* Search for Product */}
      <CollapsibleSection
        title="How do I search for a specific product?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "productSearch"}
        toggleVisibility={() => toggleVisibility("productSearch")}
      />

      {/* Product Details */}
      <CollapsibleSection
        title="How can I view product details and specifications?"
        content={
          <>
            <p className="font-normal">
              Product details and specifications for items sold on Jumia can be
              easily accessed by clicking on the product's listing. Once you
              have selected the desired item, scroll down to the bottom of the
              page where you will find a detailed description of the product's
              features and specifications. The product's details also include a
              list of images for the product, ratings and reviews from other
              customers, and a list of related items.
            </p>
          </>
        }
        isOpen={openSection === "productDetails"}
        toggleVisibility={() => toggleVisibility("productDetails")}
      />

      {/* Request Tax Invoice */}
      <CollapsibleSection
        title="I want to request a tax invoice, how can I do that?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "taxInvoice"}
        toggleVisibility={() => toggleVisibility("taxInvoice")}
      />

      {/* Check Product Stock */}
      <CollapsibleSection
        title="How do I know if a product is in stock?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "productInStock"}
        toggleVisibility={() => toggleVisibility("productInStock")}
      />

      {/* Provide Feedback */}
      <CollapsibleSection
        title="How can I provide feedback or write a review for a product?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "provideFeedback"}
        toggleVisibility={() => toggleVisibility("provideFeedback")}
      />
    </>
  );
};

export default Products;
