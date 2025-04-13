import './FriendListItem.css';

export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? <span>Online</span> : <span>Offline</span>}</p>
        </div>

    );
}