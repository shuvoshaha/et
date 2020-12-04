import React from 'react';
import { Context } from '../context/GlobalState'

export const AddTransaction = () => {
 const { dispatch } = React.useContext(Context)
 const [text, setText] = React.useState('');
 const [amount, setAmount] = React.useState('');

 const date = new Date().getDay();

 console.log(date)

 const onSubmitHandler = (e) => {
  e.preventDefault()
  document.getElementById("reset").reset();
  
  const data = {
   id: Math.floor(Math.random() * 1000),
   text,
   amount: +amount,
  }
  dispatch({ type: 'AddItem', AddTransanction: data });
  
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
     
     />
    </div>

    <div className="form-control">
     <label htmlFor="amount">Amount <br />
     (negative - expense, positive + income)
     </label>

     <input
      type="number"
      placeholder="Enter amount..."
  
      onChange={(e) => setAmount(e.target.value)}
     />
    </div>
    <input type="submit" className="btn" value="Add Transaction" />
   </form>
  </>
 )
}
