import React, { useState } from 'react';
import ViewerComponent from 'day3/counterApp/ViewerComponent';
import ControllerComponent from 'day3/counterApp/ControllerComponent';
import 'day3/counterApp/counterApp.css' // 외부 css 적용

function CounterApp(props) {
    const [count, setCount] = useState(0); // 초기값 0
    
    const setCountHandler = (value) => {
        setCount(count + Number(value));
    };

    return (
        <div>
            <h1 id='title'>Simple Counter</h1>
            <ViewerComponent count={count}></ViewerComponent>
            <ControllerComponent setCountHandler={setCountHandler}></ControllerComponent>
        </div>
    );
}

export default CounterApp;