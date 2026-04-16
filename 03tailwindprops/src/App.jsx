import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  /* eslint-disable @next/next/no-img-element */

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Css</h1>
      <Card username="chaiaurcode"/>
      </>
  );
}

  


    export default App
