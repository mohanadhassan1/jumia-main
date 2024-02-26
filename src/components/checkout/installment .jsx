import React from 'react'
import { useState } from 'react';

export default function Installment () {
    const [selectedOption, setSelectedOption] = useState("");

    const installmentOptions = [
        "0% Down Payment 0% Interest 0% Admin fees over 3 Months with Aman",
        "0% Interest over 18 Months with 17.25% Admin Fees on AlexBank Credit Card Installments",
        "0% Interest over 6 Months with 6% Admin Fees on AlexBank Credit Card Installments",
        "0% Interest over 12 Months with 11% Admin Fees on AlexBank Credit Card Installments",
        "0% installment for 9 months with admin fees using Banque Misr credit cards",
        "0% installment for 6 months with admin fees using Banque Misr credit cards",
        "Installments with valU (for valU customers only)",
        "installment with interest for 6 months with aiBANK",
        "installment with interest for 12 months with aiBANK",
        "Installment for 6 months with interest using Attijariwaffa bank credit cards",
        "Installment for 12 months with interest using Attijariwaffa bank credit cards",
        "FABMISR Credit Card Installment 12 Months with Interest",
        "Install with your Mashreq Bank credit card over 6 months with interest",
        "Install with your Mashreq Bank credit card over 12 months with interest",
        "Installments with interest over 18 months with aiBANK",
        "JumiaPay with Fawry",
        "Installments with AUB bank",
        "Installments with Interest over 6 Months with QNB ALAHLI",
        "Installments with Interest over 9 Months with QNB ALAHLI",
        "Installments with interest over 12 months with QNB ALAHLI",
        "Installments with Interest over 18 Months with QNB ALAHLI",
        "Installments with Interest over 24 Months with QNB ALAHLI",
        "Installments with Interest over 30 Months with QNB ALAHLI",
        "Installments with Interest over 36 Months with QNB ALAHLI"
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4"> Installment </h1>
            <form>
                {installmentOptions.map((option, index) => (
                    <div key={index} className="mb-4 flex items-center ">
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="installmentOption"
                            value={option}
                            checked={selectedOption === option}
                            style={{
                                border: "0.2rem solid #fff",
                                ...(selectedOption === option
                                  ? { outline: "3px solid orange", accentColor: "orange" }
                                  : { outline: "3px solid #aaa" }),
                              }}
                            onChange={handleOptionChange}
                            className="mx-3 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 checked:bg-orange-500 checked:border-orange-500 font-bold"

                        />
                        <label htmlFor={`option-${index}`}
                        className='p-2  m-3 flex w-full justify-between'>{option}
                        <img  className="w-6 h-6" src='https://eg.jumia.is/cms/pay.png'></img></label>
                        <hr></hr>
                    </div>
                ))}
            </form>
            
        </div>

  )
}

