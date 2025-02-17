import React from 'react';
import { Button } from 'react-bootstrap';

function StudentInput(props) {
    const { nameRef, majorRef, scoreRef, changeHandler, addHandler } = props;
    return (
        <div className='mt-3'>
            이름 : <input type='text' ref={nameRef} name='name' onChange={changeHandler} className='me-2'></input>
            전공 : <input type='text' ref={majorRef} name='major' onChange={changeHandler} className='me-2'></input>
            점수 : <input type='number' ref={scoreRef} name='score' onChange={changeHandler} className='me-3'></input>
            <Button variant='info' onClick={addHandler}>학생 추가</Button>
        </div>
    );
}

export default StudentInput;