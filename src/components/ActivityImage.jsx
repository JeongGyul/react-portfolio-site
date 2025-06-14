import React from 'react';
import './ActivityImage.css';

function ActivityImage({img, name}) {
    const imgUrl = "http://localhost:5173/" + img
    return (
        <div className="activity-image-container">
            <img src={imgUrl} alt={name} />
        </div>
    );
}

export default ActivityImage;