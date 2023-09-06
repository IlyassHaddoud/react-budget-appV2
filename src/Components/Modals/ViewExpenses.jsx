import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetContext } from "../../Contexts/BudgetContext";

const ViewExpenses = ({ expenses }) => {
  const { showExpenseView, handleCloseExpenseView } = useContext(BudgetContext);
  return (
    <>
      <Modal show={showExpenseView} onHide={handleCloseExpenseView}>
        {expenses.length > 0 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>View Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup>
                {expenses.map((ex) => (
                  <ListGroup.Item>
                    {ex.description} | {ex.amount}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Modal.Body>
          </>
        )}
        {!expenses.length > 0 && (
          <>
            <Modal.Body>
              <ListGroup>
                <ListGroup.Item>No Available Expenses.</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default ViewExpenses;
