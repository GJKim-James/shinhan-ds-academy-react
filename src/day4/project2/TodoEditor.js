import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function TodoEditor({addTodoHandler}) {
    const [todoContent, setTodoContent] = useState(""); // onChange 및 todo 추가 후 input 빈 칸으로 변경하기 위한 상태 관리
    const inputRef = useRef(); // Focus 이동을 위해 선언, useRef가 DOM 처리를 위해 사용

    const changeTodoContent = (e) => {
        setTodoContent(e.target.value);
    };

    const addTodo = () => {
        console.log(todoContent);

        if (!todoContent) {
            // 입력된 내용이 없으면 Focus 이동하고 addTodoHandler() 호출 안함
            inputRef.current.focus();
            return;
        }

        addTodoHandler(todoContent);

        setTodoContent("");
    };

    const onKeyDown = (e) => {
        // 키를 누를 때마다 발생, Enter 키를 눌렀을 때 '추가' 버튼 로직 수행
        if (e.keyCode === 13) {
            addTodo(); // 함수 호출
        }
    };

    return (
        <div className='todoEditor'>
            <h4>새로운 Todo 작성하기 📝</h4>
            <input ref={inputRef} onChange={changeTodoContent} onKeyDown={onKeyDown} value={todoContent} className='me-2' placeholder='새로운 Todo...'></input>
            <Button onClick={addTodo}>추가</Button>
        </div>
    );
}

export default TodoEditor;