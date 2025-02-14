import React from 'react';

function TodoItem(props) {
    const {id, isDone, content, createdDate} = props.todo;

    return (
        <div className='todoItem'>
            <div>
                <input type='number' readOnly value={id}></input>
            </div>
            <div className='checkbox_col'>
                <input type='checkbox' checked={isDone}></input>
            </div>
            <div className='title_col'>
                {content}
            </div>
            <div className='date_col'>
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className='btn_col'>
                <button>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;