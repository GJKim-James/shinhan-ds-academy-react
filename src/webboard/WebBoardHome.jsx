import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import WebBoardList from 'webboard/WebBoardList';
import WebBoardInsert from 'webboard/WebBoardInsert';
import WebBoardDetail from 'webboard/WebBoardDetail';
import WebBoardDelete from 'webboard/WebBoardDelete';
import { Button } from 'react-bootstrap';

function WebBoardHome(props) {
    const navi = useNavigate();

    const clickHandler = () => {
        navi("/webboard/list");
    };

    return (
        <div>
            <Link to={"/"} className='btn btn-dark mt-2'>◀️ Home으로</Link>
            <h1>WebBoard</h1>
            <ul>
                <li className='mb-2'>
                    <Link to={"/webboard/list"} className='btn btn-danger'>조회(Link)</Link>&nbsp;
                    <Button variant='warning' onClick={clickHandler}>조회(버튼)</Button>
                </li>
                <li>
                    <Link to={"/webboard/insert"} className='btn btn-success'>등록(절대경로)</Link>
                </li>
            </ul>

            <Routes>
                <Route path='list' element={<WebBoardList></WebBoardList>}></Route>
                <Route path='insert' element={<WebBoardInsert></WebBoardInsert>}></Route>
                <Route path='detail/:boardNo' element={<WebBoardDetail></WebBoardDetail>}></Route>
                <Route path='delete' element={<WebBoardDelete></WebBoardDelete>}></Route>
            </Routes>
        </div>
    );
}

export default WebBoardHome;