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
            <h1>WebBoard</h1>
            <ul>
                <li>
                    <Link to={"/webboard/list"}>조회(Link)</Link>&nbsp;
                    <Button onClick={clickHandler}>조회(버튼)</Button>
                </li>
                <li>
                    <Link to={"/webboard/insert"}>입력(절대경로)</Link>
                </li>
                <li>
                    <Link to={"/webboard/detail"}>상세보기(절대경로)</Link>
                </li>
                <li>
                    <Link to={"/webboard/delete"}>삭제(절대경로)</Link>
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