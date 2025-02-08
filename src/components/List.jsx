import React from 'react'

import ListItem from './ListItem';

const List = ({transactions, removeTransaction, editTransaction}) => {
    
    
  return (
    <ul className="mt-8 w-full max-w-lg bg-white shadow-lg rounded-xl p-4">
    {
        transactions.map((transaction)=> <ListItem transaction={transaction} key={transaction.id} removeTransaction={removeTransaction} editTransaction={editTransaction} />)
    }
  </ul>
  )
}

export default List
