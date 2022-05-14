import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items
        .sort(function (a, b) {
          let c = new Date(a.date);
          let d = new Date(b.date);
          return d - c;
        })
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={props.onDeleteItem}
          />
        ))}
    </ul>
  );
};
export default ExpensesList;
