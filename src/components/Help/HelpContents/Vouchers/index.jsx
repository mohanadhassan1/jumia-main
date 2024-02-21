import React, { useState } from "react";

const Vouchers = () => {
  const [isVouchersVisible, setIsVouchersVisible] = useState(false);
  const [isUsageInstructionsVisible, setIsUsageInstructionsVisible] =
    useState(false);
  const [isRestrictionsVisible, setIsRestrictionsVisible] = useState(false);
  const [isValidityVisible, setIsValidityVisible] = useState(false);
  const [isMultipleVouchersVisible, setIsMultipleVouchersVisible] =
    useState(false);
  const [isNotWorkingVisible, setIsNotWorkingVisible] = useState(false);
  const [isMinimumOrderVisible, setIsMinimumOrderVisible] = useState(false);

  const toggleVouchersVisibility = () => {
    setIsVouchersVisible(!isVouchersVisible);
  };
  const toggleUsageInstructionsVisibility = () => {
    setIsUsageInstructionsVisible(!isUsageInstructionsVisible);
  };
  const toggleRestrictionsVisibility = () => {
    setIsRestrictionsVisible(!isRestrictionsVisible);
  };
  const toggleValidityVisibility = () => {
    setIsValidityVisible(!isValidityVisible);
  };

  const toggleMultipleVouchersVisibility = () => {
    setIsMultipleVouchersVisible(!isMultipleVouchersVisible);
  };

  const toggleNotWorkingVisibility = () => {
    setIsNotWorkingVisible(!isNotWorkingVisible);
  };
  const toggleMinimumOrderVisibility = () => {
    setIsMinimumOrderVisible(!isMinimumOrderVisible);
  };

  return (
    <>
      {/* Jumia vouchers */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleVouchersVisibility}
        >
          <h3 className="font-bold">
            What are Jumia vouchers?
            <span className="absolute right-4 top-2 font-bold">
              {isVouchersVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isVouchersVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Jumia vouchers are codes that provide customers with exclusive
              discounts on their purchases made on the Jumia website.
              Additionally, these codes can be issued as a form of refund for
              canceled or returned orders made through specific payment methods.
              With Jumia vouchers, customers can maximize their savings and have
              a seamless shopping experience.
            </p>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleUsageInstructionsVisibility}
        >
          <h3 className="font-bold">
            How can I use Jumia Vouchers?
            <span className="absolute right-4 top-2 font-bold">
              {isUsageInstructionsVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isUsageInstructionsVisible && (
          <div className="p-4 dark:bg-gray-800">
            <ol className="list-decimal list-inside font-normal">
              <li>
                <span className="font-bold">Step 1: </span> Log into your Jumia
                account.
              </li>
              <li>
                {" "}
                <span className="font-bold">Step 2: </span> Go to the "Account"
                section in the top right menu.
              </li>
              <li>
                <span className="font-bold">Step 3: </span> Select "Vouchers" to
                view all vouchers linked to your account. You may also have
                received a voucher code via email or social media.
              </li>
              <li>
                {" "}
                <span className="font-bold">Step 4: </span>Copy the voucher code
                you want to use.
              </li>
              <li>
                <span className="font-bold">Step 5: </span> During checkout,
                paste the code in the "Enter Code Here" section and click
                "Apply".
              </li>
              <li>
                <span className="font-bold">Step 6: </span> Your order total
                will be updated with the voucher's discount value, and you can
                proceed with your order by clicking "Confirm Your Order".
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* Restrictions */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleRestrictionsVisibility}
        >
          <h3 className="font-bold">
            Can I use a voucher for all products on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isRestrictionsVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isRestrictionsVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Some vouchers may have restrictions, such as being only valid for
              specific products or categories. The terms and conditions of the
              voucher will indicate any such restrictions.
            </p>
          </div>
        )}
      </div>

      {/* Validity */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleValidityVisibility}
        >
          <h3 className="font-bold">
            How do I know if my voucher is still valid?
            <span className="absolute right-4 top-2 font-bold">
              {isValidityVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isValidityVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can check the voucher's status in your Jumia account, under
              the "Vouchers" section. If the voucher has expired or has already
              been redeemed, it will not be listed there. In addition,
              reactivation of the voucher code may not be possible.
            </p>
          </div>
        )}
      </div>

      {/* Multiple Vouchers */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleMultipleVouchersVisibility}
        >
          <h3 className="font-bold">
            Can I use multiple vouchers at once?
            <span className="absolute right-4 top-2 font-bold">
              {isMultipleVouchersVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isMultipleVouchersVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Unfortunately, you cannot use multiple vouchers at once. You can
              only use one voucher per order.
            </p>
          </div>
        )}
      </div>

      {/* Voucher Code Not Working */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleNotWorkingVisibility}
        >
          <h3 className="font-bold">
            Why is my voucher code not working?
            <span className="absolute right-4 top-2 font-bold">
              {isNotWorkingVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isNotWorkingVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you're facing an error while trying to apply a voucher code on
              Jumia, here are some common reasons why voucher codes might not
              work and how to resolve them:
            </p>
            <ul className="list-disc list-inside font-normal">
              <li>
                Incorrect code: Please double-check that the code you entered is
                correct and free of spaces or special characters.
              </li>
              <li>
                Account specific: Voucher codes are linked to your Jumia account
                and cannot be used by another account. If the code was received
                from someone else, it won't work for you.
              </li>
              <li>
                Already redeemed: Each voucher code can only be used once. If
                you have already redeemed the code, it will no longer be valid.
              </li>
              <li>
                Expired: Voucher codes have a limited validity period. If the
                code has expired, it won't work.
              </li>
              <li>
                Maximum redemptions reached: Some voucher codes have a maximum
                number of redemptions. If the maximum has been reached, the code
                won't work.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Minimum Order Value */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Vouchers</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleMinimumOrderVisibility}
        >
          <h3 className="font-bold">
            Do I need to meet a minimum order value to use my voucher code?
            <span className="absolute right-4 top-2 font-bold">
              {isMinimumOrderVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isMinimumOrderVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              The conditions for using voucher codes, including any minimum
              order values, may vary. For more information on the specific
              conditions for your voucher, please visit the{" "}
              <span className="underline">"Vouchers"</span> section in your
              account.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Vouchers;
