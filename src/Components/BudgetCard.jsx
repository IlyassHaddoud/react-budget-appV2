import { useContext, useState } from "react";
import { BudgetContext } from "../Contexts/BudgetContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import ViewExpensesModal from "./Modals/ViewExpensesModal";

const BudgetCard = ({ title, totalBudget }) => {
  const { handleShowExpense, setProgressBar, getExpenses, getExpensesAmount } =
    useContext(BudgetContext);

  const expenses = getExpenses(title);
  const [showExpenseView, setShowExpenseView] = useState(false);
  const currentExpence = getExpensesAmount(title);
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
      <ProgressBar now={setProgressBar(expenses, totalBudget)} />

      <div className="btns">
        <button onClick={handleShowExpense}>Add Expense</button>
        <button onClick={() => setShowExpenseView(true)}>view Expenses</button>
      </div>
      <ViewExpensesModal
        showExpenseView={showExpenseView}
        setExpenseView={setShowExpenseView}
        name={title}
      />
    </div>
  );
};

export default BudgetCard;
