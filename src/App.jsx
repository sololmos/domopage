import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <Intro></Intro>
      
    </>
  )
}

export default App
