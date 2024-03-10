import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { deposit } from './features/account/accountSlice'

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { balance } = account

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{balance}</p>
        <button onClick={() => dispatch(deposit(5000))}>Add 5000</button>
      </header>
    </div>
  )
}

export default App
