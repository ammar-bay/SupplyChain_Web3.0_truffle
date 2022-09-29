import React from "react";

export default function CheckoutWizard({ step, handleStep, }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {[
        "Supplier",
        "Manufacturer",
        "Regulator",
        "Logistics",
        "WholeSaler",
        "Retailer",
        "Consumer",
      ].map((stepname, index) => (
        <div
          key={index}
          className={`flex-1 border-b-2  
          text-center 
       ${
         index === step
           ? "border-indigo-500   text-indigo-500"
           : "border-gray-400 text-gray-400"
       }
          
       `}
        >
          <button onClick={() => handleStep(index, stepname)}>
            {stepname}
          </button>
        </div>
      ))}
    </div>
  );
}
