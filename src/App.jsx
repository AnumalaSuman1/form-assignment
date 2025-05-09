import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonDetailsForm from "./components/PersonDetailsForm"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonDetailsForm/>
    </>
  )
}

export default App
