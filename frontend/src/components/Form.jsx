import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2  bg-transparent text-black border-none text-sm white-glassmorphism"
  />
);

const Form = () => {
  const { formData, sendTransaction, handleChange } =
    useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { message, entityname, productid } = formData;

    e.preventDefault();
    console.log(formData);
    if (!entityname || !productid || !message) return alert("Please fill all");

    sendTransaction();
  };
  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism border-solid border-4">
      <Input
        placeholder="Enity Name"
        name="entityname"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Product ID"
        name="productid"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Message"
        name="message"
        type="text"
        handleChange={handleChange}
      />
      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {/* {isLoading ? (
    <Loader />
  ) : ( */}
      <button
        type="button"
        onClick={handleSubmit}
        className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-indigo-500 hover:text-white rounded-full cursor-pointer"
      >
        Submit
      </button>
      {/* )} */}
    </div>
  );
};

export default Form;
