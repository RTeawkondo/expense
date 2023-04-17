import ExpenseItem from "./ExpenseItem"
import "./Expense.css"
import Card from "./Card"

export default function Expenses(props){
    const expenses = [
        {
          title: "hehe",
          price: 123,
          date: new Date()
        },
        {
          title: "haha",
          price: 153,
          date: new Date()
        }
      ]
    return (<Card className="expenses">
      {expenses.map((item,index)=>{
        return <ExpenseItem date={item.date} title={item.title} price = {item.price} key={index}/>
      })}
    </Card>)
}