import React from "react";

const TrackOrder = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold mb-5">How to Track Your Order</h2>

      <p>
        Tracking your order on Jumia is easy and simple. Here's how to do it:
      </p>

      <div className="pl-5 my-5">
        <p>
          {" "}
          <span className="font-bold">Step 1: </span> Log in to your account
        </p>

        <p>
          {" "}
          <span className="font-bold">Step 2: </span> Click on the "Orders" tab
          in your account dashboard
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 3: </span> Find the order you want to
          track and click on "See Details"
        </p>
      </div>

      <h3 className="font-bold">Step 1: Log in to your Jumia account</h3>
      <p>Access the Jumia website and log in to your account.</p>

      <h3 className="font-bold">
        Step 2: Click on the "Orders" tab in your account dashboard
      </h3>
      <p>In your My Account area, access the Order tab.</p>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1ENHowtoTrack.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold">
        Step 3: Find the order you want to track and click on "See Details”
      </h3>
      <p>
        On the order details page, you can view the current status and a
        complete tracking history, including a link to track the status live.
      </p>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/2ENHowtoTrack.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <p className="my-5">
        Alternatively, you can also track your order by using your package
        number provided in your shipping confirmation email. Simply enter the
        package number into Jumia's{" "}
        <a href="#" className="font-bold text-orange-500">
          {" "}
          PACKAGE TRACKING PAGE
        </a>{" "}
        to view the latest updates on your package.
      </p>

      <p>
        Stay updated on the status of your Jumia order and enjoy a seamless
        shopping experience by following these simple steps.
      </p>

      <h3 className="font-bold my-5"> Delivery timelines:</h3>

      <div className="mb-8">
        <table className="mt-4 w-full border-collapse">
          <thead>
            <tr className="bg-orange-200 dark:bg-gray-600">
              <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                Region
              </th>
              <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                JUMIA EXPRESS
              </th>
              <th className="border border-orange-300 dark:border-gray-700 px-4 py-2">
                STANDARD SHIPPING
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-700">
              <td className="border px-4 py-2">Cairo, Giza, Alexandria</td>
              <td className="border px-4 py-2">1 BUSINESS DAY(S)</td>
              <td className="border px-4 py-2">2 - 3 BUSINESS DAY(S)</td>
            </tr>
            <tr className="bg-orange-100 dark:bg-gray-600">
              <td className="border px-4 py-2">
                Al Sharqia, Qalyubia, Al Daqahliya, Al Beheira, Kafr El-Sheikh,
                Bani Souaif, Al Monufia, Al Gharbia, Suez, Port Said
              </td>
              <td className="border px-4 py-2">2 - 3 BUSINESS DAY(S)</td>
              <td className="border px-4 py-2">2 - 3 BUSINESS DAY(S)</td>
            </tr>
            <tr className="bg-white dark:bg-gray-700">
              <td className="border px-4 py-2">
                North Coast, Sohag, Asyut, Al Meniya
              </td>
              <td className="border px-4 py-2">2 - 4 BUSINESS DAY(S)</td>
              <td className="border px-4 py-2">3 - 4 BUSINESS DAY(S)</td>
            </tr>
            <tr className="bg-orange-100 dark:bg-gray-600">
              <td className="border px-4 py-2">
                Al Fayoum, Luxor, Aswan, Ismailia, Damietta, Qena, South Sinai,
                Red Sea
              </td>
              <td className="border px-4 py-2">2 - 4 BUSINESS DAY(S)</td>
              <td className="border px-4 py-2">3 - 4 BUSINESS DAY(S)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackOrder;
