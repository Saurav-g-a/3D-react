import React from "react";
import ChartistGraph from "react-chartist";
// import  { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';

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

function  UserList() {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
       <Row>
       <Col md="12">
            <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <div className="d-flex">
                        <div>
                        <Card.Title as="h4" className="mb-0">Users List Table</Card.Title>
                            <p className="card-category">
                           Users List Table
                            </p>
                        </div>
                        <div className="ml-auto">
                        {/* <Button variant="primary" className="btn-fill ms-auto" onClick={handleShow}>
                                Add Products
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Add Products</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Product Name"
                                        autoFocus
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Product Title"
                                        autoFocus
                                    />
                                    </Form.Group>
                                     
                                    <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                                        <Form.Label>Product Image</Form.Label>
                                        <Form.Control type="file" multiple
                                        />
                                    </Form.Group>
                                    <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                    >
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    </Form.Group>                   
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" className="btn-fill ml-auto m-2" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" className="btn-fill" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal> */}
                        </div>
                        </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">User Name</th>
                      <th className="border-0">User Email</th>
                      <th className="border-0">User Password</th>
                      <th className="border-0">Manage Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>
                        <i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                        <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td><i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                      <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td><i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                      <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td><i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                      <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td><i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                      <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td><i className="mx-2 ml-4 nc-icon nc-simple-add"></i>
                      <i className="nc-icon nc-simple-remove"></i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
       </Row> 
      </Container>
    </>
  );
}

export default  UserList;




