import React, { useState } from "react";

const Delivery = () => {
  const [isTrackDeliveryVisible, setIsTrackDeliveryVisible] = useState(false);
  const [isNotAvailableVisible, setIsNotAvailableVisible] = useState(false);
  const [isChangeAddressVisible, setIsChangeAddressVisible] = useState(false);
  const [isDeliveryFeeVisible, setIsDeliveryFeeVisible] = useState(false);
  const [isDeliveryStatusVisible, setIsDeliveryStatusVisible] = useState(false);
  const [isProblemVisible, setIsProblemVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isDamagedVisible, setIsDamagedVisible] = useState(false);
  const [isPickUpVisible, setIsPickUpVisible] = useState(false);
  const [isDeliveryTimeVisible, setIsDeliveryTimeVisible] = useState(false);

  const toggleTrackDeliveryVisibility = () => {
    setIsTrackDeliveryVisible(!isTrackDeliveryVisible);
  };

  const toggleNotAvailableVisibility = () => {
    setIsNotAvailableVisible(!isNotAvailableVisible);
  };

  const toggleChangeAddressVisibility = () => {
    setIsChangeAddressVisible(!isChangeAddressVisible);
  };

  const toggleDeliveryFeeVisibility = () => {
    setIsDeliveryFeeVisible(!isDeliveryFeeVisible);
  };

  const toggleDeliveryStatusVisibility = () => {
    setIsDeliveryStatusVisible(!isDeliveryStatusVisible);
  };

  const toggleProblemVisibility = () => {
    setIsProblemVisible(!isProblemVisible);
  };

  const toggleContactVisibility = () => {
    setIsContactVisible(!isContactVisible);
  };

  const toggleDamagedVisibility = () => {
    setIsDamagedVisible(!isDamagedVisible);
  };

  const togglePickUpVisibility = () => {
    setIsPickUpVisible(!isPickUpVisible);
  };

  const toggleDeliveryTimeVisibility = () => {
    setIsDeliveryTimeVisible(!isDeliveryTimeVisible);
  };

  return (
    <>
      {/* Track Delivery */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleTrackDeliveryVisibility}
        >
          <h3 className="font-bold">
            How can I track my delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isTrackDeliveryVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isTrackDeliveryVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              To track your delivery on Jumia, you can follow these steps:
              <ol className="list-decimal list-inside font-normal">
                <li>
                  <span className="font-bold"> Step 1: </span>Log in to your
                  account.
                </li>
                <li>
                  <span className="font-bold"> Step 2: </span>Click on the "My
                  Account" button and select "Orders" from the dropdown menu.
                </li>
                <li>
                  <span className="font-bold"> Step 3: </span>Locate the order
                  for which you want to track the delivery and click on the
                  "View Details" button.
                </li>
                <li>
                  <span className="font-bold"> Step 4: </span>On the order
                  details page, look for the delivery status under the "Order
                  Information" section.
                </li>
              </ol>
              If you have any concerns about the delivery status, you can
              contact Jumia's customer service team by clicking on the "Help"
              button at the top right of the page and selecting "Live Chat" from
              the dropdown menu.
            </p>
          </div>
        )}
      </div>

      {/* Not Available to Receive */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleNotAvailableVisibility}
        >
          <h3 className="font-bold">
            What if I am not available to receive my delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isNotAvailableVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isNotAvailableVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you are not available to receive your delivery, you have the
              following options:
              <ul className="list-disc list-inside font-normal">
                <li>
                  You can arrange for someone else to receive it on your behalf
                  by providing their name and contact information to the
                  delivery agent. It is important to ensure that this person is
                  available at the same address that was provided when placing
                  your order.
                </li>
                <li>
                  Contact the delivery agent to reschedule the delivery for a
                  more convenient time.
                </li>
              </ul>
              Note: It is not possible to change the delivery address once an
              order is placed. Jumia will make a total of 2 attempts to deliver
              the package before canceling your order. You will be notified
              before they make the second attempt, so it's important to remain
              available to avoid order cancellation.
            </p>
          </div>
        )}
      </div>

      {/* Change Delivery Address */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleChangeAddressVisibility}
        >
          <h3 className="font-bold">
            Can I change my delivery address after placing an order?
            <span className="absolute right-4 top-2 font-bold">
              {isChangeAddressVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isChangeAddressVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              It is important to carefully review and confirm the accuracy of
              your delivery information, such as your address and phone number,
              before placing an order on Jumia. Once the order has been placed,
              it is not possible to make changes to the delivery information. To
              make sure that your order is delivered properly, please
              double-check your delivery information on the checkout page.
            </p>
          </div>
        )}
      </div>

      {/* Delivery Fee */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDeliveryFeeVisibility}
        >
          <h3 className="font-bold">
            What is the delivery fee?
            <span className="absolute right-4 top-2 font-bold">
              {isDeliveryFeeVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDeliveryFeeVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The delivery fee is the cost incurred by Jumia and its logistics
              partners for delivering your order to the selected address. The
              delivery fee amount can vary based on factors such as your
              geographic location, the delivery method chosen, the shipment
              method, and the size or category of the product ordered. You can
              review the delivery fee before placing your order on the product
              page and during the checkout process.
            </p>
          </div>
        )}
      </div>

      {/* Delivery Status */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDeliveryStatusVisibility}
        >
          <h3 className="font-bold">
            What do I do if my delivery has not arrived within the estimated
            time frame?
            <span className="absolute right-4 top-2 font-bold">
              {isDeliveryStatusVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDeliveryStatusVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              <ul className="list-disc list-inside">
                <li>
                  Check the order information page in your Jumia account for any
                  updates on the delivery status.
                </li>
                <li>
                  Monitor communication sent through push notifications, emails,
                  and the app inbox for any updates on the delivery status of
                  your order.
                </li>
                <li>
                  Contact the delivery agent by using the contact information
                  provided in the email sent to you when your package is “out
                  for delivery”.
                </li>
                <li>
                  If you are unable to reach the delivery agent, or if the
                  delivery status has not been updated, you can reach out to
                  Jumia's customer service team for assistance. You can reach
                  them by clicking on the "Help" button at the top right of the
                  page and selecting "Live Chat" from the dropdown menu.
                </li>
              </ul>
              Note: it is important to reach out to us if you have any concerns
              or questions regarding the delivery of your order.
            </p>
          </div>
        )}
      </div>

      {/* Problem with Delivery */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleProblemVisibility}
        >
          <h3 className="font-bold">
            Who do I contact if there is a problem with my delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isProblemVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isProblemVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you need to report an issue with your Jumia order or contact
              customer support, you can do so through several methods:
              <ul className="list-disc list-inside">
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

      {/* Delivery Damaged */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDamagedVisibility}
        >
          <h3 className="font-bold">
            What happens if my delivery is damaged upon arrival?
            <span className="absolute right-4 top-2 font-bold">
              {isDamagedVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDamagedVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              In case your delivery arrives damaged, reach out to our customer
              service team through Live Chat or Calling us with details about
              the damage. Our customer service representatives will assist you
              in resolving the issue. Remember to promptly inspect your delivery
              upon arrival and report any damages.
            </p>
          </div>
        )}
      </div>

      {/* Pick Up at Station */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePickUpVisibility}
        >
          <h3 className="font-bold">
            Can I collect my order at a pick-up station?
            <span className="absolute right-4 top-2 font-bold">
              {isPickUpVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isPickUpVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              In addition to home delivery, you can also choose to pick up your
              order at one of many Jumia Pickup Stations. To locate the most
              convenient location for you, please click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Delivery Time */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Delivery</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDeliveryTimeVisibility}
        >
          <h3 className="font-bold">
            How long does delivery usually take?
            <span className="absolute right-4 top-2 font-bold">
              {isDeliveryTimeVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDeliveryTimeVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Delivery timelines vary by area. Full details can be found{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Delivery;
