import React,{useContext} from "react";
import { AppContext } from "./Context/AppContext";

const Expenses = () => {
//   const expenses = [
//     { id: 1, name: "Travel", cost: 2000 },
//     { id: 2, name: "Car Service", cost: 200 },
//     { id: 3, name: "Grocery", cost: 250 },
//   ];
  const {expenses, dispatch}=useContext(AppContext)

  const handleDelete=(id)=>{
    dispatch({
        type:"DELETE_EXPENSE",
        payload:id,
    })
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <input type="text" />

        <div >
          {expenses.map((item, id) => (
            <div className="flex justify-evenly border-2 p-2 mb-2" key={id}>
              <p>{item.name}</p>
              <div className="flex gap-5">
                <p>${item.cost}</p>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
