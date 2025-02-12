import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// 선언적 함수
function Counter1(props) {
    const [count, setCount] = useState(0); // 상태 관리(값이 변경되면 자동으로 UI 변경됨)
    const clickHandler = (event) => {
        var text = event.target.innerHTML; // 더하기 or 빼기
        console.log(text);

        if (text === "더하기") {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>현재 값 : {count}</h1>
            <Button variant='info' onClick={ () => setCount(count + 1) } className='me-2'>+</Button>
            <Button variant='warning' onClick={ () => setCount(count - 1) } className='me-2'>-</Button>
            <Button variant='info' onClick={ clickHandler } className='me-2'>더하기</Button>
            <Button variant='warning' onClick={ clickHandler }>빼기</Button>
        </div>
    );
}

// 리터럴 함수
const Counter2 = (props) => {
    return (
        <div>
            <h1>함수형 Component로 Counter 만들기</h1>
        </div>
    );
}

export { Counter1 as default, Counter2 };