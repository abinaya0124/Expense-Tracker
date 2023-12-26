import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const SpentSoFar = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="items-center flex justify-center">
      <div className="flex items-center justify-between bg-blue-500 px-36 py-5 rounded-lg text-white mt-5">
        <p>Spent So Far:</p>
        <p>${totalExpenses}</p>
      </div>
    </div>
  );
};

export default SpentSoFar;
