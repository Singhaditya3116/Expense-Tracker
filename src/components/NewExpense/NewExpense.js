import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) => {

  const [isFormVisible,setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  }

  const toggleForm = () =>{
    setIsFormVisible(true);
  }

  const cancelHandler = () =>{
    setIsFormVisible(false);
  }

  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={cancelHandler}
        />) : (
          <button onClick={toggleForm}>Add New Expense</button>
        )
      }
    </div>
  )
}

export default NewExpense;