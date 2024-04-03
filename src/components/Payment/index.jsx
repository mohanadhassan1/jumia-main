import React from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId:
    "AUDO6Hf1BUIV79Dam6tVwkbh3aPPc9xEYoG3hkLHj3j74ObH9ZlvFrGyyooB-keqZgVjl-KqCVcakAoy",
  currency: "USD",
  intent: "capture",
};

const Payment = () => {
  return (
    <div className="container flex justify-center items-center mx-auto m-5 h-screen">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment;
