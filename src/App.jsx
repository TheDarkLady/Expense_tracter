import { useState } from 'react'
import Heading from './components/Heading'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/transactionsList'
import AddTransaction from './components/AddTransaction'
import './App.css'
import { GlobalProvider } from './context/GlobalState'
function App() {

  return (
    <GlobalProvider>
      <Heading />
      <div className="comtainer">
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
