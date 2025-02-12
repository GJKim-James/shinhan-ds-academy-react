import React from 'react';
import JSXTestComp from 'day1/JSXTestComp';
import JSXTestComp2, {myscore1, myscore2, call1, call2} from 'day1/JSXTestComp2';

function Day1Component(props) {
    return (
        <div>
            <JSXTestComp></JSXTestComp>
            <hr></hr>
            <JSXTestComp2></JSXTestComp2>
            <p>myscore : {myscore1}</p>
            <p>myscore2 : {myscore2}</p>
            <p>call1 호출 : {call1()}</p>
            <p>call2 호출 : {call2()}</p>
        </div>
    );
}

export default Day1Component;