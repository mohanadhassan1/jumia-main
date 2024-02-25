import React from "react";

const PlaceOrder = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold">How to Place an Order</h2>

      <p>Make one order in a few steps:</p>

      <div className="mb-5">
        <p>
          {" "}
          <span className="font-bold">Step 1:</span> Browse and choose your
          product
        </p>
        <p>
          <span className="font-bold">Step 2:</span>Add product to cart
        </p>
        <p>
          <span className="font-bold">Step 3:</span>Complete the checkout
        </p>
        <p>
          <span className="font-bold">Step 4:</span>Confirm your order
        </p>
        <p>
          <span className="font-bold">Step 5:</span>Track your order
        </p>
      </div>

      <h3 className="font-bold">Step 1: Browse and choose your product</h3>

      <p className="mb-5">
        Browse the Jumia website or use the search bar to find the product you
        want to order.
      </p>

      <p>Click on the product to view more information and details.</p>
      <div className="mb-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/3AR1howto1place1an1ordeAS.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold">Step 2: Add product to cart</h3>

      <p className="mb-5">
        Select the desired quantity of the product and click on the “Add to
        Cart” button. Review the contents of your cart and proceed to checkout.
      </p>
      <div className="mb-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/3AR1howto1place1an1orderAD.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold">Step 3: Complete the checkout</h3>

      <p className="mb-5">
        Fill in your delivery address and choose a payment method. Review your
        order information and click on the “Confirm Order” button.
      </p>
      <div className="mb-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/3AR1howto1place1an1orderXX.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold">Step 4: Track your order</h3>

      <p className="mb-5">
        You will receive an email with your order confirmation and a tracking
        link when your package is shipped.You can also track your order by
        logging into your Jumia account and clicking on the “My Orders” tab.
      </p>
      <div className="mb-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/3AR1howto1place1an1orderVE.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <p className="mb-10">
        <span className="font-bold"> Note: </span> To ensure a smooth order
        process, please make sure to provide accurate and complete delivery
        information and choose a payment method that is available in your
        location.
      </p>

      <p className="font-bold">
        We hope this guide has been helpful. Happy shopping!
      </p>
    </div>
  );
};

export default PlaceOrder;
