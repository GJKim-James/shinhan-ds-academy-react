import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function EmpDetail(props) {
    const {empId} = useParams(); // 파라미터로 넘어온 empId(EmpHome.jsx에서 path='detail/:empId' 선언)
    const [emp, setEmp] = useState({});

    // 직원 상세 정보 조회
    useEffect(() => {
        axios({
            url: `http://localhost:7777/shinhan/emp/detail/${empId}`,
            method: "GET"
        }).then((response) => {
            setEmp(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [empId]);

    useEffect(() => {
        console.log(emp);
    }, [emp]);

    // 직원 수정할 내용 변경
    const changeHandler = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const navi = useNavigate();

    // 직원 수정 버튼 로직
    const updateHandler = () => {
        axios({
            url: "http://localhost:7777/shinhan/emp/update",
            method: "PUT",
            data: emp
        }).then((response) => {
            console.log("수정된 직원 정보 : ", response.data);
            navi("/emp/list");
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className='container'>
            <h1>{empId}번 직원 상세보기</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">직원 번호</InputGroup.Text>
                <Form.Control name="employee_id" defaultValue={emp.employee_id} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                <Form.Control name="first_name" defaultValue={emp.first_name} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">성</InputGroup.Text>
                <Form.Control name="last_name" defaultValue={emp.last_name} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이메일</InputGroup.Text>
                <Form.Control name="email" defaultValue={emp.email} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">전화번호</InputGroup.Text>
                <Form.Control name="phone_number" defaultValue={emp.phone_number} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">입사일</InputGroup.Text>
                <Form.Control name="hire_date" defaultValue={emp.hire_date} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Job ID</InputGroup.Text>
                <Form.Control name="job_id" defaultValue={emp.job_id} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Job Title</InputGroup.Text>
                <Form.Control name="job_title" defaultValue={emp.job_title} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">급여</InputGroup.Text>
                <Form.Control name="salary" defaultValue={emp.salary} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">커미션</InputGroup.Text>
                <Form.Control name="commission_pct" defaultValue={emp.commission_pct} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">매니저 번호</InputGroup.Text>
                <Form.Control name="manager_id" defaultValue={emp.manager_id} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">부서 번호</InputGroup.Text>
                <Form.Control name="department_id" defaultValue={emp.department_id} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">부서명</InputGroup.Text>
                <Form.Control name="department_name" defaultValue={emp.department_name} onChange={changeHandler} />
            </InputGroup>
            <Button onClick={updateHandler}>수정하기</Button>
        </div>
    );
}

export default EmpDetail;