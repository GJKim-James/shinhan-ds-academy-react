import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function ControllerComponent({ setCountHandler }) {
    const clickHandler = (e) => setCountHandler(e.target.innerHTML);
    return (
        <div>
            <Container className='mt-5'>
                <Row className="justify-content-center">
                <Col>
                    <Button variant="warning" className='me-2' onClick={clickHandler} defaultValue={-10}>-1</Button>
                    <Button variant="warning" className='me-2' onClick={clickHandler} defaultValue={-10}>-10</Button>
                    <Button variant="warning" className='me-2' onClick={clickHandler} defaultValue={-10}>-100</Button>
                    <Button variant="info" className='me-2' onClick={clickHandler} defaultValue={+100}>+100</Button>
                    <Button variant="info" className='me-2' onClick={clickHandler} defaultValue={+10}>+10</Button>
                    <Button variant="info" className='me-2' onClick={clickHandler} defaultValue={+1}>+1</Button>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ControllerComponent;