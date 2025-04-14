import Profile from './components/Profile/Profile.jsx'
import './App.css'
import userData from "../src/userData.json";
import friends from '../src/friends.json';
import FriendList from './components/FriendList/FriendList.jsx'
import transactions from '../src/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'

function App() {
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

    </>
  )
}

export default App
