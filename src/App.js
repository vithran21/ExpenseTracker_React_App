import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseItems = [
    {
      id: "i1",
      title: "Bike Insurance",
      amount: 2000,
      date: new Date(2024, 0, 21),
    },
    {
      id: "i2",
      title: "Groceries",
      amount: 3200,
      date: new Date(2024, 0, 21),
    },
    {
      id: "i3",
      title: "Movie",
      amount: 1200,
      date: new Date(2024, 7, 28),
    },
    {
      id: "i4",
      title: "Bakery",
      amount: 200,
      date: new Date(2024, 7, 2),
    },
  ];

  const saveExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };

  return (
    <div>
      <NewExpense onNewExpenseSaveHandler={saveExpenseHandler}/>
      <Expenses items={expenseItems}/>
    </div>
  );
}

export default App;
