import React from 'react';
import './ActivityDetail.css';

function ActivityDetail({detail}) {
    return (
        <div className="activity-detail-container">
            <p className="activity-detail-text">{detail}</p>
        </div>
    );
}

export default ActivityDetail;