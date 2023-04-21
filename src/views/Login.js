import { event } from "jquery";
import React, { useState } from "react";
// react-bootstrap components
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import Validation from "./validations/login-validations";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { email, password };
    setError(Validation(item));
    axios
      .post("http://localhost/3d-backend/api/login", item)
      .then((res) => console.log(res));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md=""></Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <div className="text-center">
                  <p>Login Form</p>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <Form action="" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Email </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p> {errors.email} </p>}
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <p> {errors.password} </p>}
                    </Form.Group>
                    <Form.Group className="d-flex mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                      <a href="#" className="ml-auto">
                        Forgot password?
                      </a>
                    </Form.Group>
                    <Button
                      className="btn-fill form-control"
                      type="submit"
                      variant="primary"
                    >
                      Login
                    </Button>
                  </Form>
                  <div className="text-center mt-4">
                    <p>
                      Don't have an account ?-
                      <a href="Register" className="text-primary">
                        Sign Up
                      </a>
                    </p>
                  </div>
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

export default Login;
