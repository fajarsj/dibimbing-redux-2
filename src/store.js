import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/account/accountSlice'
import customerReducer from './features/customer/customerSlice'
import counterReducer from './features/counter/counterSlice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    counter: counterReducer,
  },
})

export default store
