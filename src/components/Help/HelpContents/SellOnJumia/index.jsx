import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Returns & Refunds</p>
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

const SellOnJumia = () => {

  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      {/* What is Jumia Marketplace */}
      <CollapsibleSection
        title="What is Jumia Marketplace?"
        content={
          <>
            <p className="font-normal">
              Jumia Marketplace is an e-commerce platform that allows businesses
              and individuals to sell their products online to a large customer
              base.
            </p>
          </>
        }
        isOpen={openSection === "marketplace"}
        toggleVisibility={() => toggleVisibility("marketplace")}
      />

      {/* How do I become a Jumia Marketplace seller? */}
      <CollapsibleSection
        title="How do I become a Jumia Marketplace seller?"
        content={
          <>
            <p className="font-normal">
              To become a Jumia Marketplace seller, you need to REGISTER as a
              vendor on the Jumia website, submit your product catalog, and
              start selling.
            </p>
          </>
        }
        isOpen={openSection === "marketplaceSeller"}
        toggleVisibility={() => toggleVisibility("marketplaceSeller")}
      />

      {/* What kind of products can I sell on Jumia Marketplace? */}
      <CollapsibleSection
        title="What kind of products can I sell on Jumia Marketplace?"
        content={
          <>
            <p className="font-normal">
              You can sell a wide range of products, including fashion,
              electronics, home and appliances, health and beauty, and many
              others.
            </p>
          </>
        }
        isOpen={openSection === "productsCanSell"}
        toggleVisibility={() => toggleVisibility("productsCanSell")}
      />

      {/* Is it free to sell on Jumia Marketplace? */}
      <CollapsibleSection
        title="Is it free to sell on Jumia Marketplace?"
        content={
          <>
            <p className="font-normal">
              Opening a store on Jumia is absolutely free. You can open a store
              at any time and start selling as quickly as you can upload your
              products online, though there are fees and commissions for
              delivered products.
            </p>
          </>
        }
        isOpen={openSection === "freeSell"}
        toggleVisibility={() => toggleVisibility("freeSell")}
      />

      {/* How do I list my products on Jumia Marketplace? */}
      <CollapsibleSection
        title="How do I list my products on Jumia Marketplace?"
        content={
          <>
            <p className="font-normal">
              To list your products on Jumia Marketplace, you need to create a
              seller account, complete the new seller training, provide product
              details, and upload product images.
            </p>
          </>
        }
        isOpen={openSection === "listingProducts"}
        toggleVisibility={() => toggleVisibility("listingProducts")}
      />

      {/* How does Jumia Marketplace handle customer returns and refunds? */}
      <CollapsibleSection
        title="How does Jumia Marketplace handle customer returns and refunds?"
        content={
          <>
            <p className="font-normal">
              Jumia Marketplace has a RETURNS AND REFUND POLICY in place to
              handle customer complaints and ensure a smooth customer
              experience.
            </p>
          </>
        }
        isOpen={openSection === "customerReturnsAndRefunds"}
        toggleVisibility={() => toggleVisibility("customerReturnsAndRefunds")}
      />

      {/*What support does Jumia Marketplace provide to its sellers? */}
      <CollapsibleSection
        title="What support does Jumia Marketplace provide to its sellers?"
        content={
          <>
            <p className="font-normal">
              Jumia Marketplace provides a variety of support services to its
              sellers, including training, account management, marketing
              support, and vendor support service
            </p>
          </>
        }
        isOpen={openSection === "sellersSupport"}
        toggleVisibility={() => toggleVisibility("sellersSupport")}
      />

      {/*How does Jumia Marketplace handle shipping and delivery? */}
      <CollapsibleSection
        title="How does Jumia Marketplace handle shipping and delivery?"
        content={
          <>
            <p className="font-normal">
              Jumia Marketplace handles all the shipping and delivery towards
              the customer for all products that are sold on the platform.
            </p>
          </>
        }
        isOpen={openSection === "shippingAndDelivery"}
        toggleVisibility={() => toggleVisibility("shippingAndDelivery")}
      />

      {/*How do I get paid for sales made on Jumia Marketplace? */}
      <CollapsibleSection
        title="How do I get paid for sales made on Jumia Marketplace?"
        content={
          <>
            <p className="font-normal">
              Sellers receive payments for their sales on Jumia Marketplace
              through bank transfers.
            </p>
          </>
        }
        isOpen={openSection === "paidForSales"}
        toggleVisibility={() => toggleVisibility("paidForSales")}
      />
    </>
  );
};

export default SellOnJumia;
