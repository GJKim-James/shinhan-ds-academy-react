import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function InputMemberComponent({submitHandler, nameRef, ageRef, memberChangeHandler, member}) {
    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow">
                    <h2 className="text-center mb-4">이름과 나이 입력</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                        <Form.Label>이름</Form.Label>
                        <Form.Control ref={nameRef} name="name" onChange={memberChangeHandler} defaultValue={member.name} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>나이</Form.Label>
                        <Form.Control ref={ageRef} type="number" name="age" onChange={memberChangeHandler} defaultValue={member.age} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="w-100">
                        제출
                        </Button>
                    </Form>
                    </Card>
                </Col>
                </Row>
            </Container>
            <p>member 이름 : {member.name}</p>
            <p>member 나이 : {member.age}</p>
        </div>
    );
}

export default InputMemberComponent;