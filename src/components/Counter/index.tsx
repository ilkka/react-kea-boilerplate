import { useActions, useValues } from 'kea'
import React from 'react'
import { counterLogic } from './counterLogic'
import './style.css'

export const Counter = () => {
  const { count } = useValues(counterLogic)
  const { incrementCounter } = useActions(counterLogic)

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={incrementCounter}>Add</button>
    </div>
  )
}
