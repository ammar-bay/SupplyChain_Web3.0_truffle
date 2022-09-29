import { useContext, useState } from "react";
import CheckoutWizard from "./components/CheckoutWizard";
import Form from "./components/Form";
import Transactions from "./components/Transactions";
import { TransactionContext } from "./context/TransactionContext";

function App() {
  const [step, setStep] = useState(0);
  const { currentAccount, connectWallet, setRole, getAllTransactions } =
    useContext(TransactionContext);

  const handleStep = (index, stepname) => {
    console.log(stepname);
    setRole(stepname);
    setStep(index);
  };

  return (
    <div className="App">
      <div className="flex justify-center items-center">
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            {/* <AiFillPlayCircle className="text-white mr-2" /> */}
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}
      </div>
      <CheckoutWizard step={step} handleStep={handleStep} />

      <div className="inputsCard flex justify-center">
        <Form />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={getAllTransactions}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-indigo-500"
        >
          <p className="text-white text-base font-semibold">
            Get All Transactions
          </p>
        </button>
      </div>
      <Transactions />
    </div>
  );
}

export default App;
