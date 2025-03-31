import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile/Profile.jsx'
import './App.css'
import userData from "../src/userData.json";
console.log("🚀 ~ userData:", userData)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h2>Ще нема на що дивитися ))) </h2>
      <div className="card">


      </div>

    </>
  )
}

export default App
