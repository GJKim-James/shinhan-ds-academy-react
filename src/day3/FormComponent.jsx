import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow">
              <h2 className="text-center mb-4">이름과 나이 입력</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>이름</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>나이</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  제출
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormComponent;
