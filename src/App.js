import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const Initial_Costs = [
  {
    id: "c1",
    date: new Date(2021, 2, 5),
    description: "Refrigerator",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1199.99,
  },
  {
    id: "c3",
    date: new Date(2021, 6, 21),
    description: "Clothes",
    amount: 150.99,
  },
  {
    id: "c4",
    date: new Date(2021, 4, 21),
    description: "Book",
    amount: 300.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(Initial_Costs);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <h1>Lets start React!</h1>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
      <p>
        This is opencode, you can 
        <a href="https://github.com/olhaSlipushchenko/Income_test.git">
          check it here
        </a>
      </p>
    </div>
  );
};

export default App;
