import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 //let counter =15;
 
 const [counter,setcounter]=useState(15)

 const addValue=()=>{
  console.log("clicked",counter)
  //counter=counter+1
  
  if(counter<20){
   setcounter(counter+1)
  }
 }

 const removeValue=()=>{
  if(counter>0){
      setcounter(counter -1)
    }
 }

  return (
    
    <>
       <h1>Chai aur react</h1>
       <h2>Counter vale:{counter}</h2>
       <button onClick={addValue} disabled={counter>=20}>Add value:{counter} </button>
       <br />
       <button onClick={removeValue} disabled={counter==0}>Remove value: {counter}</button>
       <p>footer:{counter}</p>
    </>
  )
}

export default App
