import React from 'react'

const Boxes = ({transactions}) => {

  let income = transactions.filter((item)=> item.amount > 0).reduce((p,c)=> p + c.amount, 0)
  let expense = transactions.filter((item)=> item.amount < 0).reduce((p,c)=> p + c.amount, 0)
  let balance = income + expense;
  
  
  
  
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-lg">
        <div className="bg-green-500 p-5 rounded-lg text-center shadow-md text-white">
          <h2 className="text-lg font-semibold">Income</h2>
          <p className="text-2xl font-bold">₹{income}</p>
        </div>
        <div className="bg-red-500 p-5 rounded-lg text-center shadow-md text-white">
          <h2 className="text-lg font-semibold">Expense</h2>
          <p className="text-2xl font-bold">₹{expense}</p>
        </div>
        <div className="bg-yellow-500 p-5 rounded-lg text-center shadow-md text-white">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold">₹{balance}</p>
        </div>
      </div>
  )
}

export default Boxes
