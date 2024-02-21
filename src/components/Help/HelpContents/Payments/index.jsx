import React, { useState } from "react";

const Payments = () => {
  const [isPaymentMethodVisible, setIsPaymentMethodVisible] = useState(false);
  const [isSecurePaymentVisible, setIsSecurePaymentVisible] = useState(false);
  const [isPaymentDeclinedVisible, setIsPaymentDeclinedVisible] =
    useState(false);
  const [isJumiaPayOnDeliveryVisible, setIsJumiaPayOnDeliveryVisible] =
    useState(false);
  const [isJumiaPayHowItWorksVisible, setIsJumiaPayHowItWorksVisible] =
    useState(false);
  const [
    isJumiaPayIssueEncounteredVisible,
    setIsJumiaPayIssueEncounteredVisible,
  ] = useState(false);
  const [
    isJumiaPayMultiplePackagesVisible,
    setIsJumiaPayMultiplePackagesVisible,
  ] = useState(false);
  const [isJumiaPayRefundVisible, setIsJumiaPayRefundVisible] = useState(false);
  const [isJumiaPayOnBehalfVisible, setIsJumiaPayOnBehalfVisible] =
    useState(false);
  const [isCashOnDeliveryReasonVisible, setIsCashOnDeliveryReasonVisible] =
    useState(false);
  const [isPaymentStatusVisible, setIsPaymentStatusVisible] = useState(false);
  const [isPaymentProcessingTimeVisible, setIsPaymentProcessingTimeVisible] =
    useState(false);
  const [isCancelOrderVisible, setIsCancelOrderVisible] = useState(false);
  const [isPaymentFailedVisible, setIsPaymentFailedVisible] = useState(false);

  const togglePaymentMethodVisibility = () => {
    setIsPaymentMethodVisible(!isPaymentMethodVisible);
  };

  const toggleSecurePaymentVisibility = () => {
    setIsSecurePaymentVisible(!isSecurePaymentVisible);
  };

  const togglePaymentDeclinedVisibility = () => {
    setIsPaymentDeclinedVisible(!isPaymentDeclinedVisible);
  };

  const toggleJumiaPayOnDeliveryVisibility = () => {
    setIsJumiaPayOnDeliveryVisible(!isJumiaPayOnDeliveryVisible);
  };

  const toggleJumiaPayHowItWorksVisibility = () => {
    setIsJumiaPayHowItWorksVisible(!isJumiaPayHowItWorksVisible);
  };

  const toggleJumiaPayIssueEncounteredVisibility = () => {
    setIsJumiaPayIssueEncounteredVisible(!isJumiaPayIssueEncounteredVisible);
  };

  const toggleJumiaPayMultiplePackagesVisibility = () => {
    setIsJumiaPayMultiplePackagesVisible(!isJumiaPayMultiplePackagesVisible);
  };

  const toggleJumiaPayRefundVisibility = () => {
    setIsJumiaPayRefundVisible(!isJumiaPayRefundVisible);
  };

  const toggleJumiaPayOnBehalfVisibility = () => {
    setIsJumiaPayOnBehalfVisible(!isJumiaPayOnBehalfVisible);
  };

  const toggleCashOnDeliveryReasonVisibility = () => {
    setIsCashOnDeliveryReasonVisible(!isCashOnDeliveryReasonVisible);
  };

  const togglePaymentStatusVisibility = () => {
    setIsPaymentStatusVisible(!isPaymentStatusVisible);
  };

  const togglePaymentProcessingTimeVisibility = () => {
    setIsPaymentProcessingTimeVisible(!isPaymentProcessingTimeVisible);
  };

  const toggleCancelOrderVisibility = () => {
    setIsCancelOrderVisible(!isCancelOrderVisible);
  };

  const togglePaymentFailedVisibility = () => {
    setIsPaymentFailedVisible(!isPaymentFailedVisible);
  };

  return (
    <>
      {/* Payment Method Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentMethodVisibility}
        >
          <h3 className="font-bold">
            What payment methods are accepted on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isPaymentMethodVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isPaymentMethodVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Payment Method Content */}
            <p className="font-normal">
              Jumia offers multiple payment options, including:
            </p>
            <p className="font-normal">
              <span className="font-bold">1. Pay on Delivery: </span> You have
              the option to pay with cash, a bank card, or a smart wallet when
              the courier delivers your order.
            </p>

            <p className="font-normal">
              <span className="font-bold">2. JumiaPay: </span> Secure payment
              using Bank cards, Installment, Smart wallets, or Fawry.
            </p>

            <p className="font-normal">
              <span className="font-bold">3. Vouchers: </span> Pay using a
              voucher code.
            </p>
          </div>
        )}
      </div>

      {/* Secure Payment Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleSecurePaymentVisibility}
        >
          <h3 className="font-bold">
            How secure is my payment information on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isSecurePaymentVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isSecurePaymentVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Secure Payment Content */}

            <p className="font-normal">
              Jumia prioritizes customer payment security with encryption, and
              secure servers. Regular monitoring and auditing are also performed
              to maintain a secure environment for transactions.
            </p>
          </div>
        )}
      </div>

      {/* Payment Declined Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentDeclinedVisibility}
        >
          <h3 className="font-bold">
            What do I do if my payment is declined?
            <span className="absolute right-4 top-2 font-bold">
              {isPaymentDeclinedVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isPaymentDeclinedVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Payment Declined Content */}
            <p className="font-normal">
              If your payment is declined, you can check the following to
              resolve the issue:
            </p>
            <ul className="list-disc pl-8">
              <li>
                Check the spelling and billing information you entered for
                accuracy.
              </li>
              <li>
                Ensure that your credit card has sufficient funds or that your
                bank account has enough balance.
              </li>
              <li>
                Check if there are any restrictions on your card, such as a
                daily spending limit.
              </li>
              <li>Make sure your card has not expired.</li>
            </ul>
            <p className="font-normal">
              If you've checked the above and your payment is still declined,
              you can contact Jumia customer service for assistance. They can be
              reached through Live Chat or by calling us.
            </p>
            <p className="font-normal">
              <span className="font-bold">Note:</span> It is recommended to keep
              the details of the error message that appeared during the declined
              transaction to provide it to Jumia customer service for a faster
              resolution.
            </p>
          </div>
        )}
      </div>

      {/* JumiaPay on Delivery Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayOnDeliveryVisibility}
        >
          <h3 className="font-bold">
            What is JumiaPay on Delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayOnDeliveryVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayOnDeliveryVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay on Delivery Content */}
            <p className="font-normal">
              JumiaPay on delivery is an easy, quick method of payment which
              allows you to pay by card or smart wallet at the time of delivery,
              instead of cash.
            </p>
          </div>
        )}
      </div>

      {/* JumiaPay How It Works Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayHowItWorksVisibility}
        >
          <h3 className="font-bold">
            How does JumiaPay on Delivery work?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayHowItWorksVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayHowItWorksVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay How It Works Content */}
            <p className="font-normal">
              You simply have to follow the steps below:
            </p>
            <ol className="list-decimal pl-8">
              <li>
                Ask our delivery agent to use JumiaPay to pay for your package.
              </li>
              <li>
                The agent will share a QR code with you. Scan it to be
                redirected to the JumiaPay checkout platform. Alternatively, the
                agent may send you the link to the checkout page via SMS.
              </li>
              <li>
                Once on the JumiaPay platform, you may either login with your
                Jumia account, or opt to pay as a guest. If you choose to login,
                you will be prompted to receive a OTP via SMS/email before
                proceeding to the checkout.
              </li>
              <li>Please follow the payment steps as indicated.</li>
              <li>
                Once the payment is completed, the delivery agent will receive a
                confirmation message, and will hand you your package.
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* JumiaPay Issue Encountered Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayIssueEncounteredVisibility}
        >
          <h3 className="font-bold">
            I encountered an issue with JumiaPay on Delivery. What should I do?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayIssueEncounteredVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayIssueEncounteredVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay Issue Encountered Content */}
            <p className="font-normal">
              On rare occasions, your payment may not be successful. Please
              ensure you input the correct payment information (card number,
              expiry date, CVV), and that you have sufficient funds in your
              card/account. Also, network and connectivity issues with your
              issuing bank may lead to a payment failure. Your bank may also
              send you a verification code (OTP) via SMS, so please ensure you
              have access to your phone at the time of completing the
              transaction. A transaction on the payment platform is valid for a
              limited period of time, so please ensure you complete it before it
              times out. Should you require additional assistance, please
              <a href="#" className="font-bold text-orange-500">
                {" "}
                Contact Us.
              </a>
            </p>
          </div>
        )}
      </div>

      {/* JumiaPay Multiple Packages Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayMultiplePackagesVisibility}
        >
          <h3 className="font-bold">
            Can I pay for multiple packages at once using JumiaPay on Delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayMultiplePackagesVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayMultiplePackagesVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay Multiple Packages Content */}
            <p className="font-normal">
              Yes, you may pay for all packages being delivered by the same
              agent in one instance, using JumiaPay on Delivery.
            </p>
          </div>
        )}
      </div>

      {/* JumiaPay Refund Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayRefundVisibility}
        >
          <h3 className="font-bold">
            I paid for my order using my card at the time of delivery through
            (JumiaPay on Delivery), and wish to return my item, how will I be
            refunded?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayRefundVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayRefundVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay Refund Content */}
            <p className="font-normal">
              You will be refunded through the same payment method, which means
              that orders paid via card will be refunded back to your bank card.
            </p>
          </div>
        )}
      </div>

      {/* JumiaPay on Behalf Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleJumiaPayOnBehalfVisibility}
        >
          <h3 className="font-bold">
            Can someone else pay for the package on my behalf using JumiaPay on
            Delivery?
            <span className="absolute right-4 top-2 font-bold">
              {isJumiaPayOnBehalfVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isJumiaPayOnBehalfVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* JumiaPay on Behalf Content */}
            <p className="font-normal">
              Yes, the person receiving the package may scan the QR code shown
              by the delivery. Alternatively, the agent can send the link to the
              JumiaPay checkout platform to the person who will pay for the
              order.
            </p>
          </div>
        )}
      </div>

      {/* Cash on Delivery Reason Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCashOnDeliveryReasonVisibility}
        >
          <h3 className="font-bold">
            Why is Cash on Delivery not available?
            <span className="absolute right-4 top-2 font-bold">
              {isCashOnDeliveryReasonVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isCashOnDeliveryReasonVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Cash on Delivery Reason Content */}
            <ul className="list-disc pl-8">
              <li>Your cart has a product shipped from overseas.</li>
              <li>
                Your cart is below 30 pounds which does not allow you to enjoy
                payment on delivery.
              </li>
              <li>
                The total value of the cart is more than 31 thousand pounds.
              </li>
              <li>
                Your delivery option (some far regions, some specific pick-up
                stations) is not eligible for pay on delivery.
              </li>
              <li>
                Payment on delivery is not allowed on your account, based on
                your past orders experience.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Payment Status Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentStatusVisibility}
        >
          <h3 className="font-bold">
            How do I know if my payment has been processed successfully?
            <span className="absolute right-4 top-2 font-bold">
              {isPaymentStatusVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isPaymentStatusVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Payment Status Content */}
            <p className="font-normal">
              You can check the status of your payment by following these steps:
            </p>
            <ol className="list-decimal pl-8">
              <li>
                <span className="font-bold"> Step 1: </span> Go to the "{" "}
                <span className="underline"> Orders</span> " section in your
                account dashboard.
              </li>
              <li>
                <span className="font-bold"> Step 2: </span> Find the order in
                question and check its status. If the payment has been processed
                successfully, the order status should be "{" "}
                <span className="underline">Confirmed.</span> "
              </li>
            </ol>
            <p className="font-normal">
              You will also receive a confirmation email from Jumia after a
              successful payment. If you do not receive a confirmation email or
              if you have any concerns about your payment, you can contact Jumia
              customer service via Live Chat for assistance.
            </p>
          </div>
        )}
      </div>

      {/* Payment Processing Time Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentProcessingTimeVisibility}
        >
          <h3 className="font-bold">
            How long does it take for my payment to be processed?
            <span className="absolute right-4 top-2 font-bold">
              {isPaymentProcessingTimeVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isPaymentProcessingTimeVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Payment Processing Time Content */}
            <p className="font-normal">
              Most payments on Jumia are processed immediately when completed.
              However, specific processing times may vary depending on the
              payment method. To ensure that your payment is processed quickly,
              we recommend that you double-check all the information before
              completing the checkout. If you are experiencing an issue with
              your payment, please contact Jumia's customer service team for
              assistance.
            </p>
          </div>
        )}
      </div>

      {/* Cancel Order and Refund Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCancelOrderVisibility}
        >
          <h3 className="font-bold">
            Can I cancel my order and get a refund after payment has been made?
            <span className="absolute right-4 top-2 font-bold">
              {isCancelOrderVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isCancelOrderVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Cancel Order and Refund Content */}
            <p className="font-normal">
              If the order has not been shipped, you can cancel the order and
              get a refund. The refund processing time varies depending on the
              payment method. You can check the refund timelines from{" "}
              <a href="#" className="font-bold text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Payment Failed Section */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <p className="pt-2 pl-2 underline ">Payments</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePaymentFailedVisibility}
        >
          <h3 className="font-bold text-justify pr-6">
            I tried to pay for my order using my card / mobile money. The funds
            were debited, but it says my order did not go through. What
            happened, and how can I get my money back?
            <span className="absolute right-4 top-2 font-bold ">
              {isPaymentFailedVisible ? "-" : "+"}
            </span>
          </h3>
        </button>

        {isPaymentFailedVisible && (
          <div className="p-4  dark:bg-gray-800">
            {/* Payment Failed Content */}
            <p className="font-normal">
              On rare occasions, technical issues may occur preventing us from
              confirming the transaction although your account may have been
              debited. Not to worry, you will receive a refund should this issue
              occur. Please{" "}
              <a href="#" className="font-bold text-orange-500">
                CONTACT US{"  "}
              </a>
              to request a refund back to your account.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Payments;
