import React from 'react';
import './ActivityName.css';

function ActivityName({name}) {
    return (
        <div className="activity-name">
            <strong>{name}</strong>
        </div>
    );
}

export default ActivityName