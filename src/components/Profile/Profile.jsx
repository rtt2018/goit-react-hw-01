import React from "react";

export default function Profile({ name, tag, location, image, stats }) {
    // const { name, tag, location, image, stats } = props;

    return (
        <div>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}