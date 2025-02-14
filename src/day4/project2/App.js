import React, { useRef, useState } from 'react';
import Header from 'day4/project2/Header';
import TodoEditor from 'day4/project2/TodoEditor';
import TodoList from 'day4/project2/TodoList';

import 'day4/project2/project2.css'; // 외부 css 적용

const defaultData = [
    {id: 0, isDone: false, content: "React 공부하기", createdDate: new Date().getTime()},
    {id: 1, isDone: false, content: "빨래 널기", createdDate: new Date().getTime()},
    {id: 2, isDone: false, content: "노래 연습하기기", createdDate: new Date().getTime()},
];

function App(props) {
    const [todoArr, setTodoArr] = useState(defaultData);
    const idRef = useRef(3); // 다음에 추가할 todo의 id는 3

    const addTodoHandler = (todoContent) => {
        const newTodo = {
            id: idRef.current,
            isDone: false,
            content: todoContent,
            createdDate: new Date().getTime()
        };

        setTodoArr([...todoArr, newTodo]); // 원래 todo + 새로운 todo
        idRef.current++;
    };

    return (
        <div className='App'>
            <Header></Header>
            <TodoEditor addTodoHandler={addTodoHandler}></TodoEditor>
            <TodoList todoArr={todoArr}></TodoList>
        </div>
    );
}

export default App;