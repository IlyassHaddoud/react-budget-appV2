import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetContext } from "../../Contexts/BudgetContext";

const AddExpenseModal = () => {
  const {
    budgets,
    showExpense,
    handleCloseExpense,
    descriptionRef,
    amountRef,
    budgetRef,
    handleSubmitExpense,
  } = useContext(BudgetContext);

  return (
    <>
      <Modal show={showExpense} onHide={handleCloseExpense}>
        {budgets.length > 0 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Add Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Label htmlFor="inputName">Description</Form.Label>
                <Form.Control
                  ref={descriptionRef}
                  className="mb-3"
                  name="description"
                  type="text"
                  id="description"
                />
                <Form.Label htmlFor="Amount">Amount</Form.Label>
                <Form.Control
                  ref={amountRef}
                  className="mb-3"
                  name="amount"
                  type="number"
                  id="amount"
                />
                <Form.Label htmlFor="Budget">Budget</Form.Label>
                <Form.Select ref={budgetRef}>
                  {budgets.map((budget) => (
                    <React.Fragment key={budget.id}>
                      <option value={budget.name}>{budget.name}</option>
                    </React.Fragment>
                  ))}
                </Form.Select>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSubmitExpense}>
                Add
              </Button>
            </Modal.Footer>
          </>
        )}
        {!budgets.length > 0 && (
          <>
            <Modal.Body>No Available Budgets</Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default AddExpenseModal;
