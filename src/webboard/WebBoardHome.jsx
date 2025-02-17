import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import WebBoardList from 'webboard/WebBoardList';
import WebBoardInsert from 'webboard/WebBoardInsert';
import WebBoardDetail from 'webboard/WebBoardDetail';
import WebBoardDelete from 'webboard/WebBoardDelete';

function WebBoardHome(props) {
    return (
        <div>
            <h1>WebBoard</h1>
            <ul>
                <li>
                    <Link to={"/webboard/list"}>조회(절대경로)</Link>
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
                <Route path='detail/:bno' element={<WebBoardDetail></WebBoardDetail>}></Route>
                <Route path='delete/:bno' element={<WebBoardDelete></WebBoardDelete>}></Route>
            </Routes>
        </div>
    );
}

export default WebBoardHome;