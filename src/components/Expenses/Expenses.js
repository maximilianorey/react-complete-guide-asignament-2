import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [yearFiltered, setYearFilterd] = useState('')
  
  const yearFilteredHandler = (year) => {
    setYearFilterd(year);
  }

  const expenseInYear = (year) => expense => {
    return new Date(year,0,1) <= expense.date && expense.date < new Date(year + 1 , 0 ,1)
  }

  function filterItems(items){
    if(yearFiltered===''){
      return items
    }
    return items.filter(expenseInYear(yearFiltered))
  }

  return (
    <div>
      <ExpensesFilter onYearFilteredChanged={yearFilteredHandler}/>
      <Card className="expenses">
        {filterItems(props.items).map(({title,amount,date,id} )=>
          <ExpenseItem
            key={id}
            title={title}
            amount={amount}
            date={date}
          />)
        }
      </Card>
    </div>
  );
}

export default Expenses;
