import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("white")

  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black"];

  let mapped = colors.map(item => (
    <button style={{backgroundColor: item, color: "gray"}} onClick={() => changeColor(item)}>{item}</button>
  ))

  function changeColor(prop){
    setColor(prop)
  }
  
  return(
    <>
    {mapped}
    <div style={{width: "300px", height: "300px", backgroundColor: color}}></div>
    </>
  )
}

export default App
