const initialStateCounter = {
  counter: 0,
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

export const increase = (num) => {
  return {
    type: 'counter/increase',
    payload: num,
  }
}

export const decrease = (num) => {
  return {
    type: 'counter/decrease',
    payload: num,
  }
}

export const reset = () => {
  return {
    type: 'counter/reset',
  }
}

export default counterReducer
