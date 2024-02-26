import React, { useState } from "react";

const Orders = () => {
  const [isPlaceOrderVisible, setIsPlaceOrderVisible] = useState(false);
  const [isPaymentMethodsVisible, setIsPaymentMethodsVisible] = useState(false);
  const [isTrackOrderVisible, setIsTrackOrderVisible] = useState(false);
  const [isCancelOrderVisible, setIsCancelOrderVisible] = useState(false);
  const [isReturnRefundPolicyVisible, setIsReturnRefundPolicyVisible] =
    useState(false);
  const [isReportIssueVisible, setIsReportIssueVisible] = useState(false);
  const [isAddPhoneNumberVisible, setIsAddPhoneNumberVisible] = useState(false);

  const togglePlaceOrderVisibility = () => {
    setIsPlaceOrderVisible(!isPlaceOrderVisible);
  };
  const togglePaymentMethodsVisibility = () => {
    setIsPaymentMethodsVisible(!isPaymentMethodsVisible);
  };
  const toggleTrackOrderVisibility = () => {
    setIsTrackOrderVisible(!isTrackOrderVisible);
  };
  const toggleCancelOrderVisibility = () => {
    setIsCancelOrderVisible(!isCancelOrderVisible);
  };
  const toggleReturnRefundPolicyVisibility = () => {
    setIsReturnRefundPolicyVisible(!isReturnRefundPolicyVisible);
  };
  const toggleReportIssueVisibility = () => {
    setIsReportIssueVisible(!isReportIssueVisible);
  };
  const toggleAddPhoneNumberVisibility = () => {
    setIsAddPhoneNumberVisible(!isAddPhoneNumberVisible);
  };

  return (
    <>
      {/* Place an Order */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePlaceOrderVisibility}
        >
          <h3 className="font-bold">
            How to place an order on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isPlaceOrderVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isPlaceOrderVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              To place an order on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Step 1: </span>Browse and select
                  the desired product(s).
                </li>
                <li>
                  <span className="font-bold"> Step 2: </span>Click on "Add to
                  Cart".
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span> Proceed to
                  checkout and enter your delivery information.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span>Select a payment
                  method and complete the payment process (Prepaid).
                </li>
                <li>
                  <span className="font-bold"> Step 5: </span>Confirm your order
                  and wait for delivery.
                </li>
              </ol>
            </p>
          </div>
        )}
      </div>

      {/* Payment Methods */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentMethodsVisibility}
        >
          <h3 className="font-bold">
            What payment methods are accepted?
            <span className="absolute right-4 top-2 font-bold">
              {isPaymentMethodsVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isPaymentMethodsVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Jumia offers multiple payment options, including:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Pay on Delivery:</span> You can
                  pay in cash when the courier delivers your order.
                </li>
                <li>
                  <span className="font-bold">JumiaPay:</span> Secure payment
                  using Bank cards, Installment, Smart wallets, or Fawry.
                </li>
                <li>
                  <span className="font-bold">Vouchers:</span> Pay using a
                  voucher code.
                </li>
              </ol>
            </p>
          </div>
        )}
      </div>

      {/* Track Order */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleTrackOrderVisibility}
        >
          <h3 className="font-bold">
            How to track my order?
            <span className="absolute right-4 top-2 font-bold">
              {isTrackOrderVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isTrackOrderVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              To track your order on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Step 1: </span>Log in to your
                  Jumia account.
                </li>
                <li>
                  <span className="font-bold"> Step 2: </span>Go to the "My
                  Orders" section.
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span>Find your order
                  and click on "See Details", then click on “Status History”.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span>You will see the
                  current status of your order, including the estimated delivery
                  time.
                </li>
              </ol>
              We are also sending order updates Via Email. If you have any
              questions about your order status, you can contact Jumia customer
              support for assistance.
            </p>
          </div>
        )}
      </div>

      {/* Cancel Order */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCancelOrderVisibility}
        >
          <h3 className="font-bold">
            How to cancel items or orders?
            <span className="absolute right-4 top-2 font-bold">
              {isCancelOrderVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isCancelOrderVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              To cancel items or orders on Jumia:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Step 1: </span>Log in to your
                  Jumia account.
                </li>
                <li>
                  <span className="font-bold"> Step 2: </span>Go to your
                  "Orders" page.
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span>Find the order or
                  item you want to cancel.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span>Click on "See
                  Details" for that order.
                </li>
                <li>
                  <span className="font-bold"> Step 5: </span>Select the item
                  you want to cancel.
                </li>
                <li>
                  <span className="font-bold"> Step 6: </span> Click the "Cancel
                  Item" button and follow the prompts to complete the
                  cancellation process.
                </li>
              </ol>
              Note: Please be aware that some items/orders may not be eligible
              for cancelation, or there may be fees associated with canceling an
              item/order.
            </p>
          </div>
        )}
      </div>

      {/* Return and Refund Policy */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleReturnRefundPolicyVisibility}
        >
          <h3 className="font-bold">
            What is the return and refund policy?
            <span className="absolute right-4 top-2 font-bold">
              {isReturnRefundPolicyVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isReturnRefundPolicyVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
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
          </div>
        )}
      </div>

      {/* Report Issue */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleReportIssueVisibility}
        >
          <h3 className="font-bold">
            How to report an issue or contact customer support?
            <span className="absolute right-4 top-2 font-bold">
              {isReportIssueVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isReportIssueVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
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
          </div>
        )}
      </div>

      {/* Add Phone Number */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Orders</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleAddPhoneNumberVisibility}
        >
          <h3 className="font-bold">
            How do I add my phone number and address to my account?
            <span className="absolute right-4 top-2 font-bold">
              {isAddPhoneNumberVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isAddPhoneNumberVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can easily add your phone number and address to your account
              by following these steps:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Step 1: </span>Log in to your
                  account.
                </li>
                <li>
                  <span className="font-bold"> Step 2: </span>Go to “My
                  Account”.
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span>In the "My Jumia
                  Account" section, click on the "Add/Edit" button in the
                  “Address Book”.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span> Enter your phone
                  number and address in the fields provided.
                </li>
                <li>
                  <span className="font-bold"> Step 5: </span>Click "Save" to
                  save your changes.
                </li>
              </ol>
              Your phone number and address will now be associated with your
              account.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
