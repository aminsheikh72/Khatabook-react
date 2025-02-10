import React, { useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'

const Form = ({addTransaction, edit, updateTransaction}) => {

  const[text, setText]= useState("")
  const[amount, setAmount]= useState("")
  
  

  const handle=(e)=>{

    e.preventDefault()
    if(edit.isEdit){
      updateTransaction(edit.transaction.id, text, amount)
    }
    else{
      addTransaction(amount, text)
    }
    setAmount("")
    setText("")

  }

  useEffect(()=>{
setAmount(edit.transaction.amount)
setText(edit.transaction.text)

  },[edit])

  return (
    <form className=' w-[100%] flex items-center justify-center' onSubmit={(e)=> handle(e)}>
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
    <div className="flex flex-col gap-4">
      <input
      onChange={(e)=> setAmount(e.target.value)}
        type="number"
        value={amount}
        placeholder="Enter Total Income"
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        onChange={(e)=> setText(e.target.value)}
        value={text}
        placeholder="Enter Expense Details"
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg flex items-center gap-2 w-full justify-center shadow-md hover:shadow-lg transition-all">
        <PlusCircle size={20} /> <span className="font-semibold">{edit.isEdit === true ? "Update Entry" : "Add Entry" }</span>
      </button>
    </div>
  </div>
  </form>
  )
}

export default Form
