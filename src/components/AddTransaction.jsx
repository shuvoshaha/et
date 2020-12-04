import React from 'react';
import { Context } from '../context/GlobalState'

export const AddTransaction = () => {
 const { dispatch } = React.useContext(Context)
 const [text, setText] = React.useState('');
 const [amount, setAmount] = React.useState('')

 const onSubmitHandler = (e) => {
  e.preventDefault()
  const data = {
   id: Math.floor(Math.random() * 1000),
   text,
   amount: +amount
  }
  dispatch({ type: 'AddItem', AddTransanction: data });
  document.getElementById("reset").reset();
 }
 
 return (
  <>
   <h3>Add new transaction</h3>
   <form onSubmit={onSubmitHandler} id="reset">
    <div className="form-control">
     <label htmlFor="text">Text</label>

     <input
      type="text"
      placeholder="Enter text..."
      onChange={(e) => setText(e.target.value)}
      value={text}
     />
    </div>

    <div className="form-control">
     <label htmlFor="amount">Amount <br />
     (negative - expense, positive - income)
     </label>

     <input
      type="number"
      placeholder="Enter amount..."
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
     />
    </div>
    <input type="submit" className="btn" value="Add Transaction" />
   </form>
  </>
 )
}
