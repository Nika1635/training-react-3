import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])

  function formsub(form){
    let getinfo = form.get("text")
    setList(prev => [...prev, getinfo])
  }

  const maparray = list.map((item, id) => (
    <li key={id}>{item} <button onClick={(() => deleteitem(id))}>X</button></li>
  ))

  function deleteitem(props){
    setList((prev) => prev.filter((item, id) => id !== props))
  }

  return(
    <>
      <form action={formsub}>
        <input type="text" name="text" id="text" />
        <button>submit</button>
      </form>

      <ul>
        {maparray}
      </ul>
    </>
  )
}

export default App
