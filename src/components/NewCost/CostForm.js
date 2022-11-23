import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const itemChangeHandler = (event) => {
    setItem(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const resetHandler = (event) => {

  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: item,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setItem("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Item</label>
          <input type="text" value={item} onChange={itemChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Income</button>
          <button type="reset" onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
