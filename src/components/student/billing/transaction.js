import React, { useState } from "react";
import TransactionSlider from "./transactionSlider";
import AllTransactions from "./AllTransaction/allTransaction";
import MyTransactions from "./MyTransaction/myTransactions";
import NewTransaction from "./NewTransaction/newTransaction";

const StudentTransaction = () => {
  const [slider, setSlider] = useState("transaction");

  const view = () => {
    switch (slider) {
      case "transaction": {
        return <AllTransactions />;
      }
      case "newTransaction": {
        return <NewTransaction/>
      }
      case "myTransaction": {
        return <MyTransactions/>
      }

      default : {
        return <AllTransactions/>
      }
    }
  };

  return (
    <div className="fee-structure-main">
      <TransactionSlider activeSlider={slider} setActiveSlider={setSlider} />
      {view()}
    </div>
  );
};

export default StudentTransaction;
