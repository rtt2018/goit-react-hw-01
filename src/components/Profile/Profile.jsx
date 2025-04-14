import './Profile.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className='profile-container'>
            <div className="user-profile">
                <div className='thumb'>
                    <img
                        className="avatar-img"
                        src={image}
                        alt="User avatar"
                    />
                </div>
                <div className="profile-description">
                    <p className='user-name'>{name}</p>
                    <p className='user-tag'>@{tag}</p>
                    <p className='user-location'>{location}</p>
                </div>

                <ul className="stats">
                    <li className="stats-item">
                        <span>Followers</span>
                        <span>{stats.followers}</span>
                    </li>
                    <li className="stats-item">
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li className="stats-item">
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}