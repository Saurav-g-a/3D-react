import { event } from "jquery";
import React, { useState } from "react";
// react-bootstrap components
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "./validations/login-validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "react-bootstrap/Alert";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState({});
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { email, password };
    console.log(item);
    setError(Validation(item));
    fetch.post("http://localhost/3d-backend/api/login", item).then(
      (res) => {
        // this only runs on success
        console.log("RESPONSE FROM POST", res.data);
        toast.success("Login success");
        navigate("/dashboard");
        //history.push("/admin");
      },
      (err) => {
        console.log("Error While Posting Data", err);
      }
    );
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
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
                  <Form action="" Validation onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Email </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      {errors.email && (
                        <Alert variant="danger" className="mt-3">
                          {" "}
                          {errors.email}{" "}
                        </Alert>
                      )}

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
                      {errors.password && (
                        <Alert variant="danger" className="mt-3">
                          {" "}
                          {errors.password}{" "}
                        </Alert>
                      )}
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
