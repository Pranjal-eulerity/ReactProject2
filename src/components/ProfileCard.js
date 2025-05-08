import React from 'react';

const ProfileCard = ({ user }) => {

    const cleanUsername = user.name.trim().toLowerCase();

    return (
        <div>
            <p>User: {cleanUsername}</p>
        </div>
    );
};

export default ProfileCard;
