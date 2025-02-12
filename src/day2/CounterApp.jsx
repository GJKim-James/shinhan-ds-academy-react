import React from 'react';
import Counter1, { Counter2 } from 'day2/Counter1';
import Counter3 from 'day2/Counter3';

function CounterApp(props) {
    return (
        <div>
            <Counter1></Counter1>
            <Counter2></Counter2>
            <hr />

            <Counter3></Counter3>
        </div>
    );
}

export default CounterApp;