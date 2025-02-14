import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

// DOM 객체 접근은 useRef() 사용
function RefTest1(props) {
    const nameInputRef1 = useRef();
    const nameInputRef2 = useRef();
    const onClickHandler1 = () => {
        nameInputRef1.current.focus();
    };
    const onClickHandler2 = () => {
        nameInputRef2.current.focus();
    };

    return (
        <div>
            <input ref={nameInputRef1}></input>
            <input ref={nameInputRef2}></input>
            <Button onClick={onClickHandler1}>Focus 이동1</Button>
            <Button onClick={onClickHandler2}>Focus 이동2</Button>
        </div>
    );
}

export default RefTest1;