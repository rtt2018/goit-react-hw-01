import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile/Profile.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />

      <h2>Ще нема на що дивитися ))) </h2>
      <div className="card">


      </div>

    </>
  )
}

export default App
