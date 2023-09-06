import { useContext } from "react";
import BudgetCard from "./Components/BudgetCard";
import { BudgetContext } from "./Contexts/BudgetContext";

const Budgets = () => {
  const { budgets } = useContext(BudgetContext);
  return (
    <div className="budgets">
      {budgets.length > 0 && (
        <>
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              title={budget.name}
              currentExpence={0}
              totalBudget={budget.maximumSpending}
            />
          ))}
        </>
      )}
      {!budgets.length > 0 && "No Budgets Found."}
    </div>
  );
};

export default Budgets;
