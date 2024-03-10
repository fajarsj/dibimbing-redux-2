import { createStore, combineReducers } from 'redux'

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: 0,
}

const initialStateCustomer = {
  fullname: '',
  nationalId: '',
  createdAt: '',
}

const initialStateCounter = {
  counter: 0,
}

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/requestLoan':
      if (state.loan > 0) {
        return state
      } else {
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        }
      }
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      }
    default:
      return state
  }
}

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      }
    case 'customer/updateName':
      return {
        ...state,
        fullname: action.payload,
      }
    default:
      return state
  }
}

const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case 'counter/increase':
      return { ...state, counter: state.counter + action.payload }
    case 'counter/decrease':
      return { ...state, counter: state.counter - action.payload }
    case 'counter/reset':
      return { ...state, counter: 0 }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
  counter: counterReducer,
})

const store = createStore(rootReducer)

const deposit = (amount) => {
  return { type: 'account/deposit', payload: amount }
}
const withdraw = (amount) => {
  return { type: 'account/withdraw', payload: amount }
}
const requestLoan = (amount, purpose) => {
  return {
    type: 'account/requestLoan',
    payload: { amount: amount, purpose: purpose },
  }
}
const payLoan = () => {
  return { type: 'account/payLoan' }
}

const createCustomer = (fullname, nationalId) => {
  return {
    type: 'customer/create',
    payload: {
      fullname: fullname,
      nationalId: nationalId,
      created: new Date().toISOString(),
    },
  }
}

const updateName = (name) => {
  return {
    type: 'customer/updateName',
    payload: name,
  }
}

const increase = (num) => {
  return {
    type: 'counter/increase',
    payload: num,
  }
}

const decrease = (num) => {
  return {
    type: 'counter/decrease',
    payload: num,
  }
}

const reset = () => {
  return {
    type: 'counter/reset',
  }
}

// store.dispatch({ type: 'account/deposit', payload: 5000 })
// store.dispatch({ type: 'account/deposit', payload: 5000 })
// store.dispatch({ type: 'account/withdraw', payload: 2000 })
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 10000, purpose: 'Beli es teh' },
// })
// store.dispatch({ type: 'account/payLoan' })

store.dispatch(deposit(5000))
store.dispatch(deposit(5000))
store.dispatch(withdraw(2000))
store.dispatch(requestLoan(10000, 'Beli es teh'))
store.dispatch(payLoan())

console.log(store.getState())

// store.dispatch({
//   type: 'customer/create',
//   payload: {
//     fullname: 'Fajar Saputro J',
//     nationalId: '123123123',
//     created: new Date().toISOString(),
//   },
// })

store.dispatch(createCustomer('Fajar Saputro J', '12312312'))
store.dispatch(updateName('Fajar Saputro Juliantoro'))

console.log(store.getState())

// store.dispatch({ type: 'counter/increase', payload: 1 })
// store.dispatch({ type: 'counter/increase', payload: 1 })
// store.dispatch({ type: 'counter/decrease', payload: 1 })
// store.dispatch({ type: 'counter/reset', payload: 1 })

store.dispatch(increase(1))
store.dispatch(increase(1))
store.dispatch(decrease(1))
store.dispatch(reset())

console.log(store.getState())
