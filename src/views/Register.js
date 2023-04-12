import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Header,
  
} from "react-bootstrap";


function  FormFloatingRegister() {
  return (
    <>
      <Container fluid>
       <Row>
        <Col md=""></Col>
        <Col md="8">
        <Card  style={{ width: '30rem' }}>
        <Card.Header>
          <div className="text-center">
              <p>Register Form</p>
          </div>
          </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="d-flex mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Remember me"  />
                  <a href="#" className="ml-auto">Forgot password?</a>
                </Form.Group>
              <Button className="btn-fill form-control"
                    type="submit"
                    variant="primary" >
                Sign Up
              </Button>
              <div className="text-center mt-4">
                <p>You have an account ?-<a href="/Login"  className="text-primary">Login</a></p>
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

export default  FormFloatingRegister;




// import React from 'react';
// import { MDBInput } from 'mdb-react-ui-kit';
// function Register() {
//   return (
//     <MDBInput label='Example label' id='form1' type='text' />
//   );
// }

// export default Register;