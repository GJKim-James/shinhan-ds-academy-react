import { call } from 'login/service/ApiService';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function WebBoardList(props) {
    const [boardList, setBoardList] = useState([]);

    // WebBoardList가 load 시 1회 조회하기(빈 의존 배열)
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:7777/shinhan/api/webboard/list")
    //         .then((responseInfo) => {
    //             setBoardList(responseInfo.data);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }, []);

    // JWT 이용한 로그인
    useEffect(() => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken === null) {
          alert("로그인 필요");
          window.location.href = "/login";
        } else {
          call("/api/webboard/list", "GET", null).then((response) => {
            setBoardList(response);
          });
        }
    }, []);

    useEffect(() => {
        console.log(boardList);
    }, [boardList]);

    const navi = useNavigate();

    // 게시글 삭제
    // const deleteHandler = (e) => {
    //     const bno = e.target.getAttribute("data-bno");

    //     axios({
    //         url: `http://localhost:7777/shinhan/api/webboard/delete/${bno}`,
    //         method: "DELETE"
    //     }).then((response) => {
    //         alert(response.data);
    //         // navi("/webboard/list"); // 삭제된 데이터 반영이 안됨(위 useEffect() 코드 중 [] 의존 배열 선언; load 시 1회만 조회 때문에)
    //         // navi(0); // 방법1; 페이지를 "뒤로 가기"처럼 동작
    //         // window.location.href = "http://localhost:3000/webboard/list"; // 방법2
    //         window.location.reload(); // 방법3
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // JWT 이용한 게시글 삭제
    const deleteHandler = (e) => {
        const bno = e.target.getAttribute("data-bno");
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken === null) {
            alert("로그인 필요");
            window.location.href = "/login";
        } else {
            call(`/api/webboard/delete/${bno}`, "DELETE", null).then((response) => {
                alert("Button을 통한 게시글 삭제 성공!");
                window.location.reload();
            });
        }
    };

    return (
        <div>
            <h1>게시글(WebBoard) 목록</h1>
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>등록일</th>
                        <th>수정일</th>
                        <th>댓글 수</th>
                        <th>DEL</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList && boardList.map((board) => (
                        <tr key={board.bno}>
                            <td><Link to={`/webboard/detail/${board.bno}`}>{board.bno}</Link></td>
                            <td>{board.title}</td>
                            <td>{board.content}</td>
                            <td>{board.mid}({board.mname})</td>
                            <td>{new Date(board.regdate).toLocaleDateString('ko-KR')}</td>
                            <td>{new Date(board.updatedate).toLocaleString('ko-KR')}</td>
                            <td>{board.replyCount}</td>
                            <td>
                                <Button variant='danger' onClick={deleteHandler} data-bno={board.bno}>삭제</Button>
                                <Link to={"/webboard/delete"} state={{bno: board.bno}} className='btn btn-dark ms-1'>삭제</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default WebBoardList;