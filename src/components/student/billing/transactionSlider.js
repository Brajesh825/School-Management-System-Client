import { Link } from "react-router-dom";

const TransactionSlider = ({ activeSlider, setActiveSlider }) => {
  return (
    <div className="fee-structure-slider">
      <Link
        href="/students/transaction"
        onClick={() => {
          setActiveSlider("transaction");
        }}
        className={activeSlider === "transaction" ? "active-slider" : ""}
      >
        Transactions
      </Link>
      <Link
        href="/students/transaction"
        onClick={() => {
          setActiveSlider("newTransaction");
        }}
        className={activeSlider === "newTransaction" ? "active-slider" : ""}
      >
        New Transactions
      </Link>
      <Link
        href="/students/transaction"
        onClick={() => {
          setActiveSlider("myTransaction");
        }}
        className={activeSlider === "myTransaction" ? "active-slider" : ""}
      >
        My Transactions
      </Link>
    </div>
  );
};

export default TransactionSlider;
