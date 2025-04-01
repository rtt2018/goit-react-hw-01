export default function FriendListItem({ friends }) {
    const { avatar, name, isOnline } = friends;
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? <span>Online</span> : <span>Offline</span>}</p>
        </div>

    );
}