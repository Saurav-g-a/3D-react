import axios from "axios";
import React, { useState } from "react";
// react-bootstrap components
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import RValidation from "./validations/register-validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
function FormFloatingRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");

  const [errors, setError] = useState({});


  const passwordsMatch = () => {
    return password === c_password;
  }


  const handleSubmit = (event) => {
    let item = { name, email, password, c_password };
    event.preventDefault();
    console.log(item);
    setError(RValidation(item));

    axios
      .post("http://localhost/3d-backend/api/register", item)
      .then((res) => {
        // this only runs on success
        console.log("RESPONSE FROM POST", res.data);
        toast.success('Register success Please verify your email ')
        
      }, (err) => {
        console.log("Error While Posting Data", err);
      });
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
                  <p>Register Form</p>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <Form action="" RValidation onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                      />
                      {errors.name && <Alert variant="danger" className="mt-3" > {errors.name} </Alert>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                      {errors.email && <Alert variant="danger" className="mt-3" > {errors.email} </Alert>}
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      {errors.password && <Alert variant="danger" className="mt-3" > {errors.password} </Alert>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="c_password"
                        value={c_password}
                        onChange={(e) => setCPassword(e.target.value)}
                        placeholder="Confirm Password"
                      />
                      {/* {errors.c_password && <Alert variant="danger" className="mt-3" > {errors.c_password} </Alert>} */}
                      {!passwordsMatch() && <Alert variant="danger" className="mt-3" > Passwords do not match!</Alert>}
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
                      {" "}
                      Sign Up
                    </Button>
                    <div className="text-center mt-4">
                      <p>
                        You have an account ?-
                        <a href="Login" className="text-primary">
                          Login
                        </a>
                      </p>
                    </div>
                  </Form>
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

export default FormFloatingRegister;
