import FriendListItem from '../FriendListItem/FriendListItem.jsx';
// import friends from '../../friends.json';

export default function FriendList({ friends }) {

    return (
        <ul>
            {friends.map((friend) => {
                return (
                    <li key={friend.id}>
                        <FriendListItem friends={friend} />
                    </li>

                )
            })}
        </ul>
    );
}