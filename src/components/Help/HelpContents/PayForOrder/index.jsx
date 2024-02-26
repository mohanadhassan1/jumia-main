import React from "react";

const PayForOrder = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold mb-10">How to Pay for Your Order</h2>

      <p>
        Jumia provides you with multiple payment methods to offer the best
        shopping experience.
      </p>

      <ol className="list-decimal pl-5 mb-5">
        <li>
          <h3 className="font-bold"> Pay on Delivery</h3>
          <p>
            is a payment method that lets you pay with Cash when your order
            arrives at your doorstep. It is simple, secure, and convenient.{" "}
          </p>
        </li>
        <li>
          <h3 className="font-bold">Prepaid</h3>
          <p>
            You can securely pay for your order on Jumia using Bank cards, smart
            wallets and Fawry.{" "}
          </p>
        </li>
        <li>
          <h3 className="font-bold">Vouchers</h3>
          <p>You can pay for your orders using a voucher code. </p>
        </li>
      </ol>

      <h3 className="font-bold ">
        Paying for Your Jumia Order - A Step by Step Guide{" "}
      </h3>
      <p>
        At Jumia, we aim to make the process of paying for your orders as simple
        and seamless as possible. We offer a variety of payment methods to suit
        your needs, including online payment, cash on delivery (COD), and
        payment at delivery.
      </p>

      <h3 className="font-bold mt-5">Step 1: Place your order</h3>
      <p>
        Browse the Jumia website and select the items you'd like to purchase,
        Add the items to your cart and proceed to checkout. Review your order
        details and delivery address.
      </p>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1ENhowtopayW.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold mt-5">Step 2: Choose your payment method</h3>
      <p>
        Select your preferred payment method from the options available: • Cash
        on delivery: Pay when order deliver to your door via Cash, bank card or
        smart wallet. • Prepaid: Pay using your credit/debit card, smart wallets
        or Fawry. • Voucher Code: Apply a voucher code for payment.
      </p>
      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1ENhowtopayR.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold mt-5">Step 3: Complete your payment</h3>
      <p>
        Follow the instructions provided for your chosen payment method to
        complete the payment process. If you've chosen online payment, you'll be
        redirected to a secure payment page where you can enter your payment
        details.
      </p>
      <p>
        {" "}
        For cash on delivery simply wait for your order to be delivered and pay
        the amount of the order to the courier.
      </p>

      <p>To pay with a voucher code for your order, follow the steps below:</p>
      <ul className="list-disc pl-5">
        <li>Add items to your cart and proceed to the "Checkout Page."</li>
        <li>
          Enter your voucher code in the "Voucher" field under the "Payment
          Method" section.
        </li>
        <li>Apply the voucher by clicking "Add Voucher".</li>
      </ul>

      <h3 className="font-bold mt-5">Step 4: Confirm your payment</h3>
      <p>
        Once your payment is complete, you'll receive an order confirmation
        email.
      </p>
      <p>
        If you've chosen online payment, the payment confirmation page will also
        display your payment details.
      </p>
      <p>
        If you experience any issues with payment, please don't hesitate to
        reach out to our customer support team. We're here to help and make sure
        that your Jumia shopping experience is as smooth as possible.
      </p>

      <p className="font-bold ">
        We hope this guide has been helpful. Happy shopping!
      </p>
    </div>
  );
};

export default PayForOrder;
