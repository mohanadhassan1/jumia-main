import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import toast from "react-hot-toast";

const PaypalCheckoutButton = (props) => {
  const { cart } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  const disableButton = paidFor || paymentError;

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    toast.success("Thank you for your purchase!");
  }

  if (paymentError) {
    // Display error message, modal or redirect user to error page
    toast.error(paymentError);
  }

  return (
    <>
      {!paidFor && (
        <PayPalButtons
          disabled={disableButton}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: cart.description,
                  amount: {
                    value: cart.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              const order = await actions.order.capture();
              console.log("order", order);
              handleApprove(data.orderID);
            } catch (error) {
              setPaymentError("Error processing payment. Please try again.");
            }
          }}
          onError={(err) => {
            setPaymentError("PayPal Checkout error: " + err.message);
            console.error("PayPal Checkout onError", err);
          }}
          onCancel={() => {
            // Display cancel message, modal or redirect user to cancel page or back to cart
            toast.error("PayPal Checkout cancelled");
          }}
        />
      )}

      {paidFor && (
        <button
          className="button bg-gray-400 w-full text-white my-2 font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
          type="button"
          onClick={() => {
            console.log("hey");
          }}
        >
          Paymet Successfull
        </button>
      )}
    </>
  );
};

export default PaypalCheckoutButton;
