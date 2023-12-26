import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import SpentSoFar from "./Components/SpentSoFar";
import Expenses from "./Components/Expenses";
import AddNewExpense from "./Components/AddNewExpense";
import { AppProvider } from "./Components/Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <h3 className="font-bold text-lg flex justify-center">
        My Budget Planner
      </h3>
      <Budget />
      <Remaining />
      <SpentSoFar />
      <Expenses />
      <AddNewExpense />
    </AppProvider>
  );
};

export default App;
