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
import { Provider } from 'react-redux'

store.dispatch(deposit(5000))
store.dispatch(withdraw(2000))
store.dispatch(requestLoan(10000, 'Buat beli es teh'))
store.dispatch(payLoan())
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
