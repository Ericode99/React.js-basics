import React, { useState } from "react";
// This is required to use the useState function

import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  // Hooks must be called inside component functions and not in functions inside component functions

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expneseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expneseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes.new}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
