import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

function DisplayMemberComponent({memberList}) {
    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow">
                    <h2 className="text-center mb-4">Member 목록 보기</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>이름</th>
                            <th>나이</th>
                        </tr>
                        </thead>
                        <tbody>
                            {memberList && memberList.map((item, index) => ( // 조건부 연산(memberList &&) : null 처리
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DisplayMemberComponent;