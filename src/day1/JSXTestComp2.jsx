import React from 'react';

export const myscore1 = 90;
export function call1() {
    return "call1() 함수입니다.";
}

const myscore2 = 100;
function call2() {
    return "call2() 함수입니다.";
}

function JSXTestComp2(props) {
    const a = "문자가 저장됨";
    const arr =  ["1조", "2조", "3조"];
    const arr2 = arr.map((item, index) => <li>{item}</li>);
    function getMessage() {
        return "getMessage() 함수입니다.";
    }

    return (
        <div>
            <p>문자 : {a}</p>
            <ul>
                {arr.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>{arr2}</ul>
            <p>함수 호출 : {getMessage()}</p>
        </div>
    );
}

// export default JSXTestComp2;
export {JSXTestComp2 as default, myscore2, call2}; // 한꺼번에 export하기