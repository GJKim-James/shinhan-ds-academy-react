import React from 'react';
import TodoItem from 'day4/project2/TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';

function TodoList({ todoArr, updateTodo, deleteTodo }) {
    const [searchContent, setSearchContent] = useState(""); // 검색어 상태 관리

    const searchHandler = (e) => {
        setSearchContent(e.target.value); // 검색어 입력 가능
    };

    const getSearchResult = () => {
        // filter()는 조건에 맞는 것만(true이면) return됨 ==> [{}, {}]
        return searchContent === "" ?
               todoArr : todoArr.filter((item) => item.content.toLowerCase().includes(searchContent.toLowerCase()));
    };

    // lifecycle 관리 (함수, [의존배열])
    useEffect(() => {
        console.log(todoArr);
    }, [todoArr]);

    return (
        <div className='todoList'>
            <h3>Todo List ✔</h3>
            <input type='text' onChange={searchHandler} className='searchbar' value={searchContent} placeholder='검색어를 입력하세요'></input>
            <div className='list_wrapper'>
                {/* getSearchResult()가 truthy(값이 존재하거나 null, undefined, false가 아닌 경우)하면 그 뒤의 코드 블록이 실행 */}
                {getSearchResult() && getSearchResult().map((item) => (
                    <TodoItem key={item.id} todo={item} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoItem>
                ))}
            </div>
        </div>
    );
}

export default TodoList;