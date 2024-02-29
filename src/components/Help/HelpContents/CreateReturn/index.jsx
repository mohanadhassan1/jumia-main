import React, { useState } from "react";

const CreateReturn = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <div className="p-10">
      <h2 className="font-bold">How to Create a Return</h2>

      <p>
        If you're not satisfied with your purchase, Jumia makes it easy for you
        to return your items and receive a refund. To create a return, simply
        follow these easy steps. All items must be in their original condition
        and packaging to be eligible for a return.
      </p>

      <div className="pl-5 my-5">
        <h3 className="font-bold mb-5">Initiate your return:</h3>
        <p>
          {" "}
          <span className="font-bold">Step 1: </span> Log in to your Jumia
          account and go to "{" "}
          <a href="#" className="font-bold text-orange-500">
            {" "}
            ORDERS
          </a>{" "}
          "
        </p>

        <p>
          {" "}
          <span className="font-bold">Step 2: </span> Click on the order of the
          item(s) you want to return
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 3: </span> Select the item(s) you
          want to return and provide a reason for the return
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 4: </span> Choose your preferred
          refund method
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 5: </span> Select the return method
        </p>
        <p>
          {" "}
          <span className="font-bold">Step 6: </span> Review your information
          and submit your return request
        </p>
      </div>

      <div className="my-5">
        {!videoLoaded && (
          <div class=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        )}
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/iVCFqgNISVw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          onLoad={handleVideoLoaded}
          style={{ display: videoLoaded ? "block" : "none" }}
        ></iframe>
      </div>

      <p>
        {" "}
        Please note that items must meet Jumia's return policy guidelines to be
        eligible for a refund.
      </p>
      <div className="pl-5 my-5">
        <h3 className="font-bold">
          {" "}
          Step 1: Log in to your Jumia account and go to "{" "}
          <a href="#" className="font-bold text-orange-500">
            {" "}
            ORDERS
          </a>{" "}
          "
        </h3>

        <p className="mb-5">
          Access the website, log in to your account and go to orders
        </p>

        <h3 className="font-bold">
          Step 2: Click on the order of the item(s) you want to return
        </h3>
      </div>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/1ENHowtorequestReturn.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold ">
        Step 3:Select the item(s) you want to return
      </h3>
      <p>
        {" "}
        provide a reason for the return. Give more details to help us understand
        the issue.
      </p>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/2ENHowtorequestReturn.png"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold ">
        Step 4: Choose your preferred refund method.
      </h3>
      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/3ENHowTorequesteturn.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold ">Step 5: Select the return method</h3>
      <p>
        Select whether you would like to personally drop off the returned item
        or have Jumia pick it up.
      </p>

      <p className="my-5">
        If you choose the "Return on Pickup Station" option, you will have 3
        days to drop off the item at the Pickup Station. If you fail to do so
        within this timeframe, the return will be canceled.
      </p>

      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/4EHoworequestReturn.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <h3 className="font-bold ">
        6: Step Review your information and submit your return request.
      </h3>
      <div className="my-5">
        <img
          src="https://eg.jumia.is/cms/--/desk-Z/5ENHowtorequestReturn.jpg"
          alt=""
          className="w-full rounded"
        />
      </div>

      <div className="my-10">
        <h2 className="font-bold">Return Policy and Guidelines:</h2>
        <p className="my-5">
          {" "}
          You can request a return within the first 14 days from the delivery
          date if you change your mind about a product and if it has not been
          opened except for the following products, for hygiene and security
          reasons: swimwear, underwear, lingerie, accessories, earrings, gold,
          cosmetics, perfumes, Groceries, food supplements, personal care
          products, hair care products, nutritional supplements, software,
          tickets, books, personal care products, health supplies.
        </p>
        <p className="my-5">
          {" "}
          <span className="font-bold"> Note:</span> In case of receiving a
          product with an apparent defect/damage or a product with a wrong
          (color / size /model) or any shortage of product belongings or
          accessories, or damage in the outer package of the product, you must
          make a return or inform us within a maximum 48 hours from the delivery
          date.
        </p>

        <p className="font-bold my-5">
          We trust this information will assist you in managing your orders
          effectively. Happy shopping!
        </p>
      </div>
    </div>
  );
};

export default CreateReturn;
