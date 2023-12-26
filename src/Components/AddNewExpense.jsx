import React, { useState, useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddNewExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Name: " + name + " " + "Cost: " + cost);
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <p className="w-28">Name</p>
          <input
            type="text"
            className="bg-slate-300 py-2 px-6 rounded-lg mb-6"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex">
          <p className="w-28">Cost</p>
          <input
            type="text"
            className="bg-slate-300 py-2 px-6 rounded-lg"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button className="bg-lime-300 py-3 px-6 rounded-lg">Add</button>
      </form>
    </div>
  );
};

export default AddNewExpense;
