import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { StudentContext } from 'day5/review/commonData';

function StudentComponent({ student }) {
    const { updateHandler, deleteHandler } = useContext(StudentContext);
    
    // 수정
    const f_update = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        updateHandler(student.id, fieldName, value); // key가 student.id이고 fieldName, value가 update 됐다는 것을 매개변수로 전달
    };

    // 삭제
    const f_delete = () => {
        deleteHandler(student.id);
    };

    return (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td><input type='text' name='name' value={student.name} onChange={f_update}></input></td>
            <td><input type='text' name='major' value={student.major} onChange={f_update}></input></td>
            <td><input type='text' name='score' value={student.score} onChange={f_update}></input></td>
            <td>{student.grade}</td>
            <td><Button variant='danger' onClick={f_delete}>삭제</Button></td>
        </tr>
    );
}

export default StudentComponent;