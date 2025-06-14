import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [techInfo, setTechInfo] = useState(undefined)

    useEffect(() => {
        axios.get("http://localhost:3001/techStack")
            .then((data) => {
                setTechInfo(data.data)
            })
            .catch(() => {
                setTechInfo(undefined)
            })
    }, [])

    return (
        <>
            <div>
                <img src="assets/img/최정규_증명사진.jpg" alt="최정규 증명사진" width="15%" />
                <h1>최정규</h1>
                <p>
                    안녕하세요, 저는 백엔드 개발자가 되기 위해 공부 중인 최정규입니다. <br/>
                    최종적으로는 백엔드와 프론트엔드를 아우르는 풀스택 개발자가 되는 것이 목표입니다.
                </p>
                <ul>
                    <li>Github: <a href="https://github.com/JeongGyul">https://github.com/JeongGyul</a></li>
                    <li>email: jjascd@naver.com</li>
                    <li>Tech Stack
                        {techInfo === undefined ? <ul><li>로딩중...</li></ul> : (
                                <ul>
                                    <li>Language: {techInfo.Language}</li>
                                    <li>Web: {techInfo.Web}</li>
                                    <li>Database: {techInfo.Database}</li>
                                    <li>Server: {techInfo.Server}</li>
                                    <li>Version Control: {techInfo.VersionControl}</li>
                                </ul>
                            )}
                    </li>
                </ul>
            </div>
            <div>
                <h1>학력</h1>
                <ul>
                    <li>선린인터넷고등학교 멀티미디어과 2019.03 ~ 2022.02</li>
                    <li>동양미래대학교 정보통신공학과 2022.03 ~ 2025.02</li>
                    <li>동양미래대학교 컴퓨터소프트웨어공학과 2025.03 ~ 현재</li>
                </ul>
            </div>
        </>
    );
}

export default Home;