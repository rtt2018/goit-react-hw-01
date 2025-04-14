import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import './FriendList.css';

export default function FriendList({ friends }) {
    return (
        <ul className='friends-list'>
            {friends.map((friend) => {
                return (
                    <li className='friends-item' key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                )
            })}
        </ul>
    );
}