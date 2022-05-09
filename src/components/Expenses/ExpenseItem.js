import React, { useState } from "react";
// This is required to use the useState function

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  // Hooks must be called inside component functions and not in functions inside component functions

  function clickHandler() {
    setTitle("Updated!");
    console.log(title);
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
