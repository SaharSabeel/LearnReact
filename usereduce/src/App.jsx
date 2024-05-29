import { CreateConnection } from "./chat";
import { useState, useEffect } from "react";
const serverUrl = 'https://localhost:1234';


function Chat({roomId}){
    useEffect(()=>{
        const connection = CreateConnection(serverUrl,roomId);
        connection.connect()
        return()=>{
            connection.disconnect()
        }
        
    },[roomId])
     return <h1> welcome to {roomId} chat </h1>
}
export default function App(){
    const [show, setShow ] = useState(false)
    const [roomId , setRoom] = useState('general')
    return(
        <>
        <label htmlFor="">
            <select value={roomId} onChange={(e)=>setRoom(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select> 
             </label>
            <button onClick={()=>setShow(!show)}>
                {show?'close Chat': 'open chat'}
            </button>
             {show && <Chat roomId={roomId}/>}
        </>
    )
}