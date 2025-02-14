import React, { useRef, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function RefTest3(props) {
    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([
        {userid: 1, username: "김광진", score: 100},
        {userid: 2, username: "박지성", score: 99},
        {userid: 3, username: "손흥민", score: 88}
    ]);
    const nextId = useRef(4); // nextId.current로 접근
    // let nextId = 4; // 이렇게 선언하면 4, 5, 6, 7 증가하지 않고 계속 4로 초기화됨
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const clickHandler = () => {
        // setter는 비동기, 연속적으로 setter 사용 시 주의
        // setUser({...user, userid: nextId.current}); // 잘못된 코드(setter는 비동기이기 때문에)
        const newUser = {...user, userid: nextId.current};
        setUserList([...userList, newUser]);
        nextId.current++;
    };

    return (
        <div>
            이름 : <input name='username' onChange={changeHandler}></input>
            점수 : <input type='number' name='score' onChange={changeHandler}></input>
            <Button onClick={clickHandler}>사용자 추가</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item) => (
                        <tr key={item.userid}>
                            <td>{item.userid}</td>
                            <td>{item.username}</td>
                            <td>{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RefTest3;