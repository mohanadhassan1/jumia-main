import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export default function Checkout() {
  const [selectedMethods, setSelectedMethods] = useState({
    cashOnDelivery: false,
    payByCard: false,
    installments: false,
    jumiaPayBalance: false,
    mobileMoney: false,
  });

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedMethods(value); // Set the selected payment method directly
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Payment Methods:", selectedMethods);
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container mx-auto font-normal">
      <div className="flex my-3  parent-container justify-center  ">
        {/* lef side */}
        <div className="w-3/4 p-3 mx-10">
          {/* customer */}
          <div className="mx-2 p-4 bg-white">
            <div className="flex justify-between ">
              <article className="flex items-center pb-2">
                <img
                  className="w-6 h-6 mr-2"
                  src="https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24.png"
                ></img>
                <h2>1.CUSTOMER ADDRESS</h2>
              </article>
              <a className="flex items-center">
                change <IoIosArrowForward />
              </a>
            </div>
            <hr></hr>
            <div className="p-2">
              <h5>Eman Hamed</h5>
              <p>qena | Cairo - Al Rehab 1 | +20 1065062126</p>
            </div>
          </div>
          {/* delivery */}
          <div className="m-2 p-4 bg-white">
            <div className="flex justify-between ">
              <article className="flex items-center pb-2">
                <img
                  className="w-6 h-6 mr-2"
                  src="https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24.png"
                ></img>
                <h2>2.DELIVERY DETAILS</h2>
              </article>

              <a className="flex items-center">
                change <IoIosArrowForward />
              </a>
            </div>
            <hr></hr>
            <div className="p-2 flex items-center justify-between">
              <div>
                <h2>Door Delivery</h2>
                <p>Delivery between 27 February and 28 February</p>
              </div>
              <img
                className="w-6 m-3"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEBAQEBAQEhAQEBAOEBAQEA8RDw8PFREWFxgRFRUZHiggGCYoGxUVITEhJSktLi8uGB80OTQtOCgtLi4BCgoKDg0OGhAQGy0lICUtLS0wLi8tLS0tLS0vLy0tLSstLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAD4QAAIBAQMGCgkEAgIDAAAAAAABAgMEBREGEiExUXETM0FSYXKRsbLRFSIyNFOBgpKhQnODohbBI2Ik8PH/xAAbAQEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADsRAAIBAgEIBgcIAgMAAAAAAAABAgMRBAUSITFBUXGxEzJhgZGhFBUzNMHR8CI1UlOCsuHxBhYjctL/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYMZy2oA+ga+EW1dqHCx5y7UAbAa+Fjzl2ocLHnR7UeXBsBr4WPOXahwsecu1AGwGvhY85dqHCx5y7UAbAa+Fjzl2ocLHnLtQBsBr4WPOXahwkdq7Ueg2A+OEW3uPoAyDCZkAAAAAAAAAAAAAAAAAAApV+XjOpUlHFqEJNKK1Np4YvaRmJut3G1f3J+Jmg+c4ubq1pSnpd3z1FqowUIKMdwABy5kdxtuwZMAZkdwuwABmR3C7AAGZHcLsAAZkdwuwABmR3C7GBus1pnSkpQlmtbNT6GuU0gzi8x3jofZoPJLOVnpL/YK/C04VMMM6KbWxnUR1xP/AMenufiZIn0ihJypRk9bSfkiqVIqM5JbGwADaYAAAAAAAAAAAAAAAHnls4yfXn4maTda+Mn15eJmk+bVvaS4vmWyHVQABqMgAAAAAAAAAAAAAAAAAC75P+7U90vGySIzJ73enul42SZ9FwXu1P8A6x5FWr+1lxfMAA6TUAAAAAAAAAAAAAAAed2rjJ9eXezUbbVxk+vLvZqPmtX2kuL5lsh1UAAazIAAAAAAAAAAAAAAAAAAu2T3u1L6vGxfF6KzxWjOnLHNjyYbWMnvdqX1eNkJlY/+WK2U13sulbEzw+Tac4a82C8UiBp0VVxcoy1XlzNbyitD5YL6TH+RWjavsiRIKx6yxf5kvEl/RaP4F4Et/kNo5y+yJj/IbRtX2RIoD1ji/wAyXiPRaP4V4Ilv8itHOj9iPuGUlZa+Da2ZrWP5IYHqyji/zJeI9Fo/gXgXq7LxhaI4x0SXtReuLO88+sVqlRmpw1rWuRrpLvYbVGtBTjqetcqfKmWrJeUViYZs+utfat6+PyZC4zCOjK66r8uxnUACWOIAAA88tXGT68vEzSbbXxk+vLxM1Hzat7SXFlsh1UAAajIAAAAAAAAAAAAAAAAAAu2T3u1L6vGyEyr46PUXeyayd92p/V4mQmVfHL9td7LZj/uqnwp8kQ2F98n+rmQoAKmTJI3Nd0bRKUZScVGOdow2kx/i9Pnz7EcuSPt1Oou8tRbMk4DDVsLGdSCbu9+8hcZiatOs4xlZaCvvJen8SfYiNvW5JUI58ZOcf1aMHHpLka5wTTTWKawaepo7a2R8LODjGOa9jV9Bzwx9aMk27rcednfc14uzz08XLRNbOlbhfN3uhUwWPByxcHs6HuOAqH/Ng6+6UX9dz5E59jEU96Z6LCSaTTTT0prU0fZV8m7zwaoTevi2+R83yLQXrB4qGJpKpDvW57iu16MqM3F/2AAdRpPO7Xxk+vLxM1G218ZPry8TNR82re0lxZbIdVAAGoyAAAAAAAAAAAAAAAAAALtk77tT+rxsgsquP/jj3sncnfdqf1eNkFlVx/8AHHvZa8f91U+EP2kLhffJ/q5kMACqE0T+SPt1OovEWoquSPt1Oou8tReMh+5R4vmyvZQ9u+C5AAEscRyW+yRr03CXLpT5Yy5GijWmzypTlCSwcXhv6UeiELlBdvDQz4L/AJILR/2WwhcsZP8ASKfSQ68fNbuK2eB34HFdFLNlqfkyop4af/qLncd4cPT0v14aJdOyRTDsui18DVjL9LeE9z/9x+RXslY30esrv7MtD+D7uVyUxuH6Wn2rV8u8veIMaNqBe9BW9B59bOMn15+Jmk3W3janXn4maT5rW9pLi+ZbYdVAAGsyAAAAAAAAAAAAAAAAAALtk77tT+rxsgsquP8A4497J3J33an9XjZBZVcf/HHvZa8f91U+EP2kNhffJ/q5kMACqEyS+Ttsp0ZTdSWanBJPBvF49BP+nLN8T+svIpIJbC5XrYakqcIxsr677e9HHWwMKs8+Tf13F29OWb4n9ZeQ9OWb4n9ZeRSQb/8AYMR+GPg/mavVdLe/L5F19O2b4n9ZeQd/Wb4n9ZeRSgP9gxOyMfB/+h6spb35fI67zlTdWUqTxhLTqawb1rScrMAha1TpJSna17vRq0khTjmpR3Fhxe1mT5BbCukLbeNqdefiZpN9v42r15+Jmgqlb2kuL5lhh1UAAazIAAAA+lFvUm9wlBrWsN6aPe0XPkGTB4AAAAAAAAAC7ZO+7U/q8bILKrj/AOOPeydyd92p/V42QWVXH/xx72WvH/dVPhD9pDYX3yf6uZDAAqhMgA+km9Sx3aQD5B9ypyWuMlvTR8Hr0BaQADwAAHjPVrLAAC4FaIa38bV/cn4maDfb+Nq/uT8TNBVKvtJcWWKGoAG2y2eVWcYR1yeHQulmMYuTSWtnraSuzZYbFOvLNgt7eqK2tlosNw0aaTks+XK37PyidtgscKEFCO9vlk9rNd4XlToL1ni3qitbLhhMmUMJT6SvZy2t6l2L563s0EFXxdSvLMp6uzWzrhTUdCSS2JJH1KKetYlSr5SVpP1YqC3Zz7X5GKOUdaL9bMkulYPtRs9e4RPNTduGjw1+Rj6urWvo8SdtlzUaqfq5sudHBPs1Mq953bOzv1tMX7M1qfQ9jLPdt707Ro9mfNfLufKdtejGpFwksYvWjzE4DDY6n0lKyexrk/jtQpYmrh55s723P4HnoOu9LE6FRxelfpe1HIU6rSlSm4TVmtBPQmppSjqYABrMgAAC65Pe7U90vGyDyq4/+OPeT1we7Ut0vGyByq4/+OPeWzKKtkumuyHIhcJ73P8AVzIc2WazzqyUILGT/C2vYfEIOTSSxbaSW1su11XfGhDDXJ6Zy2vZuIXJuT5Yub2RWt/Bdr8jvxeKVCPa9S+JyXfk9Tgk6nry2foXy5fmS9OlGKwilFdCSNVstkKEc6bwXIuWT2JFdtOUk2/UiorkctMvJFolWwWT0oqye5K77382Q6p18U76/JfXAtbOC13VRqp50Entjof41lep5RWhPTmS6HHDuJm7b9hWajJZk3qTeKk+hmNPKeDxb6OW3ZJaH43V/Pcezwlej9teTIG9rmnQ9ZetT52GmO9f7Iw9FnBNNNYprBp6mimX3dvAVNHFz0x6HyohcrZKVBdLS6u1bv45cNUhgsa6jzJ6+ZGgAgGSa1lgABcCtEXetmlSqzUlreMXtxeOKOM9AtNmp1VhOKklp08m40ehrP8ACXbLzObEZAqTqSlCas3fTe+ngjupZTgoJSTv2WKMWTJOy+3Vf7ce9vuJN3LZvhL7p+Z1WWzQpRzYRzY68MW9L3m3J+RqmHrqpUaaWq19fh9M14rHwq03CCenkYttoVKnKb1RWOG18i7SiWmvKrJzk8ZS07uhFpyqlhQS21Ip/bJ/6KicmX68nWjS2JX73/BvyZSSpue1u3cAAV8kzMJOLTTaaeKa1pl3ua28PSUn7S9WXWKQWHI+WmsuTCD+ekmch4iUMSqeyV0+5Np+XmcGUaSlSztqO3Kiy59HPWum8fpeh/6fyKgeiVaanFxksYyTTW1M4vQlm+Gvun5ktlPJE8TVVSm0tGm99nBbjiwmOjRhmSTenYUgF39CWf4a+6fmPQlm+Gvun5kd/r2I/FHz+R1etKW5+XzKQZSbaS0t6Elrb2F29CWb4S+6fmbqF30aemFOKe3DF9rMo/49Wb+1ONu9/BHksqU7aIvy+Yu2i6dGnB61HT0PWQeVVklnRrLTHBQl/wBWnof5LQfE4prBrFPQ0+UsOKwca+H6G9tCs+Gr+SLo15U6vSePeVPJazZ9Vza0U1o3vQvxiWqpNRTk3goptvYkfFmslOlnZkVHOeLw2nJf882zVMOVJfJySNOFoeg4Rp2bSk32v+reBnWqek1lsTsip3jbZV6jnLVqjHYthygFHqVJVJOcndvSyxxioqy1AyYBgZFxydt7rU3GTxnTwTfOT1P8YG++rKqtGaw0pZy3rT5r5kBktNqvhySg0/lgy3NYl4ybU9KwVqmnXF9v82K5i4dDXvDsZ5yZp05TajFYyk8ElrZdlc9n+FH+3mbrNYqVN4wpxi9WKWnDeREP8dq3WfNW22vfuud0sqQt9mLv9dpH+i6m1dpgm8AWX0anufj/AARPSyMgA6DWAAARWUVndShLDXBqp8lr/DZSz0hrEqF9XLKm3Omsab04LXDo3Fay7gZzarwV9Fn8H8HuJbJ2JjFOnLu+RDAyYKtdEyC05J2dqE6j/W0lujjp7X+CGuq6p2hp4ONPHTN8q2LaXShSUIqMVhGKSS6Cx5DwM+k9ImrJau1vRfhbnoInKOJjm9FHXt7Pp2NoALWQwAAAAAAAAAOK9aDq0akFrcdG9aV3HaYZjOCnFxepq3iexk4tNbDzjAwWG/rmli6tJYp6ZQWtPalylfPnmLwk8LUzJ9z2Ph9aC0Ua8a0c6P8AX15mADru676lolhFaP1TeqPnuNNOnKpJQgrt7EZzkoLOk7IlMk6GM51OSMcxb28e5fktKOexWaNGChHUuXlb5WzpL/gML6NQjTevW+LK1ia3TVHMAA7DQAAAAAAAAADGBkAHDWuujN4ypQb2pZre/AxSumzxeKpRx6cZd53g0+j0r52Yr8EbOlqWtnO3FmEjIBuNYAAAAAAAAAAAAAABg5LTYKVTTOnFvbhg+1aTsBjKEZq0lddunmeptO6ZHRuazp4qlH5uTXY2dtOCikkkktSWhI2AxhShT6kUuCSPZTlLrNsAA2GIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
            </div>
          </div>
          {/* payment method */}
          <div className="bg-white m-2 p-4">
            <header className="flex items-center pb-2">
              <img
                className="w-6 h-6 mr-2"
                src="https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24.png"
              ></img>
              <h2>3.PAYMENT METHOD</h2>
            </header>
            <hr />

            <form onSubmit={handleSubmit}>
              <div className=" mx-3 font-normal text-gray">
                <div>
                  <h2 className="my-5">Payment on delivery</h2>
                </div>
                <label className=" flex items-center mr-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={selectedMethods === "cashOnDelivery"}
                    onChange={handleRadioChange}
                    style={{
                      border: "0.2rem solid #fff",
                      ...(selectedMethods === "cashOnDelivery"
                        ? { outline: "3px solid orange", accentColor: "orange" }
                        : { outline: "3px solid #aaa" }),
                    }}
                    className="mx-3 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 checked:bg-orange-500 checked:border-orange-500 font-bold"
                  />
                  <span>Cash On Delivery</span>
                </label>
                <div className="flex justify-between">
                  <p className="font-light mx-8 text-sm p-2 details">
                    For more secure and contactless delivery and to get a 10 EGP
                    discount we recommend using Pay by Card
                  </p>
                  <img
                    className="w-6 h-6 mx-2"
                    src="https://eg.jumia.is/cms/Cash.png"
                  ></img>
                </div>

                {selectedMethods === "cashOnDelivery" && (
                  <div
                    className="mx-3 text-gray p-4 "
                    style={{ border: "2px solid #aaa", fontSize: "15px" }}
                  >
                    <p>
                      - When you choose Cash on delivery, you can pay for your
                      order in cash when you receive your shipment at home or
                      Jumia’s pick-up stations.
                    </p>
                    <p>
                      - Enjoy 10 EGP discount when you pay via prepaid method.
                    </p>
                    {/* popup  */}

                    <a
                      href="#"
                      className=" hover:text-blue-700"
                      onClick={() => setOpenModal(true)}
                    >
                      details
                    </a>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                      <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        style={{ fontSize: "12px" }}
                      >
                        <div className="bg-white w-full max-w-2xl p-3 mx-2 rounded-lg shadow-lg border-2 border-black">
                          <Modal.Header>Cash On Delivery</Modal.Header>
                          <Modal.Body className="border-2 border-gray-400 mx-3 p-3" >
                            <div className="space-y-1 text-black my-2">
                              <p className=" leading-relaxed dark:text-gray-400">
                                - When you choose Cash on delivery, you can pay
                                for your order in cash when you receive your
                                shipment at home or Jumia’s pick-up stations.
                              </p>
                              <p className=" leading-relaxed dark:text-gray-400">
                                - Enjoy 10 EGP discount when you pay via prepaid
                                method.
                              </p>
                              <p className=" leading-relaxed  dark:text-gray-400">
                                - Egyptian pounds are accepted only.
                              </p>
                              <p className=" leading-relaxed  dark:text-gray-400">
                                - Please provide the specified amount only when
                                paying for the possibility that there will be
                                enough cash with the delivery representative if
                                a value is paid higher than the requested one.
                              </p>
                              <p className=" leading-relaxed  dark:text-gray-400">
                                - You must pay for the product before opening
                                the shipment.
                              </p>
                              <p className=" leading-relaxed  dark:text-gray-400">
                                - In case the product is returned, the available
                                refund methods are (refund voucher - postal
                                transfer).
                              </p>
                            </div>
                            <hr></hr>
                          <div className="flex items-center justify-between p-2">
                            <p>We accept:</p>
                            <img
                              className="w-6 h-6 mx-2"
                              src="https://eg.jumia.is/cms/Hany_Logos/cash-colour33.png"
                            ></img>
                          </div>
                          </Modal.Body>
                          
                        </div>
                      </div>
                    </Modal>

                    {/* popup */}
                    <hr />
                    <div className="flex items-end justify-end m-2">
                      <p>We accept:</p>
                      <img
                        className="w-6 h-6 mx-2"
                        src="https://eg.jumia.is/cms/Hany_Logos/cash-colour33.png"
                      ></img>
                    </div>
                  </div>
                )}
              </div>
              <br />

              <div className="flex items-center mx-3">
                <label className="flex items-center mr-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="payByCard"
                    checked={selectedMethods === "payByCard"}
                    onChange={handleRadioChange}
                    style={{
                      border: "0.2rem solid #fff",
                      ...(selectedMethods === "payByCard"
                        ? { outline: "3px solid orange", accentColor: "orange" }
                        : { outline: "3px solid #aaa" }),
                    }}
                    className="mr-2 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 checked:bg-orange-500 checked:border-orange-500"
                  />

                  <span>Pay by Card</span>
                </label>
              </div>
              <br />

              {/* Repeat similar structure for other payment options */}

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        {/* right side */}
        <div
          className="w-1/4 p-2 ml-2 bg-white  font-bold  sticky top-20 shadow-lg rounded-lg mx-auto"
          style={{ height: "fit-content" }}
        >
          <h2 className="text-lg font-bold ">Order summary</h2>
          <hr></hr>
          <div className="flex justify-between m-2">
            <h5>items total </h5>
            <h3> EGY</h3>
          </div>
          <div className="flex justify-between m-2">
            <h5>delivery fees </h5>
            <h3> EGY 35.00</h3>
          </div>
          <div className="flex justify-between m-2">
            <h5> total </h5>
            <h3> EGY</h3>
          </div>
          <hr></hr>
          <button
            className="button bg-gray-600 w-full text-white my-2 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="button"
          >
            Confirm Order
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
