import { call } from 'login/service/ApiService';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function WebBoardDelete(props) {
    /*
    useLocation()
    React Router에서 현재 URL 정보(경로, 쿼리, 해시 등)를 가져오는 데 유용
    주로 URL에 기반한 동적 콘텐츠를 렌더링하거나 페이지 이동을 추적할 때 사용
    */
    const location = useLocation();
    const bno = location.state.bno;
    const navi = useNavigate();

    // useEffect(() => {
    //     axios({
    //         url: `http://localhost:7777/shinhan/api/webboard/delete/${bno}`,
    //         method: "DELETE"
    //     }).then((response) => {
    //         alert(response.data);
    //         navi("/webboard/list");
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, [bno]);

    // JWT 이용한 게시글 삭제
    useEffect(() => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken === null) {
            alert("로그인 필요");
            window.location.href = "/login";
        } else {
            call(`/api/webboard/delete/${bno}`, "DELETE", null).then((response) => {
                alert("Link를 통한 게시글 삭제 성공!");
                navi("/webboard/list");
            });
        }
    }, [bno]);

    return (
        <div>
            <h1>WebBoard {bno} 삭제</h1>
        </div>
    );
}

export default WebBoardDelete;