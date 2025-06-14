import React, { useState } from 'react';
import ActivityImage from './ActivityImage';
import ActivityName from './ActivityName';
import ActivityDetail from './ActivityDetail';

function ActivityCard({id, name, img, detail}) {
    const [btnDetail, setBtnDetail] = useState(false)
    const [btnText, setBtnText] = useState(false)
    const onClickHandle = () => {
        setBtnDetail(!btnDetail)
        setBtnText(!btnText)
    }
    return (
        <div>
            <li key={id}>
                <ActivityImage img={img} name={name} />
                <ActivityName name={name}/>
                <button onClick={onClickHandle}>{btnText ? "숨기기" : "상세보기"}</button>
                {btnDetail ? <ActivityDetail detail={detail} /> : null}
            </li>
        </div>
    );
}

export default ActivityCard;