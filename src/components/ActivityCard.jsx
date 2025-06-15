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
            <ActivityImage img={img} name={name} />  {/* 부모 컴포넌트로부터 받은 props를 다시 자식 컴포넌트로 전달 */}
            <ActivityName name={name}/>
            <button onClick={onClickHandle}>{btnText ? "숨기기" : "상세보기"}</button>  {/* 상태를 이용한 조건부 렌더링 사용 */}
            {btnDetail ? <ActivityDetail detail={detail} /> : null}                 {/* 상태가 참이면 컴포넌트 렌더링, 거짓이면 null 반환 */}
        </li>
    );
}

export default ActivityCard;