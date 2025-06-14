import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityCard from '../components/ActivityCard';
import './Activities.css';

function Activities() {
    const [actSimple, setActSimple] = useState(undefined)
    const [actDetail, setActDetail] = useState(undefined)

    useEffect(() => {
        axios.get("http://localhost:3001/activities_Simple")
            .then((data) => {
                setActSimple(data.data)
            })
            .catch(() => {
                setActSimple(undefined)
            })

        axios.get("http://localhost:3001/activities_Detail")
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
                {actSimple === undefined ? <li>로딩중...</li> : actSimple.map((act) => (
                    <li key={act.id}>{act.name}</li>
                ))}
            </ul>
            <ul className="detail-activities">
                {actDetail === undefined ? <li>로딩중...</li> : actDetail.map((act) => (
                    <ActivityCard 
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