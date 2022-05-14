import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import classes from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      <Card className={classes.item}>
        <ExpenseDate date={props.date} />
        <div className={classes.description}>
          <h2>{props.title}</h2>
          <div className={classes.price}>${props.amount}</div>
        </div>
        <button className={classes.button} onClick={deleteHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
