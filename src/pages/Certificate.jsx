import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Certificate.css';

function Certificate() {
    const [certi, setCerti] = useState(undefined)

    // 의존성 배열을 빈 배열로 줌으로써 컴포넌트가 처음 마운트될 때만 GET 요청을 보냄
    useEffect(() => {
        axios.get("http://localhost:3001/certificate")
            .then((data) => {
                setCerti(data.data)  // 요청이 성공하면 data를 state 변수에 저장
            })
            .catch(() => {
                setCerti(undefined)  // 요청이 실패하면 state 변수에 undefined 저장
            })
    }, [])

    return (
        <div className="certificate-container">
            <h1>자격증</h1>
            <ul>
                {certi === undefined ? <li>로딩중...</li> : certi.map((data) => (  // API로부터 db.json의 내용을 받지 못하면 로딩중으로 출력
                    <li key={data.id}>{data.name}</li>                             // API로부터 내용을 받으면 배열의 내용을 map 함수를 통해 출력
                ))}
            </ul>
        </div>
    );
}

export default Certificate