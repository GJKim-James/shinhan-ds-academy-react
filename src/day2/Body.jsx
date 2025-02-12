import React from 'react';
import { Table } from 'react-bootstrap';

function Body(props) {
    console.log("Body 생성");

    const arr = [{
        name: "김광진",
        age: 29
    }, {
        name: "박지성",
        age: 45
    }, {
        name: "홍길동",
        age: 70
    }];
    
    return (
        <div>
            <h1>Body입니다.</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Body;