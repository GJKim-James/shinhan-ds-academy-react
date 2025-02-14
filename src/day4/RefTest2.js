import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function RefTest2(props) {
    let normalCount = 0; // 리렌더링 시 다시 초기화
    const refCount = useRef(0); // 초기값 0, 리렌더링 시에 다시 초기화하지 않음
    const clickHandler = () => {
        normalCount++;
        refCount.current++;
        console.log("일반 변수 :", normalCount, "/ useRef 변수 : ", refCount.current);
    };
    const [age, setAge] = useState(20); // 상태 값을 변화주기 위해 추가
    const changeHandler = (e) => {
        setAge(e.target.value);
    };
    return (
        <div>
            <h1>일반 변수와 useRef 사용 변수</h1>
            <p>일반 변수(상태 관리 안되고 있음, UI 자동 아님) : {normalCount}</p>
            <p>useRef 사용 변수 : {refCount.current}</p>
            <p>age : {age}</p>
            <input onChange={changeHandler}></input>
            <Button onClick={clickHandler}>증가하기</Button>
        </div>
    );
}

export default RefTest2;