import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "bg-red-500" : "bg-blue-500";

  return (
    <div className="items-center flex justify-center">
      <div
        className={`flex items-center  justify-between ${alertType} px-36 py-5 rounded-lg text-white mt-5`}
      >
        <p>Remaining:</p>
        <p>${budget - totalExpenses}</p>
      </div>
    </div>
  );
};

export default Remaining;
