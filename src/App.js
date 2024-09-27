import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
        date={expenseItems[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
        date={expenseItems[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
        date={expenseItems[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItems[3].title}
        amount={expenseItems[3].amount}
        date={expenseItems[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
