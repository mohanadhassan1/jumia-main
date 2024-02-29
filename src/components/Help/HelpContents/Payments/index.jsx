import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Payments</p>
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

const Payments = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      {/* Payment Method Section */}
      <CollapsibleSection
        title="What payment methods are accepted on Jumia?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "paymentMethod"}
        toggleVisibility={() => toggleVisibility("paymentMethod")}
      />

      {/* Secure Payment Section */}
      <CollapsibleSection
        title="How secure is my payment information on Jumia?"
        content={
          <>
            <p className="font-normal">
              Jumia prioritizes customer payment security with encryption, and
              secure servers. Regular monitoring and auditing are also performed
              to maintain a secure environment for transactions.
            </p>
          </>
        }
        isOpen={openSection === "securePayment"}
        toggleVisibility={() => toggleVisibility("securePayment")}
      />

      {/* Payment Declined Section */}
      <CollapsibleSection
        title="What do I do if my payment is declined?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "paymentDeclined"}
        toggleVisibility={() => toggleVisibility("paymentDeclined")}
      />

      {/* JumiaPay on Delivery Section */}
      <CollapsibleSection
        title="What is JumiaPay on Delivery?"
        content={
          <>
            <p className="font-normal">
              JumiaPay on delivery is an easy, quick method of payment which
              allows you to pay by card or smart wallet at the time of delivery,
              instead of cash.
            </p>
          </>
        }
        isOpen={openSection === "jumiaPayOnDelivery"}
        toggleVisibility={() => toggleVisibility("jumiaPayOnDelivery")}
      />

      {/* JumiaPay How It Works Section */}
      <CollapsibleSection
        title="How does JumiaPay on Delivery work? 🤔"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "jumiaPayHowItWorks"}
        toggleVisibility={() => toggleVisibility("jumiaPayHowItWorks")}
      />

      {/* JumiaPay Issue Encountered Section */}
      <CollapsibleSection
        title=" I encountered an issue with JumiaPay on Delivery. What should I do?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "jumiaPayIssueEncountered"}
        toggleVisibility={() => toggleVisibility("jumiaPayIssueEncountered")}
      />

      {/* JumiaPay Multiple Packages Section */}
      <CollapsibleSection
        title="Can I pay for multiple packages at once using JumiaPay on Delivery?"
        content={
          <>
            <p className="font-normal">
              Yes, you may pay for all packages being delivered by the same
              agent in one instance, using JumiaPay on Delivery.
            </p>
          </>
        }
        isOpen={openSection === "jumiaPayMultiplePackages"}
        toggleVisibility={() => toggleVisibility("jumiaPayMultiplePackages")}
      />

      {/* JumiaPay Refund Section */}
      <CollapsibleSection
        title=" I paid for my order using my card at the time of delivery through
            (JumiaPay on Delivery), and wish to return my item, how will I be
            refunded?"
        content={
          <>
            <p className="font-normal">
              You will be refunded through the same payment method, which means
              that orders paid via card will be refunded back to your bank card.
            </p>
          </>
        }
        isOpen={openSection === "jumiaPayRefund"}
        toggleVisibility={() => toggleVisibility("jumiaPayRefund")}
      />

      {/* JumiaPay on Behalf Section */}
      <CollapsibleSection
        title=" Can someone else pay for the package on my behalf using JumiaPay on
            Delivery?"
        content={
          <>
            <p className="font-normal">
              Yes, the person receiving the package may scan the QR code shown
              by the delivery. Alternatively, the agent can send the link to the
              JumiaPay checkout platform to the person who will pay for the
              order.
            </p>
          </>
        }
        isOpen={openSection === "jumiaPayOnBehalf"}
        toggleVisibility={() => toggleVisibility("jumiaPayOnBehalf")}
      />

      {/* Cash on Delivery Reason Section */}
      <CollapsibleSection
        title=" Why is Cash on Delivery not available?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "cashOnDeliveryReason"}
        toggleVisibility={() => toggleVisibility("cashOnDeliveryReason")}
      />

      {/* Payment Status Section */}
      <CollapsibleSection
        title="How do I know if my payment has been processed successfully?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "paymentStatus"}
        toggleVisibility={() => toggleVisibility("paymentStatus")}
      />

      {/* Payment Processing Time Section */}
      <CollapsibleSection
        title="How long does it take for my payment to be processed?"
        content={
          <>
            <p className="font-normal">
              Most payments on Jumia are processed immediately when completed.
              However, specific processing times may vary depending on the
              payment method. To ensure that your payment is processed quickly,
              we recommend that you double-check all the information before
              completing the checkout. If you are experiencing an issue with
              your payment, please contact Jumia's customer service team for
              assistance.
            </p>
          </>
        }
        isOpen={openSection === "paymentProcessingTime"}
        toggleVisibility={() => toggleVisibility("paymentProcessingTime")}
      />

      {/* Cancel Order and Refund Section */}
      <CollapsibleSection
        title="Can I cancel my order and get a refund after payment has been made?"
        content={
          <>
            <p className="font-normal">
              If the order has not been shipped, you can cancel the order and
              get a refund. The refund processing time varies depending on the
              payment method. You can check the refund timelines from{" "}
              <a href="#" className="font-bold text-orange-500">
                HERE
              </a>
              .
            </p>
          </>
        }
        isOpen={openSection === "cancelOrder"}
        toggleVisibility={() => toggleVisibility("cancelOrder")}
      />

      {/* Payment Failed Section */}
      <CollapsibleSection
        title="I tried to pay for my order using my card / mobile money. The funds
            were debited, but it says my order did not go through. What
            happened, and how can I get my money back?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "paymentFailed"}
        toggleVisibility={() => toggleVisibility("paymentFailed")}
      />
    </>
  );
};

export default Payments;
