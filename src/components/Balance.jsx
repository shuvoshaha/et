import React, { useContext } from 'react';
import { Context } from '../context/GlobalState'

export const Balance = () => {
 const { transactions } = useContext(Context);
 
 const amounts =  transactions.map(transaction => transaction.amount );
 const total = amounts != '' ? amounts.reduce(( acc, item ) => (acc += item )).toFixed(2): "Empty"

 return (
  <>
   <h3 className="balancer-title">Your Balance</h3>
   <p className="balance">${total} </p>
  </>
 )
}
