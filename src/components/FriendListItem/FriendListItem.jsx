import './FriendListItem.css';

export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <div className='friend-list-card'>
            <img src={avatar} alt="Avatar" width="48" />
            <p className='friend-name'>{name}</p>
            <p className='online-status'>{isOnline ? <span className='is-online'>Online</span> : <span className='is-offline'>Offline</span>}</p>
        </div>

    );
}