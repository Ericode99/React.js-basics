import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import classes from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState("");

  // Alternative variant to update the state useing only one state
  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Valid approach
    setEnteredTitle(event.target.value);

    // Alternative approach. Don't use if your state depends on the previous state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // Alternative approach, can also be used if your state depends on the previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const errorHandler = (error) => {
    if (error === "title") {
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.length === 0) {
      setError({ title: "Invalid Title", message: "Please enter a title" });
      return;
    }
    if (enteredAmount.length === 0) {
      setError({
        title: "Invalid Amount",
        message: "Please enter an amount in USD",
      });
      return;
    }
    if (enteredDate.length === 0) {
      setError({
        title: "Invalid Date",
        message: "Please enter a valid date",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const clearError = () => {
    setError("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={clearError}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
