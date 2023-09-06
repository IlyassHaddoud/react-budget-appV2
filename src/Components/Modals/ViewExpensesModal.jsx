import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetContext } from "../../Contexts/BudgetContext";
import { FiDelete } from "react-icons/fi";

const ViewExpensesModal = ({ showExpenseView, setExpenseView, name }) => {
  const { getExpenses, removeExpense } = useContext(BudgetContext);
  const expenses = getExpenses(name);
  return (
    <>
      <Modal show={showExpenseView} onHide={() => setExpenseView(false)}>
        {expenses.length > 0 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>View Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup>
                {expenses.map((ex) => (
                  <ListGroup.Item
                    key={ex.id}
                    className="d-flex justify-content-between"
                  >
                    <div>{ex.description}</div>
                    <div>
                      <FiDelete
                        size={25}
                        color="red"
                        cursor="pointer"
                        onClick={() => removeExpense(name, ex.id)}
                      />
                    </div>
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

export default ViewExpensesModal;
