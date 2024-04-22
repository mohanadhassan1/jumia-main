 export default function Installment () {
//     <div className=" mx-3 font-normal text-gray">
// //                   <div>
// //                     <h2 className="my-5">Cards</h2>
// //                   </div>
// //                   <label className="flex items-center mr-2">
// //                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="payByCard"
//                       checked={selectedMethods === "payByCard"}
//                       onChange={handleRadioChange}
//                       style={{
//                         border: "0.2rem solid #fff",
//                         ...(selectedMethods === "payByCard"
//                           ? {
//                               outline: "3px solid orange",
//                               accentColor: "orange",
//                             }
//                           : { outline: "3px solid #aaa" }),
//                       }}
//                       className="mx-3 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 checked:bg-orange-500 checked:border-orange-500 font-bold"
//                     />

//                     <span>Pay by Card</span>
//                   </label>
//                   <div className="flex justify-between">
//                     <p className="font-light mx-8 text-sm p-2 details">
//                       Get 10 EGP off on Shipping Fees When You Pay With Your
//                       Card
//                     </p>
//                     <img
//                       className="w-6 h-6 mx-2"
//                       src="https://eg.jumia.is/cms/pay.png"
//                     ></img>
//                   </div>
//                   {selectedMethods === "payByCard" && (
//                     <div
//                       className="mx-3 text-gray p-4 "
//                       style={{ border: "2px solid #aaa", fontSize: "15px" }}
//                     >
//                       <p className="bg-gray-300 font-bold text-[#264996] p-2  m-2 text-lg">
//                         Jumia Pay Balance:EGP 0.00
//                       </p>
//                       <hr></hr>
//                       <p className="p-2 text-sm">
//                         You will be redirected to JumiaPay platform to complete
//                         your purchase, Ensure your payment information is up to
//                         date and that you have the necessary funds.
//                       </p>

//                       {/* popup  */}

//                       <a
//                         href="#"
//                         className=" hover:text-blue-700 text-blue-400 m-4 "
//                         onClick={() => setOpenModal(true)}
//                       >
//                         Details
//                       </a>
//                       <Modal
//                         show={openModal}
//                         onClose={() => setOpenModal(false)}
//                       >
//                         <div
//                           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//                           style={{ fontSize: "13px" }}
//                         >
//                           <div className="bg-white w-full max-w-2xl p-3 mx-2 rounded-lg shadow-lg border-2 border-black">
//                             <Modal.Header>Pay By Card</Modal.Header>
//                             <Modal.Body className="border-2 border-gray-400 mx-3 p-3">
//                               <div className="space-y-1 text-black my-2">
//                                 <p className=" leading-relaxed dark:text-gray-400">
//                                   - You will be redirected to JumiaPay platform
//                                   to complete your purchase, Ensure your payment
//                                   information is up to date and that you have
//                                   the necessary funds. Pay through JumiaPay by
//                                   Credit, Debit, and Prepaid cards or virtual
//                                   credit cards
//                                 </p>
//                                 <p className=" leading-relaxed dark:text-gray-400">
//                                   - You will get a 10 EGP discount on shipping
//                                   fees when you pay via a prepaid method.
//                                 </p>
//                                 <p className=" leading-relaxed  dark:text-gray-400">
//                                   - Some offers may not be eligible for
//                                   JumiaPay-Cards payment Option/discount.
//                                 </p>
//                                 <p className=" leading-relaxed  dark:text-gray-400">
//                                   - We accept select of local and Credit, Debit,
//                                   Prepaid Cards, or virtual credit cards from
//                                   Mastercard and VISA.
//                                 </p>
//                                 <p className=" leading-relaxed  dark:text-gray-400">
//                                   - Please make sure your card has been enabled
//                                   by your bank for online transactions.
//                                 </p>
//                                 <p className=" leading-relaxed  dark:text-gray-400">
//                                   - Please contact our customer service on 19586
//                                   for any concerns or inquiries
//                                 </p>
//                                 <p className=" leading-relaxed  dark:text-gray-400">
//                                   - For the security of your transactions, we
//                                   recommend calling your bank to activate OTP
//                                   service.
//                                 </p>
//                                 <p className="bg-gray-300 font-bold text-[#264996] p-1 text-lg">
//                                   Jumia Pay Balance:EGP 0.00
//                                 </p>
//                               </div>
//                               <hr></hr>
//                               <div className="flex items-center justify-between p-2">
//                                 <aside>
//                                   <p>We accept:</p>
//                                   <img
//                                     className="w-6 h-6 mx-2"
//                                     src="https://eg.jumia.is/cms/Hany_Logos/cash-colour33.png"
//                                   ></img>
//                                 </aside>
//                               </div>
//                             </Modal.Body>
//                             <Modal.Footer className="flex justify-end items-center text-lg p-1 m-0">
//                               <p>powered by: </p>
//                               <img
//                                 className="w-20 h-16 mx-2"
//                                 src="data:image/png;base64,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"
//                               ></img>
//                             </Modal.Footer>
//                           </div>
//                         </div>
//                       </Modal>
//                       <hr />
//                       <div className="flex items-center justify-between ">
//                         <aside className="flex items-center p-1">
//                           <p>powered by: </p>
//                           <img
//                             className="w-25 h-16 mx-2"
//                             src="data:image/png;base64,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"
//                           ></img>
//                         </aside>
//                         <aside className="flex p-1">
//                           <p>We accept:</p>
//                           <img
//                             className="w-15 h-6 mx-2"
//                             src="https://eg.jumia.is/cms/Hany_Logos/CardsEG-1-mastercard-1left.jpg"
//                           ></img>
//                         </aside>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <br />
//                 {/* isatalment */}
//                 <hr />
//                 <div>
//                 </div>
{/* pay by card */}
                
                {/* mobile wallet */}
                {/* <div className=" mx-3 font-normal text-gray">
                  <div>
                    <h2 className="my-5">Mobile Money</h2>
                  </div>
                  <label className="flex items-center mr-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobileMoney"
                      checked={selectedMethods === "mobileMoney"}
                      onChange={handleRadioChange}
                      style={{
                        border: "0.2rem solid #fff",
                        ...(selectedMethods === "mobileMoney"
                          ? {
                              outline: "3px solid orange",
                              accentColor: "orange",
                            }
                          : { outline: "3px solid #aaa" }),
                      }}
                      className="mx-3 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 checked:bg-orange-500 checked:border-orange-500 font-bold"
                    />

                    <div className="flex justify-between w-full">
                      <span> Pay using your mobile wallet</span>

                      <img
                        className="w-6 h-6 mx-2"
                        src="https://eg.jumia.is/cms/pay.png"
                      ></img>
                    </div>
                  </label>

                  {selectedMethods === "MobileMoney" && (
                    <div
                      className="mx-3 text-gray p-4 "
                      style={{ border: "2px solid #aaa", fontSize: "15px" }}
                    >
                      <p className="bg-gray-300 font-bold text-[#264996] p-2  m-2 text-lg">
                        Jumia Pay Balance:EGP 0.00
                      </p>
                      <hr></hr>
                      <p className="p-1 text-sm">
                        - For Contactless Delivery we recommend go cashless and
                        stay safe with JumiaPay.
                      </p>
                      <p className="p-1 text-sm">
                        - We accept payment with Mobile Wallet from all Wallet
                        providers.
                      </p> */}

                      {/* popup  */}
{/* 
                      <a
                        href="#"
                        className=" hover:text-blue-700 text-blue-400 m-4 "
                        onClick={() => setOpenModal(true)}
                      >
                        Details
                      </a>
                      <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                      >
                        <div
                          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                          style={{ fontSize: "13px" }}
                        >
                          <div className="bg-white w-full max-w-2xl p-3 mx-2 rounded-lg shadow-lg border-2 border-black">
                            <Modal.Header>Pay By Card</Modal.Header>
                            <Modal.Body className="border-2 border-gray-400 mx-3 p-3">
                              <div className="space-y-1 text-black my-2">
                                <p className=" leading-relaxed dark:text-gray-400">
                                  -For Contactless Delivery we recommend go
                                  cashless and stay safe with JumiaPay.
                                </p>
                                <p className=" leading-relaxed dark:text-gray-400">
                                  -We accept payment with Mobile Wallet from all
                                  Wallet providers.
                                </p>
                                <p className=" leading-relaxed  dark:text-gray-400">
                                  -Please ensure that the QR code and request to
                                  pay payment service is enabled from your
                                  wallet provider.
                                </p>

                                <p className="bg-gray-300 font-bold text-[#264996] p-1 text-lg">
                                  Jumia Pay Balance:EGP 0.00
                                </p>
                              </div>
                              <hr></hr>
                              <div className="flex items-center justify-between p-2">
                                <p>We accept:</p>
                                <img
                                  className="w-9 h-6 mx-2"
                                  src="https://eg.jumia.is/cms/Hany_Logos/meza-new2.png"
                                ></img>
                              </div>
                            </Modal.Body>
                            <Modal.Footer className="flex justify-end items-center text-lg p-1 m-0">
                              <p>powered by: </p>
                              <img
                                className="w-20 h-16 mx-2"
                                src="data:image/png;base64,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"
                              ></img>
                            </Modal.Footer>
                          </div>
                        </div>
                      </Modal>
                      <hr />
                      <div className="flex items-center justify-between ">
                        <aside className="flex items-center p-1">
                          <p>powered by: </p>
                          <img
                            className="w-25 h-16 mx-2"
                            src="data:image/png;base64,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"
                          ></img>
                        </aside>
                        <aside className="flex p-1">
                          <p>We accept:</p>
                          <img
                            className="w-15 h-6 mx-2"
                            src="https://eg.jumia.is/cms/Hany_Logos/meza-new2.png"
                          ></img>
                        </aside>
                      </div>
                    </div>
                  )}
                </div> */}

}