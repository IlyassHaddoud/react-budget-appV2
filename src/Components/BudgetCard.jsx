import { useContext, useState } from "react";
import { BudgetContext } from "../Contexts/BudgetContext";

const BudgetCard = ({ title, currentExpence, totalBudget, setProgressBar }) => {
  const [progress, setProgess] = useState(0);
  const { handleShowExpense, getExpenses } = useContext(BudgetContext);

  return (
    <div className="budgetCard">
      <div className="info">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <b>${currentExpence}</b>/{totalBudget}
        </div>
      </div>
      <progress value={progress} max="100" />

      <div className="btns">
        <button onClick={handleShowExpense}>Add Expense</button>
        <button onClick={() => console.log(getExpenses(title))}>
          view Expenses
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;
