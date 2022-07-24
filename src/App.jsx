import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import colors from './tools/colors'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import Button from './components/Buttons'

function App() {
  const randomColor = Math.floor(Math.random() * colors.length)
  const [randomQuote,setRandomQuote]= useState(quotes[Math.floor(Math.random() * quotes.length)])
  const [randomColors, setRandomColors] = useState(randomColor);
  const objAppStyle={color:colors[randomColor], backgroundColor:colors[randomColor]}
  function changeQuote(){
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }
  return (
  <div className="App" style={objAppStyle} >
    <div className='container__main'>
      <QuoteBox cardInfo= {randomQuote}  />
      <div className='container__button' ><Button Buttons={changeQuote}/></div>
    </div>
  </div>     
  )
}

export default App
