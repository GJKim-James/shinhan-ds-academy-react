import React from 'react';
import TodoItem from 'day4/project2/TodoItem';

function TodoList(props) {
    return (
        <div className='todoList'>
            <h3>Todo List</h3>
            <input type='text' className='searchbar' placeholder='검색어를 입력하세요'></input>
            <div className='list_wrapper'>
                {props.todoArr.map((item) => (
                    <TodoItem key={item.id} todo={item}></TodoItem>
                ))}
            </div>
        </div>
    );
}

export default TodoList;