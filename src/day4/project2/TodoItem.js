import React from 'react';

// TodoList 중에 한 건을 보여주고 체크박스 수정, (content, 생성일)을 display, 삭제 버튼 수행
function TodoItem({ todo, updateTodo, deleteTodo }) {
    const {id, isDone, content, createdDate} = todo;

    const updateHandler = (e) => {
        updateTodo(id, e.target.name, e.target.value);
    };

    const deleteHandler = () => {
        deleteTodo(id);
    };

    return (
        <div className='todoItem'>
            <div>
                <input type='number' readOnly value={id}></input>
            </div>

            <div className='checkbox_col'>
                <input type='checkbox' name='isDone' onChange={updateHandler} defaultChecked={isDone}></input>
            </div>

            <div className='title_col'>
                <input type='text' name='content' onChange={updateHandler} value={content}></input>
            </div>

            <div className='date_col'>
                {new Date(createdDate).toLocaleDateString()}
            </div>

            <div className='btn_col'>
                <button onClick={deleteHandler}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;