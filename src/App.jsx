import { useState } from 'react'
import Heading from './components/Heading'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/transactionsList'
import AddTransaction from './components/AddTransaction'
import './App.css'
function App() {

  return (
    <>
      <Heading />
      <div className="comtainer">
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App
