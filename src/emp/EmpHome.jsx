import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import EmpList from 'emp/EmpList';
import EmpInsert from 'emp/EmpInsert';
import EmpDetail from 'emp/EmpDetail';
import EmpDelete from 'emp/EmpDelete';

function EmpHome(props) {
    const navi = useNavigate();
    const clickHandler = () => {
        navi("/emp/list");
    };

    return (
        <div>
            <Link to={"/"} className='btn btn-dark mt-2'>◀️ Home으로</Link>
            <h1>Emp</h1>
            <ul>
                <li className='mb-2'>
                    <Link to={"/emp/list"} className='btn btn-primary me-2'>조회(Link)</Link>
                    <Button onClick={clickHandler}>조회(버튼)</Button>
                </li>
                <li>
                    <Link to={"/emp/insert"} className='btn btn-primary'>등록(절대경로)</Link>
                </li>
            </ul>

            <Routes>
                <Route path='list' element={<EmpList></EmpList>}></Route>
                <Route path='insert' element={<EmpInsert></EmpInsert>}></Route>
                <Route path='detail/:empId' element={<EmpDetail></EmpDetail>}></Route>
                <Route path='delete' element={<EmpDelete></EmpDelete>}></Route>
            </Routes>
        </div>
    );
}

export default EmpHome;