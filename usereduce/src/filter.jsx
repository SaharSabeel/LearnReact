import { useEffect,useState } from 'react'

export default function Cat(){
  const [count,setCount] = useState(0)
  useEffect(()=>{
   console.log(' count appeared')
   return()=>{
    console.log('count disappeared')
   }
   
  },[])
  return(
    <>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    <h1> the count is :{count}</h1>
    </>
  )
}