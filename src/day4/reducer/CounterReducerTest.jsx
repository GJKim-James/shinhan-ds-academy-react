import React, { useCallback, useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
import reducer1 from 'day4/reducer/reducer1';

function CounterReducerTest(props) {
    // 상태 관리
    // const [count, setCount] = useState(0);
    // useReducer()를 이용한 상태 관리
    // dispatch : reducer를 호출할 때 사용되는 함수 이름
    const [count, dispatch] = useReducer(reducer1, 0);
    const [age, setAge] = useState(20);

    const clcikHandler = useCallback((e) => {
        if (e.target.innerHTML === "더하기") {
            // setCount(count + 1);
            dispatch({type: "PLUS"});
        } else {
            // setCount(count - 1);
            dispatch({type: "MINUS"});
        }
    }, []);

    const changeAgeHandler = useCallback((e) => {
        setAge(e.target.value);
    }, []);

    // Life Cycle 확인을 위한 테스트트
    // useEffect(() => {
    //     console.log("clcikHandler 변경");
    // }, [clcikHandler]);

    // useEffect(() => {
    //     console.log("changeAgeHandler 변경");
    // }, [changeAgeHandler]);

    return (
        <div>
            <input onChange={changeAgeHandler}></input>
            <p>현재 count : {count} 나이 : {age}</p>
            <Button onClick={clcikHandler}>더하기</Button>
            <Button onClick={clcikHandler}>빼기</Button>
        </div>
    );
}

export default CounterReducerTest;