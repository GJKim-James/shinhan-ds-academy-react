import React from 'react';

function JSXTestComp(props) {
    var a = 10;
    var b = "자바스크립트";
    var c = true;
    var c2 = false;
    var d = null;
    var e = undefined;
    var f = [10, 20, 30];
    var g = {name: "홍길동", age: 20} // 직접 출력 불가, 속성 접근하여 출력

    // 자바스크립트에서 조건부 연산 사용하기
    console.log(true && 'hello'); // hello
    console.log(false && 'hello'); // false
    console.log('hello' && 'bye'); // bye
    console.log(null && 'hello'); // null
    console.log(undefined && 'hello'); //undefined
    console.log('' && 'hello'); // ''
    console.log(0 && 'hello'); // 0
    console.log(1 && 'hello'); // hello

    return (
        <div>
            <ul>
                <li>숫자 : {a}</li>
                <li>문자 : {b}</li>
                <li>boolean : {c ? "참(True)" : "거짓(False)"}</li>
                <li>null : {d == null ? "없음" : d}</li>
                <li>undefined : {e === undefined ? "정의안됨" : e}</li>
                <li>배열 : {f.join(", ")}</li>
                <li>객체 : {g.name} {g.age}</li>
                <li>조건부 연산(true) : {c && "앞에 값이 true이면 이 부분이 수행됨"}</li>
                <li>조건부 연산(true) : {c || "앞에 값이 true이면 이 부분이 수행 안됨"}</li>
                <li>조건부 연산(false) : {c2 && "앞에 값이 false이면 이 부분이 수행 안됨"}</li>
                <li>조건부 연산(false) : {c2 || "앞에 값이 false이면 이 부분이 수행됨"}</li>
            </ul>
        </div>
    );
}

export default JSXTestComp;