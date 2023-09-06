import { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BudgetContext = createContext();

const BudgetContextProvider = ({ children }) => {
  // Budgets
  const [budgets, setBudgets] = useState([]);
  // Budget Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Expense Modal
  const [showExpense, setShowExpense] = useState(false);
  const handleCloseExpense = () => setShowExpense(false);
  const handleShowExpense = () => setShowExpense(true);

  // Expense View Modal
  const [showExpenseView, setShowExpenseView] = useState(false);
  const handleCloseExpenseView = () => setShowExpenseView(false);
  const handleShowExpenseView = () => setShowExpenseView(true);

  // Form
  const nameRef = useRef();
  const maximumSpendingRef = useRef();

  // Expense Form
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const maximumSpending = maximumSpendingRef.current.value;
    setBudgets((budgets) => [
      ...budgets,
      { id: uuidv4(), name, maximumSpending, expenses: [] },
    ]);
    setShow(false);
  };

  const handleSubmitExpense = () => {
    const description = descriptionRef.current.value;
    const amount = amountRef.current.value;
    const budget = budgetRef.current.value;
    const updatedBudget = budgets.map((b) => {
      if (b.name == budget) {
        const expenses = b.expenses;
        return { ...b, expenses: [...expenses, { amount, description }] };
      }
      return b;
    });
    setBudgets(updatedBudget);
    setShowExpense(false);
  };

  const getExpenses = (name) => {
    const budget = budgets.filter((b) => {
      return b.name == name;
    });
    return budget[0].expenses;
  };

  const setProgressBar = (expences, budget) => {
    const sum = expences.reduce((total, ob) => {
      return total + parseInt(ob.amount);
    }, 0);

    console.log(sum);
  };

  useEffect(() => {
    console.log(budgets);
  }, [budgets]);

  return (
    <BudgetContext.Provider
      value={{
        show,
        handleClose,
        handleShow,
        nameRef,
        maximumSpendingRef,
        handleSubmit,
        budgets,
        showExpense,
        handleShowExpense,
        handleCloseExpense,
        descriptionRef,
        amountRef,
        budgetRef,
        handleSubmitExpense,
        getExpenses,
        setProgressBar,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
