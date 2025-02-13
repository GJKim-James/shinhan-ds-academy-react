import React from 'react';
import { Container, Row } from 'react-bootstrap';

function ViewerComponent({count}) {
    return (
        <div>
            <Container className='mt-5'>
                <Row className="justify-content-center">
                    <div>현재 카운트 :</div>
                    <h1 className='mt-3'>{count}</h1>
                </Row>
            </Container>
        </div>
    );
}

export default ViewerComponent;