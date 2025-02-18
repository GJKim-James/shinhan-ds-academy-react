import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function WebBoardDetail(props) {
    const {boardNo} = useParams(); // 파라미터로 넘어온 bno

    const [board, setBoard] = useState({});

    useEffect(() => {
        axios({
            url: `http://localhost:7777/shinhan/api/webboard/detail/${boardNo}`,
            method: "GET"
        })
            .then((response) => {
                setBoard(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [boardNo]);

    useEffect(() => {
        console.log(board);
    }, [board]);

    // 게시글 수정할 내용 변경
    const changeHandler = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const navi = useNavigate();

    // 게시글 수정 버튼 로직
    const updateHandler = () => {
        axios({
            url: "http://localhost:7777/shinhan/api/webboard/update",
            method: "PUT",
            data: board
        }).then((response) => {
            alert(response.data);
            navi("/webboard/list");
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className='container'>
            <h1>게시글(WebBoard) {boardNo} 상세보기</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">bno</InputGroup.Text>
                <Form.Control name="bno" defaultValue={board.bno} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                <Form.Control name="title" defaultValue={board.title} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
                <Form.Control name="content" defaultValue={board.content} onChange={changeHandler} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">작성자 ID</InputGroup.Text>
                <Form.Control name="mid" defaultValue={board.mid} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">등록일</InputGroup.Text>
                <Form.Control name="mid" defaultValue={board.regdate} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">수정일</InputGroup.Text>
                <Form.Control name="mid" defaultValue={board.updatedate} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">댓글 수</InputGroup.Text>
                <Form.Control name="mid" defaultValue={board.replyCount} readOnly />
            </InputGroup>
            <Button onClick={updateHandler}>수정하기</Button>
        </div>
    );
}

export default WebBoardDetail;