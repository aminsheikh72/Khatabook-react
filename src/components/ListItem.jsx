import React from 'react'
import { Edit, Trash2} from "lucide-react";

const ListItem = ({transaction, removeTransaction, editTransaction}) => {
  return (
    <>
        <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-3 shadow-sm">
      <div>
        <p className="font-semibold text-gray-800">{transaction.text}</p>
        <p className="text-sm text-gray-600">₹{transaction.amount}</p>
      </div>
      <div className="flex gap-3">
        <button onClick={()=> editTransaction(transaction)} className="text-blue-600 hover:text-blue-800">
          <Edit size={20} />
        </button>
        <button onClick={()=> removeTransaction(transaction.id)} className="text-red-600 hover:text-red-800">
          <Trash2 size={20} />
        </button>
      </div>
    </li>
    

    </>
  )
}

export default ListItem
