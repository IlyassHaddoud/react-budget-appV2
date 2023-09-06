import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetContext } from "../../Contexts/BudgetContext";

const AddBudgetModal = () => {
  const { show, handleClose, nameRef, maximumSpendingRef, handleSubmit } =
    useContext(BudgetContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label htmlFor="inputName">Name</Form.Label>
            <Form.Control
              ref={nameRef}
              className="mb-3"
              name="name"
              type="text"
              id="Name"
            />
            <Form.Label htmlFor="inputMaxuminSpending">
              Maximum Spending
            </Form.Label>
            <Form.Control
              ref={maximumSpendingRef}
              className="mb-3"
              name="maximumSpending"
              type="number"
              id="inputMaxuminSpending"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBudgetModal;
