import React from 'react'

function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{}{sign}${Math.abs(transaction.amount)}</span>
          </li>
  )
}

export default Transaction
