import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Chart from "../Chart/Chart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* <Chart dataPoints={dataPoints} /> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseFilter
          onSelectedYear={selectedYearHandler}
          selected={selectedYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
