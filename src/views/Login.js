import React from "react";
// react-bootstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function  Login() {
  return (
    <>
      <Container fluid>
      <Row>
        <Col md=""></Col>
        <Col md="6">
            <Card>
            <Card.Header>
              <p className="log_in text-center">Login Form</p>
            </Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                    <Form.Group className="d-flex mb-3" id="formGridCheckbox">
                     <Form.Check type="checkbox"  label="Remember me"/>
                     <a href="#" className="ml-auto">Forgot password?</a>
                    </Form.Group>
                    <Button  className="btn-fill form-control"
                    type="submit"
                    variant="primary">Login</Button>
            </Form>
                      <p className="text-center mt-4">Don't have an account ?-<a href="Register"  className="text-primary">Sign Up</a></p>
            </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col md=""></Col>
      </Row>   
      </Container>
    </>
  );
}

export default  Login;




