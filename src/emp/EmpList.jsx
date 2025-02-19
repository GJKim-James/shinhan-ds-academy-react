import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmpList(props) {
    const [empList, setEmpList] = useState([]);

    // 직원 조회
    useEffect(() => {
        axios({
            url: "http://localhost:7777/shinhan/emp/list",
            method: "GET",
            data: empList
        }).then((response) => {
            setEmpList(response.data);
        }).catch((err) => {
            console.log(err);
        });
    });

    useEffect(() => {
        console.log(empList);
    }, [empList]);

    // 직원 삭제
    const deleteHandler = (e) => {
        // e.target : <Button variant='danger' onClick={deleteHandler} data-empId={emp.employee_id}>삭제</Button>
        const empId = e.target.getAttribute("data-empid");

        axios({
            url: `http://localhost:7777/shinhan/emp/delete/${empId}`,
            method: "DELETE"
        }).then((response) => {
            alert(response.data);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>직원 목록</h1>
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>직원 번호</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>입사일</th>
                        <th>직업</th>
                        <th>급여</th>
                        <th>커미션</th>
                        <th>매니저 번호</th>
                        <th>부서 번호</th>
                        <th>DEL</th>
                    </tr>
                </thead>
                <tbody>
                    {empList && empList.map((emp) => (
                        <tr key={emp.employee_id}>
                            <td><Link to={`/emp/detail/${emp.employee_id}`}>{emp.employee_id}</Link></td>
                            <td>{emp.first_name} {emp.last_name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone_number}</td>
                            <td>{emp.hire_date}</td>
                            <td>{emp.job_id}({emp.job_title})</td>
                            <td>{emp.salary}</td>
                            <td>{emp.commission_pct}</td>
                            <td>{emp.manager_id}</td>
                            <td>{emp.department_id}</td>
                            <td>
                                <Button variant='danger' onClick={deleteHandler} data-empid={emp.employee_id}>삭제</Button>
                                <Link to={"/emp/delete"} state={{empId: emp.employee_id}} className='btn btn-dark ms-1'>삭제</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default EmpList;