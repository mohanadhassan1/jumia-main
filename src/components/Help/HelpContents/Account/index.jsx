import React, { useState } from "react";

const Account = () => {
  const [isCreateAccountVisible, setIsCreateAccountVisible] = useState(false);
  const [isChangeAccountInfoVisible, setIsChangeAccountInfoVisible] =
    useState(false);
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [isCloseAccountVisible, setIsCloseAccountVisible] = useState(false);
  const [isSubscribeNewsletterVisible, setIsSubscribeNewsletterVisible] =
    useState(false);
  const [isPhoneLinkedToAccountVisible, setIsPhoneLinkedToAccountVisible] =
    useState(false);

  const toggleCreateAccountVisibility = () => {
    setIsCreateAccountVisible(!isCreateAccountVisible);
  };

  const toggleChangeAccountInfoVisibility = () => {
    setIsChangeAccountInfoVisible(!isChangeAccountInfoVisible);
  };

  const toggleResetPasswordVisibility = () => {
    setIsResetPasswordVisible(!isResetPasswordVisible);
  };

  const toggleCloseAccountVisibility = () => {
    setIsCloseAccountVisible(!isCloseAccountVisible);
  };

  const toggleSubscribeNewsletterVisibility = () => {
    setIsSubscribeNewsletterVisible(!isSubscribeNewsletterVisible);
  };

  const togglePhoneLinkedToAccountVisibility = () => {
    setIsPhoneLinkedToAccountVisible(!isPhoneLinkedToAccountVisible);
  };

  return (
    <>
      {/* How do I create an account on Jumia? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCreateAccountVisibility}
        >
          <h3 className="font-bold">
            How do I create an account on Jumia?
            <span className="absolute right-4 top-2 font-bold">
              {isCreateAccountVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isCreateAccountVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              Creating an account on Jumia is easy and only takes a few steps:
            </p>
            <ol className="list-decimal pl-6">
              <li>Go to the Jumia website or app.</li>
              <li>
                Click on the “My Account” option at the top right corner of the
                page.
              </li>
              <li>
                Select “Sign in” option and you will be directed to the
                registration page.
              </li>
              <li>
                Here, you will be asked to enter a valid email address and a
                secure password.
              </li>
              <li>
                Once you have filled out the required details, click on the
                “Create Account” button at the bottom of the page.
              </li>
            </ol>
            <p>
              If you have any other questions or need help, you can contact
              Jumia’s customer service team for assistance.
            </p>
          </div>
        )}
      </div>

      {/* How do I change my account information? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleChangeAccountInfoVisibility}
        >
          <h3 className="font-bold">
            How do I change my account information?
            <span className="absolute right-4 top-2 font-bold">
              {isChangeAccountInfoVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isChangeAccountInfoVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If you need to change any information on your Jumia account, you
              can do so by following these steps:
            </p>
            <ol className="list-decimal pl-6">
              <li>Log in to your Jumia account.</li>
              <li>
                Go to the "My Account" page and select "Account managment" from
                the menu.
              </li>
              <li>
                Here, you can update and change your personal information,
                contact details, and password.
              </li>
              <li>
                When you're satisfied with the changes, click "Save" to confirm
                the changes.
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* How do I reset my password? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleResetPasswordVisibility}
        >
          <h3 className="font-bold">
            How do I reset my password?
            <span className="absolute right-4 top-2 font-bold">
              {isResetPasswordVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isResetPasswordVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              You can reset your password by following these steps:
            </p>
            <ol className="list-decimal pl-6">
              <li>
                Go to the Jumia website, and click on the “Sign in” button.
              </li>
              <li>Then, click on the “Forgot Password”.</li>
              <li>We will send a 4-digit verification code to your email.</li>
              <li>
                Once you get the code by email please insert the code on Jumia
                platform.
              </li>
              <li>
                You will then be able to submit your password reset and use your
                new password.
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* How do I close my Jumia account? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleCloseAccountVisibility}
        >
          <h3 className="font-bold">
            How do I close my Jumia account?
            <span className="absolute right-4 top-2 font-bold">
              {isCloseAccountVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isCloseAccountVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              We regret to see you go, but understand if you need to close your
              Jumia account. As an alternative, you can place your account on
              hold for later use. If you still choose to close your account,
              here's how:
            </p>
            <ol className="list-decimal pl-6">
              <li>Log in to your Jumia account.</li>
              <li>
                Click on the "Account" menu option in the upper right corner.
              </li>
              <li>Select "Close Account".</li>
              <li>
                Indicate the reason for closing and click on "Close my account".
              </li>
            </ol>
            <p className="font-normal">
              Note: once you submit your request, your account cannot be
              reactivated.
            </p>
          </div>
        )}
      </div>

      {/* How do I subscribe to the Jumia newsletter? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={toggleSubscribeNewsletterVisibility}
        >
          <h3 className="font-bold">
            How do I subscribe to the Jumia newsletter?
            <span className="absolute right-4 top-2 font-bold">
              {isSubscribeNewsletterVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isSubscribeNewsletterVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              To subscribe to Jumia's newsletter, go to the Jumia website.
              Scroll to the bottom of the page and look for the "Subscribe to
              our Newsletter'' section. Enter your email address in the provided
              field and click the "Subscribe" button.
            </p>
          </div>
        )}
      </div>

      {/* What should I do if my phone number is already linked to another Jumia account? */}
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="pt-2 pl-2 underline">Account</p>
        <button
          type="button"
          className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          onClick={togglePhoneLinkedToAccountVisibility}
        >
          <h3 className="font-bold">
            What should I do if my phone number is already linked to another
            Jumia account?
            <span className="absolute right-4 top-2 font-bold">
              {isPhoneLinkedToAccountVisible ? "-" : "+"}
            </span>
          </h3>
        </button>
        {isPhoneLinkedToAccountVisible && (
          <div className="p-4 dark:bg-gray-800">
            <p className="font-normal">
              If the phone number you are trying to use for creating an account
              is already associated with another account, you have two options.
              You can claim the phone number back. To claim it back, follow
              these steps:
            </p>
            <ol className="list-decimal pl-6">
              <li>Go to the "Account Managment" section.</li>
              <li>
                Select "Edit phone number" change the phone number to the
                desired one.
              </li>
              <li>
                Click "Claim this number" and enter the OTP sent to the new
                phone number.
              </li>
              <li>Upon entering the OTP, the phone number will be changed.</li>
            </ol>
            <p className="font-normal">
              If claiming the phone number is not possible, you must use a
              different one to create your account.
            </p>
          </div>
        )}
      </div>

      {/* What should I do if my phone number is already linked to another Jumia account? */}
      {/* Add similar toggler and content as above for "What should I do if my phone number is already linked to another Jumia account?" */}
    </>
  );
};

export default Account;
