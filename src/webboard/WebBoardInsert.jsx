import { call } from 'login/service/ApiService';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function WebBoardInsert(props) {
    const [board, setBoard] = useState({});

    const changeHandler = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const navi = useNavigate();

    // const insertHandler = () => {
    //     axios({
    //         url: "http://localhost:7777/shinhan/api/webboard/register",
    //         method: "POST",
    //         data: board
    //     }).then((response) => {
    //         alert(response.data);
    //         navi("/webboard/list");
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // JWT 이용한 등록
    const insertHandler = () => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        const login = localStorage.getItem("login");

        if (accessToken === null) {
            alert("로그인 필요");
            window.location.href = "/login";
        } else {
            const newBoard = { ...board, mid: login };
            call("/api/webboard/register", "POST", newBoard).then((response) => {
                alert("게시글 등록 성공!");
                navi("/webboard/list");
            });
        }
    };

    return (
        <div className='container'>
            <h1>게시글(WebBoard) 등록하기</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                <Form.Control name="title" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
                <Form.Control name="content" onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">작성자 ID</InputGroup.Text>
                <Form.Control name="mid" onChange={changeHandler} readOnly placeholder='ID 필요없음' />
            </InputGroup>
            <Button onClick={insertHandler}>등록하기</Button>
        </div>
    );
}

export default WebBoardInsert;