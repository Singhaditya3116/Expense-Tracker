import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(expense => { 
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  )
}

export default Expenses;