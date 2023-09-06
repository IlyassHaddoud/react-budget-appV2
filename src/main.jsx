import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BudgetContextProvider from "./Contexts/BudgetContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BudgetContextProvider>
    <App />
  </BudgetContextProvider>
);
