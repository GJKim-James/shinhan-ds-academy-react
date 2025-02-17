import React from 'react';
import { Table } from 'react-bootstrap';
import StudentComponent from 'day5/review//StudentComponent';

function StudentOutput({ studentList, updateHandler, deleteHandler }) {
    return (
        <>
            <Table striped bordered hover className='text-center mt-3'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>전공</th>
                        <th>점수</th>
                        <th>학점</th>
                        <th>삭제 버튼</th>
                    </tr>
                </thead>
                <tbody>
                    {/* studentList가 있으면 studentList.map() 수행 */}
                    {studentList && studentList.map((stu) => (
                        <StudentComponent key={stu.id} student={stu} updateHandler={updateHandler} deleteStudent={deleteHandler}></StudentComponent>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default StudentOutput;