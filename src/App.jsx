import Budgets from "./Budgets";
import Header from "./Components/Header";
import AddBudgetModal from "./Components/Modals/AddBudgetModal";
import AddExpenseModal from "./Components/Modals/AddExpenseModal";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Budgets />
      <AddBudgetModal />
      <AddExpenseModal />
    </div>
  );
};

export default App;
