//import React from "react";
//import  { useState } from 'react';
 import React, { useState } from 'react';
import deleteSvg from './../assets/img/delete (2).png';
import editSvg from './../assets/img/pencil.png';
import { Modal } from "react-bootstrap";
import closeButton from 'react-bootstrap/closeButton';

// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function  ProductList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  return (
    
    <>
      <Container fluid>
       <Row>
       <Col md="12">
            <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <div className="d-flex">
                        <div>
                        <Card.Title as="h4" className="mb-0">Product List Table</Card.Title>
                            <p className="card-category">
                            Product List Table
                            </p>
                        </div>
                        <div className="ml-auto">
                        <Button variant="primary" className="btn-fill mx-auto" onClick={handleShow}>
                            Add Products
                        </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>

                                <Modal.Title>Add Products</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter product name"
                                        autoFocus
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter product title"
                                        autoFocus
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Embeded Title</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter embeded title"
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
                                    <Form.Control as="textarea" rows={3} 
                                    type="name"
                                    placeholder="Enter product description"
                                    />
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
                            </Modal>
                        </div>
                        </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Product ID</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Product Title</th>
                      <th className="border-0">Product Description</th>
                      <th className="border-0">Product Image</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>
                        <img src={editSvg} alt="" width='22px' height='22 px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>
                        <img src={editSvg} alt="" width='20px' height='20px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>                    
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>  
                        <img src={editSvg} alt="" width='20px' height='20px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>          
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>
                      <img src={editSvg} alt="" width='20px' height='20px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>
                       
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>
                      <img src={editSvg} alt="" width='20px' height='20px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>
                        
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Curaçao</td>
                      <td>Image name</td>
                      <td>
                        <img src={editSvg} alt="" width='20px' height='20px' onClick={handleShow1}/>
                        <img src={deleteSvg} alt="" width='20px' height='20px' onClick={handleShow2}/>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
       </Row> 
       <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
              <Modal.Title>Edit Products</Modal.Title>
              </Modal.Header>
                <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                          type="name"
                          placeholder="Enter product name"
                          autoFocus
                      />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Product Title</Form.Label>
                      <Form.Control
                          type="name"
                          placeholder="Enter product title"
                          autoFocus
                      />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Embeded Title</Form.Label>
                      <Form.Control
                          type="name"
                          placeholder="Enter embeded title"
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
                      <Form.Control as="textarea" rows={3} 
                      type="name"
                      placeholder="Enter product description"
                      />
                      
                      </Form.Group>                   
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" className="btn-fill ml-auto m-2" onClick={handleClose1}>
                      Close
                  </Button>
                  <Button variant="primary" className="btn-fill" onClick={handleClose1}>
                      Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                  <Modal.Title>Delete Confirmation</Modal.Title>  
                  </Modal.Header> 
                    <Modal.Body>                
                      Are you sure you want to delete the this?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" className="btn-fill ml-auto m-2" onClick={handleClose2}>
                          Cancel
                      </Button>
                      <Button variant="danger" className="btn-fill" onClick={handleClose2}>
                          Delete
                      </Button>
                    </Modal.Footer>
              </Modal>
      </Container>
    </>
    
  );
}

export default  ProductList;




