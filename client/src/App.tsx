import react from 'react'

import './App.css'
import { 
  GameLoop 
} from './components'


type Game = {
  state: {
    currency: number,
  clickPower: number,
  currencyPerMs: number,
  }
}
const Test = ({state}: Game) => {
  return (
    <p>Test</p>
  )
}


function App() {

  return (
    <div className="App">
      <GameLoop />
    </div>
  )
}

export default App
