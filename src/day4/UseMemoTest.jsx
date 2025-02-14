import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';

function UseMemoTest(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = (num) => {
        console.log("Calculating...");

        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }

        return num;
    };

    // useMemo()는 값을 저장하고 재사용, 의존 배열에 값이 변경될 때만 메소드 호출
    const result = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    // useCallback(함수, 의존 배열) : 의존 배열의 값이 변경될 때만 수행
    const addHandler = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const changeHandler = (e) => {
        setText(e.target.value);
    };

    // addHandler가 변경되면 수행하도록 코드 작성, why? 리렌더링 시 다시 정의하는지 확인하고자 함
    useEffect(() => {
        console.log("addHandler 다시 할당됨");
    }, [addHandler]);

    return (
        <div>
            <p>입력된 값 : {text}</p>
            <input onChange={changeHandler}></input>
            <p>오래 걸리는 연산 : {result}</p>
            <p>count : {count}</p>
            <Button onClick={addHandler}>증가</Button>
        </div>
    );
}

export default UseMemoTest;