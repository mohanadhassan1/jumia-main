import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Delivery</p>
      <button
        type="button"
        className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
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

const Delivery = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      <CollapsibleSection
        title="How can I track my delivery?"
        content={
          <>
            <p>
              To track your delivery on Jumia, you can follow these steps:
              <ol className="list-decimal list-inside font-normal">
                <li>Log in to your account.</li>
                <li>
                  Click on the "My Account" button and select "Orders" from the
                  dropdown menu.
                </li>
                <li>
                  Locate the order for which you want to track the delivery and
                  click on the "View Details" button.
                </li>
                <li>
                  On the order details page, look for the delivery status under
                  the "Order Information" section.
                </li>
              </ol>
              If you have any concerns about the delivery status, you can
              contact Jumia's customer service team by clicking on the "Help"
              button at the top right of the page and selecting "Live Chat" from
              the dropdown menu.
            </p>
          </>
        }
        isOpen={openSection === "track"}
        toggleVisibility={() => toggleVisibility("track")}
      />

      <CollapsibleSection
        title="What if I am not available to receive my delivery?"
        content={
          <>
            <p>
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
          </>
        }
        isOpen={openSection === "notAvailable"}
        toggleVisibility={() => toggleVisibility("notAvailable")}
      />

      <CollapsibleSection
        title="Can I change my delivery address after placing an order?"
        content={
          <>
            <p>
              It is important to carefully review and confirm the accuracy of
              your delivery information, such as your address and phone number,
              before placing an order on Jumia. Once the order has been placed,
              it is not possible to make changes to the delivery information. To
              make sure that your order is delivered properly, please
              double-check your delivery information on the checkout page.
            </p>
          </>
        }
        isOpen={openSection === "changeAddress"}
        toggleVisibility={() => toggleVisibility("changeAddress")}
      />

      <CollapsibleSection
        title="What is the delivery fee?"
        content={
          <>
            <p>
              The delivery fee is the cost incurred by Jumia and its logistics
              partners for delivering your order to the selected address. The
              delivery fee amount can vary based on factors such as your
              geographic location, the delivery method chosen, the shipment
              method, and the size or category of the product ordered. You can
              review the delivery fee before placing your order on the product
              page and during the checkout process.
            </p>
          </>
        }
        isOpen={openSection === "deliveryFee"}
        toggleVisibility={() => toggleVisibility("deliveryFee")}
      />

      <CollapsibleSection
        title="What do I do if my delivery has not arrived within the estimated time frame?"
        content={
          <>
            <p>
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
          </>
        }
        isOpen={openSection === "deliveryStatus"}
        toggleVisibility={() => toggleVisibility("deliveryStatus")}
      />

      <CollapsibleSection
        title="Who do I contact if there is a problem with my delivery?"
        content={
          <>
            <p>
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
          </>
        }
        isOpen={openSection === "problem"}
        toggleVisibility={() => toggleVisibility("problem")}
      />

      <CollapsibleSection
        title="What happens if my delivery is damaged upon arrival?"
        content={
          <>
            <p>
              In case your delivery arrives damaged, reach out to our customer
              service team through Live Chat or Calling us with details about
              the damage. Our customer service representatives will assist you
              in resolving the issue. Remember to promptly inspect your delivery
              upon arrival and report any damages.
            </p>
          </>
        }
        isOpen={openSection === "damaged"}
        toggleVisibility={() => toggleVisibility("damaged")}
      />

      <CollapsibleSection
        title="Can I collect my order at a pick-up station?"
        content={
          <>
            <p>
              In addition to home delivery, you can also choose to pick up your
              order at one of many Jumia Pickup Stations. To locate the most
              convenient location for you, please click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </>
        }
        isOpen={openSection === "pickUp"}
        toggleVisibility={() => toggleVisibility("pickUp")}
      />

      <CollapsibleSection
        title="How long does delivery usually take?"
        content={
          <>
            <p>
              Delivery timelines vary by area. Full details can be found{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </>
        }
        isOpen={openSection === "deliveryTime"}
        toggleVisibility={() => toggleVisibility("deliveryTime")}
      />
    </>
  );
};

export default Delivery;
