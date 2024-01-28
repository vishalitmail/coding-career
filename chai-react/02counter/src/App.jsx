import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter]=useState(0)
  // let counter=15;
  const Add=()=>{
    // counter+=1;
    setCounter(counter+1)
    // console.log('Added value',Math.random(),counter )

  }
  const Sub=()=>{

    if(counter>0)setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={Add}>Add Value + = {counter}</button>
      <br />  
      <button onClick={Sub}>Remove Value - = {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
