import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
// let counter = 15;
const addValue = ()=>{   // setCount is a function
  // count = count + 1;
  if(count===15){
    count === null
  }
  else{
  setCount((count)=> count+1)
  }
}
const removeValue= ()=>{
  if(count===0){
    count===null
  }
  else{
  setCount(count - 1)
  }
}
  return (
    <>
      
      <h1>React</h1>
      <h2>counter Value:{count}</h2>
      <button onClick={addValue}>add value</button>
 <br />  
         <button onClick={removeValue}>remove value</button> 
           </>
  )
}

export default App
