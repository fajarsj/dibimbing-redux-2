import { createStore, combineReducers } from 'redux'
import accountReducer from './features/account/accountSlice'
import customerReducer from './features/customer/customerSlice'
import counterReducer from './features/counter/counterSlice'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
  counter: counterReducer,
})

const store = createStore(rootReducer)

export default store
