import React from "react";

const CancelOrder = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold">How to Cancel an Order</h2>

      <p>
        It's easy to cancel an order or an item you've purchased on Jumia.
        Here's a step-by-step guide on how to do it.
      </p>

      <div className="pl-5 my-5">
        <h3 className="font-bold mb-5">To cancel one item:</h3>
        <p>
          {" "}
          <span className="font-bold">Step 1: </span> Log in to your account
        </p>

        <p>
          {" "}
          <span className="font-bold">Step 2: </span> Go to your "Orders" page.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 3: </span> Find the order that
          includes the item you want to cancel.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 4: </span> Click on "See Details" for
          that order.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 5: </span> Select the item you want
          to cancel.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 6: </span> Click the "Cancel Item"
          button and follow the prompts to complete the cancelation process.
        </p>
      </div>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1EN-How-to-cancel.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <div className="pl-5 my-5">
        <h3 className="font-bold mb-5">To cancel an order:</h3>
        <p>
          {" "}
          <span className="font-bold">Step 1: </span> Log in to your account
        </p>

        <p>
          {" "}
          <span className="font-bold">Step 2: </span> Go to your "Orders" page.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 3: </span> Find the order that
          includes the item you want to cancel.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 4: </span> Click on "See Details" for
          that order.
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 5: </span> Click the "Cancel Order"
          button and follow the steps to confirm the cancellation.
        </p>
      </div>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1EN-How-to-cancel.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <div className="my-10">
        <h2 className="font-bold">Refund Process for Prepaid Orders:</h2>
        <ul>
          <li>
            If you've prepaid for your order and wish to cancel:
            <ul>
              <li>
                <span className="font-bold">Cancellation Online:</span> If you
                cancel your order through our online platform, your refund will
                be initiated to your original payment method.
              </li>
              <li>
                <span className="font-bold">Delivery Rejection:</span> In case
                you decide to reject the delivery upon arrival, your refund will
                be processed promptly once the order is marked as undeliverable.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Cancelling Shipped Orders:</h2>
        <p>
          If your order has already been shipped but you still need to cancel:
          <ul>
            <li>
              <span className="font-bold">Shipped Status:</span> If the status
              of your order is marked as "Shipped," you still have the option to
              cancel by refusing to accept the package when the courier attempts
              delivery.
            </li>
          </ul>
        </p>

        <p>
          <span className="font-bold">Please note:</span>
          <br />
          <ul>
            <li>
              <span className="font-bold">Eligibility and Fees:</span> Not all
              items/orders may be eligible for cancellation, and there might be
              associated fees for cancelling certain items/orders. Be sure to
              review the terms and conditions for cancellations.
            </li>
          </ul>
        </p>

        <p className="font-bold my-5">
          We trust this information will assist you in managing your orders
          effectively. Happy shopping!
        </p>
      </div>
    </div>
  );
};

export default CancelOrder;
