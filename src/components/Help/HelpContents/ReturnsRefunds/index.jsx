import React, { useState } from "react";

const ReturnsRefunds = () => {
  const [isDeliveryFeesVisible, setIsDeliveryFeesVisible] = useState(false);
  const [isCancelReturnVisible, setIsCancelReturnVisible] = useState(false);
  const [isReturnPolicyVisible, setIsReturnPolicyVisible] = useState(false);
  const [isInitiateReturnVisible, setIsInitiateReturnVisible] = useState(false);
  const [isDamagedItemVisible, setIsDamagedItemVisible] = useState(false);
  const [isProcessTimeVisible, setIsProcessTimeVisible] = useState(false);
  const [isRefundMethodVisible, setIsRefundMethodVisible] = useState(false);
  const [isRefundTimelineVisible, setIsRefundTimelineVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isWarrantyVisible, setIsWarrantyVisible] = useState(false);
  const [isDeclinedRequestVisible, setIsDeclinedRequestVisible] =
    useState(false);
  const [isExchangeVisible, setIsExchangeVisible] = useState(false);
  const [isIncorrectRefundVisible, setIsIncorrectRefundVisible] =
    useState(false);
  const [isRefundDeliveryVisible, setIsRefundDeliveryVisible] = useState(false);
  const [isTrackReturnStatusVisible, setIsTrackReturnStatusVisible] =
    useState(false);

  const toggleDeliveryFeesVisibility = () => {
    setIsDeliveryFeesVisible(!isDeliveryFeesVisible);
  };

  const toggleCancelReturnVisibility = () => {
    setIsCancelReturnVisible(!isCancelReturnVisible);
  };

  const toggleReturnPolicyVisibility = () => {
    setIsReturnPolicyVisible(!isReturnPolicyVisible);
  };

  const toggleInitiateReturnVisibility = () => {
    setIsInitiateReturnVisible(!isInitiateReturnVisible);
  };

  const toggleDamagedItemVisibility = () => {
    setIsDamagedItemVisible(!isDamagedItemVisible);
  };

  const toggleProcessTimeVisibility = () => {
    setIsProcessTimeVisible(!isProcessTimeVisible);
  };

  const toggleRefundMethodVisibility = () => {
    setIsRefundMethodVisible(!isRefundMethodVisible);
  };

  const toggleRefundTimelineVisibility = () => {
    setIsRefundTimelineVisible(!isRefundTimelineVisible);
  };

  const toggleErrorVisibility = () => {
    setIsErrorVisible(!isErrorVisible);
  };

  const toggleWarrantyVisibility = () => {
    setIsWarrantyVisible(!isWarrantyVisible);
  };

  const toggleDeclinedRequestVisibility = () => {
    setIsDeclinedRequestVisible(!isDeclinedRequestVisible);
  };

  const toggleExchangeVisibility = () => {
    setIsExchangeVisible(!isExchangeVisible);
  };

  const toggleIncorrectRefundVisibility = () => {
    setIsIncorrectRefundVisible(!isIncorrectRefundVisible);
  };

  const toggleRefundDeliveryVisibility = () => {
    setIsRefundDeliveryVisible(!isRefundDeliveryVisible);
  };

  const toggleTrackReturnStatusVisibility = () => {
    setIsTrackReturnStatusVisible(!isTrackReturnStatusVisible);
  };

  return (
    <>
      {/* Do I have to pay for delivery fees when I return a product? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDeliveryFeesVisibility}
        >
          <h3 className="font-bold">
            Do I have to pay for delivery fees when I return a product?
            <span className="absolute right-4 top-2 font-bold">
              {isDeliveryFeesVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDeliveryFeesVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You do not need to pay for any delivery fees when returning a
              product to Jumia.
            </p>
          </div>
        )}
      </div>

      {/* I submitted my return request, but have changed my mind and no longer wish to return the item. What should I do? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCancelReturnVisibility}
        >
          <h3 className="font-bold">
            I submitted my return request, but have changed my mind and no
            longer wish to return the item. What should I do?
            <span className="absolute right-4 top-2 font-bold">
              {isCancelReturnVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isCancelReturnVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              In order to cancel your return request, please contact us via Live
              chat or call us on 19586. If you have already been contacted for
              pickup, you may request the delivery associate to cancel it for
              you on your behalf.
            </p>
          </div>
        )}
      </div>

      {/* What is Jumia's return policy? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleReturnPolicyVisibility}
        >
          <h3 className="font-bold">
            What is Jumia's return policy?
            <span className="absolute right-4 top-2 font-bold">
              {isReturnPolicyVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isReturnPolicyVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Return: You can request a return within the first 14 days from the
              delivery date if you change your mind about a product and if it
              has not been opened except for the following products HERE.
            </p>
            <p className="font-normal">
              Note: In case of receiving a product with an apparent
              defect/damage or a product with a wrong (color / size /model) or
              any shortage of product belongings or accessories or damage in the
              outer package of the product, you must inform us within a maximum
              48 hours from the delivery date.
            </p>
            <p className="font-normal">
              Refunds: If your return request is approved, you will receive a
              refund in the refund method you chose while issuing your return.
              You can find all Refund timelines HERE.
            </p>
          </div>
        )}
      </div>

      {/* How do I initiate a return on Jumia? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleInitiateReturnVisibility}
        >
          <h3 className="font-bold">
            How do I initiate a return on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isInitiateReturnVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isInitiateReturnVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Step 1: Log in to your Jumia account and go to "Orders".
            </p>
            <p className="font-normal">
              Step 2: Click on the order of the item(s) you want to return.
            </p>
            <p className="font-normal">
              Step 3: Select the item(s) you want to return and provide a reason
              for the return. Give more details to help us understand the issue.
            </p>
            <p className="font-normal">
              Step 4: Choose your preferred refund method.
            </p>
            <p className="font-normal">
              Step 5: Select whether you would like to personally drop off the
              returned item or have Jumia pick it up.
            </p>
            <p className="font-normal">
              Step 6: Review your information and submit your return request.
            </p>
          </div>
        )}
      </div>

      {/* What if I received a damaged, defective or wrong item? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDamagedItemVisibility}
        >
          <h3 className="font-bold">
            What if I received a damaged, defective or wrong item?
            <span className="absolute right-4 top-2 font-bold">
              {isDamagedItemVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDamagedItemVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you receive a damaged, defective or wrong item, you must inform
              us or initiate return within a maximum of 48 hours from the
              delivery date.
            </p>
          </div>
        )}
      </div>

      {/* How long does it take to process a return on Jumia? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleProcessTimeVisibility}
        >
          <h3 className="font-bold">
            How long does it take to process a return on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isProcessTimeVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isProcessTimeVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              It typically takes 2-6 business days to process the refund from
              Jumia.
            </p>
          </div>
        )}
      </div>

      {/* How will I receive my refund after returning an item on Jumia? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleRefundMethodVisibility}
        >
          <h3 className="font-bold">
            How will I receive my refund after returning an item on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isRefundMethodVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isRefundMethodVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You will get the refund in the method you chose while creating the
              return.
            </p>
          </div>
        )}
      </div>

      {/* How long does it take to receive the refund? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleRefundTimelineVisibility}
        >
          <h3 className="font-bold">
            How long does it take to receive the refund?
            <span className="absolute right-4 top-2 font-bold">
              {isRefundTimelineVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isRefundTimelineVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Jumia offers you the following refund methods as shown in the
              table below:
            </p>
            <table className="mt-4 w-full border-collapse">
              <thead>
                <tr className="bg-orange-200 dark:bg-gray-600">
                  <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Payment methods
                  </th>
                  <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Refund method
                  </th>
                  <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Refund timeline
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-700">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Cash
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Refund voucher
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Same day
                  </td>
                </tr>
                <tr className="bg-orange-100 dark:bg-gray-600">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Cash
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Postal
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    3 Working days
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-700">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Cash
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Bank transfer
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    6 Working days
                  </td>
                </tr>
                <tr className="bg-orange-100 dark:bg-gray-600">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Bank Card
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Bank Card
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    7 to 14 Working days
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-700">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Installment
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Credit card
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    7 to 14 Working days
                  </td>
                </tr>
                <tr className="bg-orange-100 dark:bg-gray-600">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Smart wallet
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Smart wallet
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    7 to 14 Working days
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-700">
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Fawry
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Refund Voucher
                  </td>
                  <td className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                    Same day
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 font-normal">
              Note that refund methods availability is based on the payment
              method used to pay for the order being returned, in case of
              requesting a refund voucher we will not be able to change the
              refund method later. See information about our refund timelines{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* I received an error message that my item cannot be returned, why is that? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleErrorVisibility}
        >
          <h3 className="font-bold">
            I received an error message that my item cannot be returned, why is
            that?
            <span className="absolute right-4 top-2 font-bold">
              {isErrorVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isErrorVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you receive an error message that your item cannot be returned,
              it's likely due to Jumia's policy for customer safety and
              protection. Certain items, such as swimwear, underwear, lingerie,
              earrings, cosmetics, fragrances, groceries, drugs, food
              supplements, software, tickets, and adult products cannot be
              returned, except in the case of receiving a wrong, defective,
              counterfeit, damaged, incomplete, or expired item and flagged
              within 48 hours from the delivery date.
            </p>
          </div>
        )}
      </div>

      {/* Does my product have a warranty? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleWarrantyVisibility}
        >
          <h3 className="font-bold">
            Does my product have a warranty?
            <span className="absolute right-4 top-2 font-bold">
              {isWarrantyVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isWarrantyVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The warranty information for a product can be found on its listing
              page on Jumia. For more information on how to claim a warranty,
              click{" "}
              <a href="#" className="text-orange-500">
                HERE
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Why was my return request declined and the item sent back to me? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleDeclinedRequestVisibility}
        >
          <h3 className="font-bold">
            Why was my return request declined and the item sent back to me?
            <span className="absolute right-4 top-2 font-bold">
              {isDeclinedRequestVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isDeclinedRequestVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Your return request was declined by the Jumia Quality Check Team
              because the eligibility conditions for return were not met, or the
              return claim could not be confirmed after thorough testing. This
              may have occurred if you returned the item without its original
              packaging, or if an unsealed product (such as a phone or laptop)
              was returned but found to be functional. If your return request is
              rejected, Jumia will make two redelivery attempts within 7
              business days. If both attempts are unsuccessful, the product will
              be returned to Jumia, and if you want to receive it, you will have
              to come and collect it from the Jumia warehouse.
            </p>
          </div>
        )}
      </div>

      {/* Does my product have a warranty? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleWarrantyVisibility}
        >
          <h3 className="font-bold">
            Does my product have a warranty?
            <span className="absolute right-4 top-2 font-bold">
              {isWarrantyVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isWarrantyVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The warranty information for a product can be found on its listing
              page on Jumia. For more information on how to claim a warranty,
              please follow this{" "}
              <a href="LINK" className="text-orange-500 underline">
                LINK
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Is it possible to exchange an item instead of requesting a return and refund? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleExchangeVisibility}
        >
          <h3 className="font-bold">
            Is it possible to exchange an item instead of requesting a return
            and refund?
            <span className="absolute right-4 top-2 font-bold">
              {isExchangeVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isExchangeVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Currently, Jumia does not offer an exchange option for items.
              However, you can still return an item and receive a full refund.
            </p>
          </div>
        )}
      </div>

      {/* I received a refund confirmation, but the amount received is incorrect. What should I do? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleIncorrectRefundVisibility}
        >
          <h3 className="font-bold">
            I received a refund confirmation, but the amount received is
            incorrect. What should I do?
            <span className="absolute right-4 top-2 font-bold">
              {isIncorrectRefundVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isIncorrectRefundVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              We apologize for the inconvenience. If you believe the amount you
              received is incorrect, please reach out to us for further
              investigation and resolution via Live Chat or call us on 19586.
            </p>
          </div>
        )}
      </div>

      {/* Will I get my delivery fees refunded when returning an item? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleRefundDeliveryVisibility}
        >
          <h3 className="font-bold">
            Will I get my delivery fees refunded when returning an item?
            <span className="absolute right-4 top-2 font-bold">
              {isRefundDeliveryVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isRefundDeliveryVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The refund amount will include the delivery fees.
            </p>
          </div>
        )}
      </div>

      {/* How do I track my return status? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Returns & Refunds</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleTrackReturnStatusVisibility}
        >
          <h3 className="font-bold">
            How do I track my return status?
            <span className="absolute right-4 top-2 font-bold">
              {isTrackReturnStatusVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isTrackReturnStatusVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can keep track of your return status through email,{" "}
              <a href="#" className="text-orange-500">
                APP INBOX
              </a>{" "}
              , push notifications updates from Jumia. Additionally, you can
              also check our{" "}
              <a href="#" className="text-orange-500">
                RETURN TIMELINES
              </a>{" "}
              for further information.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ReturnsRefunds;
