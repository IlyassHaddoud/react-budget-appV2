import { useContext } from "react";
import { BudgetContext } from "../Contexts/BudgetContext";

const Header = () => {
  const { handleShow, handleShowExpense } = useContext(BudgetContext);
  return (
    <div className="header">
      <div className="logo">
        <b>
          <h2>Budget</h2>
        </b>
      </div>
      <nav>
        <button onClick={handleShow}>Add Budget</button>
        <button onClick={handleShowExpense}>Add Expense</button>
      </nav>
    </div>
  );
};

export default Header;
