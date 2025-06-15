import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityCard from '../components/ActivityCard';
import './Activities.css';

function Activities() {
    const [actSimple, setActSimple] = useState(undefined)
    const [actDetail, setActDetail] = useState(undefined)

    useEffect(() => {
        axios.get("http://localhost:3001/activities_Simple")  // 의존성 배열을 빈 배열로 줌으로써 컴포넌트가 처음 마운트될 때만 GET 요청을 보냄
            .then((data) => {
                setActSimple(data.data)     // 요청이 성공하면 data를 state 변수에 저장
            })
            .catch(() => {
                setActSimple(undefined)     // 요청이 실패하면 state 변수에 undefined 저장
            })

        axios.get("http://localhost:3001/activities_Detail")  // 위와 동일
            .then((data) => {
                setActDetail(data.data)
            })
            .catch(() => {
                setActDetail(undefined)
            })
    }, [])

    return (
        <div className="activities-container">
            <h1>수상 및 활동</h1>
            <ul className="simple-activities">
                {actSimple === undefined ? <li>로딩중...</li> : actSimple.map((act) => ( // API로부터 db.json의 내용을 받지 못하면 로딩중으로 출력
                    <li key={act.id}>{act.name}</li>                                    // API로부터 내용을 받으면 배열의 내용을 map 함수를 통해 출력
                ))}
            </ul>
            <ul className="detail-activities">
                {actDetail === undefined ? <li>로딩중...</li> : actDetail.map((act) => (   // 위와 동일
                    <ActivityCard                                                          // db.json의 내용을 props로 자식 컴포넌트에 전달 
                        id={act.id} 
                        name={act.name}
                        img={act.img}
                        detail={act.detail}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Activities