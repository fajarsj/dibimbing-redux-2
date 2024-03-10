import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store'
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from './features/account/accountSlice'

store.dispatch(deposit(5000))
store.dispatch(deposit(500))
store.dispatch(withdraw(500))
store.dispatch(requestLoan(10000, 'Beli es teh'))
store.dispatch(payLoan())
console.log(store.getState())
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
