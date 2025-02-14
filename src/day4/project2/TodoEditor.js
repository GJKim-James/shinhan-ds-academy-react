import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function TodoEditor({addTodoHandler}) {
    const [todoContent, setTodoContent] = useState(""); // onChange 및 todo 추가 후 input 빈 칸으로 변경하기 위한 상태 관리
    const inputRef = useRef();

    const changeTodoContent = (e) => {
        setTodoContent(e.target.value);
    };

    const addTodo = () => {
        console.log(todoContent);

        if (!todoContent) {
            inputRef.current.focus();
            return;
        }

        addTodoHandler(todoContent);

        setTodoContent("");
    };

    return (
        <div className='todoEditor'>
            <h4>새로운 Todo 작성하기</h4>
            <input ref={inputRef} onChange={changeTodoContent} value={todoContent} className='me-2' placeholder='새로운 Todo...'></input>
            <Button onClick={addTodo}>추가</Button>
        </div>
    );
}

export default TodoEditor;