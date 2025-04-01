import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile/Profile.jsx'
import './App.css'
import userData from "../src/userData.json";
import friends from '../src/friends.json';
import FriendList from './components/FriendList/FriendList.jsx'
import transactions from '../src/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

      <h2>Ще нема на що дивитися ))) </h2>
      <div className="card">
      </div>

    </>
  )
}

export default App
