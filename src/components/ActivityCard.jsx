import React, { useState } from 'react';
import ActivityImage from './ActivityImage';
import ActivityName from './ActivityName';
import ActivityDetail from './ActivityDetail';
import './ActivityCard.css';

function ActivityCard({id, name, img, detail}) {
    const [btnDetail, setBtnDetail] = useState(false)
    const [btnText, setBtnText] = useState(false)
    const onClickHandle = () => {
        setBtnDetail(!btnDetail)
        setBtnText(!btnText)
    }
    return (
        <li className="activity-card" key={id}>
            <ActivityImage img={img} name={name} />
            <ActivityName name={name}/>
            <button onClick={onClickHandle}>{btnText ? "숨기기" : "상세보기"}</button>
            {btnDetail ? <ActivityDetail detail={detail} /> : null}
        </li>
    );
}

export default ActivityCard;