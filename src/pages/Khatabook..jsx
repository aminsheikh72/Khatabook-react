import React, { useState } from "react";

import Form from "../components/Form";

import Boxes from "../components/Boxes";
import List from "../components/List";

const KhatabookUI = () => {
  const [transactions, setTransactions] = useState([
 ]);

 const [edit, setEdit]= useState({
  transaction : {}, isEdit : false
 })

 const addTransaction=(amount, text)=>{
 setTransactions([{id: crypto.randomUUID() ,text: text,  amount : parseInt(amount)}, ...transactions]);  
 }

 const editTransaction=(oldTransaction)=>{
  setEdit({transaction : oldTransaction, isEdit : true});
 }
 const updateTransaction=(oldId, newText, newAmount)=>{
setTransactions(transactions.map((transaction)=> transaction.id === oldId ? {id: oldId  ,amount : Number(newAmount), text : newText} : transaction))
setEdit({ transaction : {}, isEdit : false})

 }


 const removeTransaction=(oldId)=>{
setTransactions(transactions.filter((transaction)=> transaction.id !== oldId ? true : false))

 }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[url(/public/images/bg.avif)] bg-cover bg-center p-6 flex flex-col items-center">
    
      <h1 className="text-4xl font-extrabold text-white text-center mb-5">
        Khatabook Dashboard
      </h1>
      

      <Form addTransaction={addTransaction} edit={edit} updateTransaction={updateTransaction} />

      <Boxes transactions={transactions} />

      <List transactions={transactions}removeTransaction={removeTransaction} editTransaction={editTransaction}  />
    </div>
  );
};

export default KhatabookUI;
