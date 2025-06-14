import React from 'react';

function ActivityImage({img, name}) {
    const imgUrl = "http://localhost:5173/" + img
    return (
        <div>
            <img src={imgUrl} alt={name} width="20%"/>
        </div>
    );
}

export default ActivityImage;