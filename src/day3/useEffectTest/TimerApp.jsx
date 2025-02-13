import React, { useState } from 'react';
import MyTimer from 'day3/useEffectTest/MyTimer';
import { Button } from 'react-bootstrap';

function TimerApp(props) {
    const [showYN, setShowYN] = useState(true);

    return (
        <div>
            { showYN && <MyTimer></MyTimer> }

            <Button onClick={() => {setShowYN(!showYN)}}>시계 시작/중지 버튼</Button>
        </div>
    );
}

export default TimerApp;