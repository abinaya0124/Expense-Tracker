import React,{useContext} from "react";
import { AppContext } from "./Context/AppContext";

const Budget = () => {
    const {budget}=useContext(AppContext)
  return (
    <div className="items-center flex justify-center">
      <div className="flex items-center justify-between bg-blue-500 px-36 py-5 rounded-lg text-white mt-5">
        <p>Budget:</p>
        <p>${budget}</p>
        {/* <button className='bg-blue p-2'>Edit</button> */}
      </div>
    </div>
  );
};

export default Budget;
