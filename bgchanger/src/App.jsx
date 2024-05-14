import { useState } from "react"
// import React from "react"


function App() {
  const [color,setColor] = useState('olive')
  console.log(color)

  return (
    
     <div className="w-full h-screen duration-200" style = {{backgroundColor:color}}>
     <div className ="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2"> 
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" style={{backgroundColor:'black'}} >
    <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full
     text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
    <button onClick={()=> setColor("springgreen")}  className="outline-none px-4 py-1 rounded-full
     text-black shadow-lg" style={{backgroundColor: "springgreen"}}>springgreen</button>
    <button onClick={()=> setColor("yellow")}  className="outline-none px-4 py-1 rounded-full
     text-black shadow-lg" style={{backgroundColor: "yellow"}}>yellow</button>
    <button onClick={()=> setColor("purple")}  className="outline-none px-4 py-1 rounded-full
     text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
    <button onClick={()=> setColor("brown")}  className="outline-none px-4 py-1 rounded-full
     text-white shadow-lg" style={{backgroundColor: "brown"}}>Brown</button>
         </div>
     </div>
     </div>
  
  )
}

export default App
