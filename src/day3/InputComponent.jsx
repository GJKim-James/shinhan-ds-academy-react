import React, { use, useState } from 'react';

function InputComponent(props) {
    // 상태 관리; 함수형인 경우는 useState()로 관리
    const [name, setName] = useState("홍길동"); // 초기값 "홍길동"
    const [age, setAge] = useState(0); // 초기값 0
    const [birth, setBirth] = useState();
    const [introduce, setIntroduce] = useState("");

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };
    const birthChangeHandler = (e) => {
        setBirth(e.target.value);
    };
    const introChangeHandler = (e) => {
        setIntroduce(e.target.value);
    };

    return (
        <div>
            <div>이름 : <input type="text" onChange={ nameChangeHandler } value={ name } /></div>
            <div>나이 : <input type="number" onChange={ ageChangeHandler } value={ age } /></div>
            <div>생일 : <input type="date" onChange={ birthChangeHandler } /></div>
            <div>소개 : <textarea rows={5} cols={80} onChange={ introChangeHandler }></textarea></div>

            <div>
                <h1>결과</h1>
                <ul>
                    <li>{ name }</li>
                    <li>{ age }</li>
                    <li>{ birth }</li>
                    <li>{ introduce }</li>
                </ul>
            </div>
        </div>
    );
}

export default InputComponent;