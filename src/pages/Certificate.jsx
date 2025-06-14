import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Certificate() {
    const [certi, setCerti] = useState(undefined)

    useEffect(() => {
        axios.get("http://localhost:3001/certificate")
            .then((data) => {
                setCerti(data.data)
            })
            .catch(() => {
                setCerti(undefined)
            })
    }, [])

    return (
        <div>
            <h1>자격증</h1>
            <ul>
                {certi === undefined ? <li>로딩중...</li> : certi.map((data) => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Certificate