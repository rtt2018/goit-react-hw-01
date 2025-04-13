import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import './FriendList.css';

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => {
                return (
                    <li key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                )
            })}
        </ul>
    );
}