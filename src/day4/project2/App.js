import React, { useRef, useState } from 'react';
import Header from 'day4/project2/Header';
import TodoEditor from 'day4/project2/TodoEditor';
import TodoList from 'day4/project2/TodoList';

import 'day4/project2/project2.css'; // 외부 css 적용
import { useEffect } from 'react';
import { useCallback } from 'react';

const defaultData = [
    {id: 0, isDone: false, content: "React 공부하기", createdDate: new Date().getTime()},
    {id: 1, isDone: false, content: "빨래 널기", createdDate: new Date().getTime()},
    {id: 2, isDone: false, content: "노래 연습하기", createdDate: new Date().getTime()},
];

function App(props) {
    const [todoArr, setTodoArr] = useState(defaultData);
    const idRef = useRef(3); // 다음에 추가할 todo의 id는 3

    // 새로운 Todo 추가, 화면에 표시
    const addTodoHandler = useCallback((todoContent) => {
        const newTodo = {
            id: idRef.current,
            isDone: false,
            content: todoContent,
            createdDate: new Date().getTime()
        };

        setTodoArr([...todoArr, newTodo]); // 원래 todo + 새로운 todo
        idRef.current++;
    }, [todoArr]);

    // useCallback() 수행되는지 보기 위해 추가함
    useEffect(() => {
        console.log("addTodoHandler 메서드 재생성......");
    }, [addTodoHandler]);

    // Todo 수정
    const updateTodo = (targetId, inputName, value) => {
        console.log(targetId);

        setTodoArr(todoArr.map((item) => {
            if (item.id === targetId && inputName === "isDone") {
                // input 속성 name='isDone'이면 원래 todoArr 한 건 내용 중 isDone만 !item.isDone로 변경
                return { ...item, isDone: !item.isDone };
            } else if (item.id === targetId && inputName === "content") {
                // input 속성 name='content'이면 원래 todoArr 한 건 내용 중 content만 value로 변경
                return { ...item, content: value };
            } else {
                return item; // 그렇지 않으면 item 한 건 그대로 return
            }
        }));
    };

    // Todo 삭제
    const deleteTodo = (targetId) => {
        setTodoArr(todoArr.filter((item) => item.id !== targetId)); // item.id !== targetId인 todo만 골라내어 삭제 작업 수행
    };

    return (
        <div className='App'>
            <Header></Header>
            <TodoEditor addTodoHandler={addTodoHandler}></TodoEditor>
            <TodoList todoArr={todoArr} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
        </div>
    );
}

export default App;