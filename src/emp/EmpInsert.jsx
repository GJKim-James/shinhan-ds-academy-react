import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EmpInsert(props) {
    const [emp, setEmp] = useState();

    // 직원 등록을 위한 내용 입력
    const changeHandler = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const navi = useNavigate();

    // 직원 등록 버튼 로직
    const insertHandler = () => {
        axios({
            url: "http://localhost:7777/shinhan/emp/insert",
            method: "POST",
            data: emp
        }).then((response) => {
            console.log("등록된 직원 정보 : ", response.data);
            navi("/emp/list");
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>직원 등록</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이름(first_name)</InputGroup.Text>
                <Form.Control name="first_name" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">성(last_name)</InputGroup.Text>
                <Form.Control name="last_name" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이메일</InputGroup.Text>
                <Form.Control name="email" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">전화번호</InputGroup.Text>
                <Form.Control name="phone_number" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">입사일</InputGroup.Text>
                <Form.Control name="hire_date" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Job ID</InputGroup.Text>
                <Form.Control name="job_id" onChange={changeHandler} placeholder='IT_PROG, AC_ACCOUNT, FI_ACCOUNT, AD_PRES, ...' />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">급여</InputGroup.Text>
                <Form.Control name="salary" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">커미션</InputGroup.Text>
                <Form.Control name="commission_pct" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">매니저 번호</InputGroup.Text>
                <Form.Control name="manager_id" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">부서 번호</InputGroup.Text>
                <Form.Control name="department_id" onChange={changeHandler} />
            </InputGroup>
            <Button onClick={insertHandler}>등록하기</Button>
        </div>
    );
}

export default EmpInsert;