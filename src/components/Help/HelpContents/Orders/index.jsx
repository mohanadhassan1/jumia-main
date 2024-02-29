import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Orders</p>
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

const Orders = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      <CollapsibleSection
        title="How to place an order on Jumia?"
        content={
          <>
            <p>
              To place an order on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>Browse and select the desired product(s).</li>
                <li>Click on "Add to Cart".</li>
                <li>
                  Proceed to checkout and enter your delivery information.
                </li>
                <li>
                  Select a payment method and complete the payment process
                  (Prepaid).
                </li>
                <li>Confirm your order and wait for delivery.</li>
              </ol>
            </p>
          </>
        }
        isOpen={openSection === "placeOrder"}
        toggleVisibility={() => toggleVisibility("placeOrder")}
      />

      <CollapsibleSection
        title="What payment methods are accepted?"
        content={
          <>
            <p>
              Jumia offers multiple payment options, including:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  Pay on Delivery: You can pay in cash when the courier delivers
                  your order.
                </li>
                <li>
                  JumiaPay: Secure payment using Bank cards, Installment, Smart
                  wallets, or Fawry.
                </li>
                <li> Vouchers: Pay using a voucher code.</li>
              </ol>
            </p>
          </>
        }
        isOpen={openSection === "paymentMethods"}
        toggleVisibility={() => toggleVisibility("paymentMethods")}
      />

      <CollapsibleSection
        title="How to track my order?"
        content={
          <>
            <p>
              To track your order on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>Log in to your Jumia account.</li>
                <li>Go to the "My Orders" section.</li>
                <li>
                  Find your order and click on "See Details", then click on
                  “Status History”.
                </li>
                <li>
                  You will see the current status of your order, including the
                  estimated delivery time.
                </li>
              </ol>
            </p>
          </>
        }
        isOpen={openSection === "trackOrder"}
        toggleVisibility={() => toggleVisibility("trackOrder")}
      />

      <CollapsibleSection
        title="How to cancel items or orders?"
        content={
          <>
            <p>
              To cancel items or orders on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>Log in to your Jumia account.</li>
                <li>Go to your "Orders" page.</li>
                <li>Find the order or item you want to cancel.</li>
                <li>Click on "See Details" for that order.</li>
                <li>Select the item you want to cancel.</li>
                <li>
                  Click the "Cancel Item" button and follow the prompts to
                  complete the cancellation process.
                </li>
              </ol>
              Note: Please be aware that some items/orders may not be eligible
              for cancelation, or there may be fees associated with canceling an
              item/order.
            </p>
          </>
        }
        isOpen={openSection === "cancelOrder"}
        toggleVisibility={() => toggleVisibility("cancelOrder")}
      />

      <CollapsibleSection
        title="What is the return and refund policy?"
        content={
          <>
            <p>
              <ul className="list-disc list-inside font-normal">
                <li>
                  <span className="font-bold">Return: </span> You can request a
                  return within the first 14 days from the delivery date if you
                  change your mind about a product and if it has not been opened
                  except for the following products{" "}
                  <a href="#" className="text-orange-500">
                    HERE
                  </a>
                  .
                </li>
                <li>
                  <span className="font-bold">Note: </span> In case of receiving
                  a product with an apparent defect/damage or a product with a
                  wrong (color / size /model) or any shortage of product
                  belongings or accessories or damage in the outer package of
                  the product, you must inform us within a maximum 48 hours from
                  the delivery date.
                </li>
                <li>
                  <span className="font-bold">Refunds: </span> If your return
                  request is approved, you will receive a refund in the refund
                  method you chose while issuing your return. You can find all
                  Refund timelines{" "}
                  <a href="#" className="text-orange-500">
                    HERE
                  </a>
                  .
                </li>
              </ul>
            </p>
          </>
        }
        isOpen={openSection === "returnRefundPolicy"}
        toggleVisibility={() => toggleVisibility("returnRefundPolicy")}
      />

      <CollapsibleSection
        title="How to report an issue or contact customer support?"
        content={
          <>
            <p>
              If you need to report an issue with your Jumia order or contact
              customer support, you can do so through several methods:
              <ul className="list-disc list-inside font-normal">
                <li>Live Chat support on the website and app.</li>
                <li>
                  Calling the phone support line at 19586 (available 7 Days a
                  week, 9am to 8pm).
                </li>
              </ul>
            </p>
          </>
        }
        isOpen={openSection === "reportIssue"}
        toggleVisibility={() => toggleVisibility("reportIssue")}
      />

      <CollapsibleSection
        title="How do I add my phone number and address to my account?"
        content={
          <>
            <p>
              You can easily add your phone number and address to your account
              by following these steps:
              <ol className="list-decimal list-inside font-normal">
                <li>Log in to your account.</li>
                <li>Go to “My Account”.</li>
                <li>
                  In the "My Jumia Account" section, click on the "Add/Edit"
                  button in the “Address Book”.
                </li>
                <li>
                  Enter your phone number and address in the fields provided.
                </li>
                <li>Click "Save" to save your changes.</li>
              </ol>
              Your phone number and address will now be associated with your
              account.
            </p>
          </>
        }
        isOpen={openSection === "addPhoneNumber"}
        toggleVisibility={() => toggleVisibility("addPhoneNumber")}
      />
    </>
  );
};

export default Orders;
