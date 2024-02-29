import React, { useState } from "react";

const CollapsibleSection = ({ title, content, isOpen, toggleVisibility }) => {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <p className="pt-2 pl-2 underline">Vouchers</p>
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
const Vouchers = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleVisibility = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <>
      {/* Jumia vouchers */}
      <CollapsibleSection
        title="What are Jumia vouchers?"
        content={
          <>
            <p className="font-normal">
              Jumia vouchers are codes that provide customers with exclusive
              discounts on their purchases made on the Jumia website.
              Additionally, these codes can be issued as a form of refund for
              canceled or returned orders made through specific payment methods.
              With Jumia vouchers, customers can maximize their savings and have
              a seamless shopping experience.
            </p>
          </>
        }
        isOpen={openSection === "jumiaVouchers"}
        toggleVisibility={() => toggleVisibility("jumiaVouchers")}
      />

      {/* Usage Instructions */}
      <CollapsibleSection
        title="How can I use Jumia Vouchers?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "usageInstructions"}
        toggleVisibility={() => toggleVisibility("usageInstructions")}
      />

      {/* Restrictions */}
      <CollapsibleSection
        title="Can I use a voucher for all products on Jumia?"
        content={
          <>
            <p className="font-normal">
              Some vouchers may have restrictions, such as being only valid for
              specific products or categories. The terms and conditions of the
              voucher will indicate any such restrictions.
            </p>
          </>
        }
        isOpen={openSection === "restrictions"}
        toggleVisibility={() => toggleVisibility("restrictions")}
      />

      {/* Validity */}
      <CollapsibleSection
        title="How do I know if my voucher is still valid?"
        content={
          <>
            <p className="font-normal">
              You can check the voucher's status in your Jumia account, under
              the "Vouchers" section. If the voucher has expired or has already
              been redeemed, it will not be listed there. In addition,
              reactivation of the voucher code may not be possible.
            </p>
          </>
        }
        isOpen={openSection === "validity"}
        toggleVisibility={() => toggleVisibility("validity")}
      />

      {/* Multiple Vouchers */}
      <CollapsibleSection
        title="Can I use multiple vouchers at once?"
        content={
          <>
            <p className="font-normal">
              Unfortunately, you cannot use multiple vouchers at once. You can
              only use one voucher per order.
            </p>
          </>
        }
        isOpen={openSection === "multipleVouchers"}
        toggleVisibility={() => toggleVisibility("multipleVouchers")}
      />

      {/* Voucher Code Not Working */}
      <CollapsibleSection
        title="Why is my voucher code not working?"
        content={
          <>
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
          </>
        }
        isOpen={openSection === "codeNotWorking"}
        toggleVisibility={() => toggleVisibility("codeNotWorking")}
      />

      {/* Minimum Order Value */}
      <CollapsibleSection
        title="Do I need to meet a minimum order value to use my voucher code?"
        content={
          <>
            <p className="font-normal">
              The conditions for using voucher codes, including any minimum
              order values, may vary. For more information on the specific
              conditions for your voucher, please visit the{" "}
              <span className="underline">"Vouchers"</span> section in your
              account.
            </p>
          </>
        }
        isOpen={openSection === "minimumOrderValue"}
        toggleVisibility={() => toggleVisibility("minimumOrderValue")}
      />
    </>
  );
};

export default Vouchers;
